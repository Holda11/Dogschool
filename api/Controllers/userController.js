// Controllers = zjednodušení Routes, callback funkce pro přijmutí/odeslání dat
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const User = require('../Models/UserModel')
const jwt = require('jsonwebtoken')


//RegisterUser = registrace nového uživatele
const registerUser = asyncHandler(async (req, res) => {
  //request na získaní dat  
  const { name, password } = req.body
  
  //pokuď není zadáno oba údaje, uživatel dostane error
    if (!name || !password) {
      res.status(400)
      throw new Error('Please add all fields')
    }
  
    // Nalezení || zkontrolování zda uživatel existuje
    const userExists = await User.findOne({ name })
  
    if (userExists) {
      res.status(400)
      throw new Error('User already exists')
    }
  
    // Zahashování hesla
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
  
    // Vytvoření uživatele
    const user = await User.create({
      name,
      password: hashedPassword,
    })
  
    if (user) {
      res.status(201).json({
        _id: user.id,
        token: generateToken(user._id),
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
  })
  // @desc    Authenticate a user
  // @route   POST /api/users/login
  // @access  Public
  
  const loginUser = asyncHandler(async (req, res) => {
  //Requestujeme jméno a heslo
    const { name, password } = req.body
  
    // Hledáme jméno
    const user = await User.findOne({ name })
  // Pokuď user a odhashované heslo sedí, posleme údaje nazpět
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.name,
        token: generateToken(user._id),
      })
    } else {
      res.status(400)
      throw new Error('Invalid credentials')
    }
  })
  
  
  // Generate JWT
  const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
  }
  
  module.exports = {
    registerUser,
    loginUser
  }