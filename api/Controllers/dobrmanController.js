// Controllers = zjednodušení Routes, callback funkce pro přijmutí/odeslání dat
const asyncHandler = require('express-async-handler')
const Dobrman = require('../Models/DobrmanModel')

//Get = vezme data z listu News pro nás
const getDobrman = asyncHandler( async (req, res)=>{
    const dobrman = await Dobrman.find()
    res.status(200).json(dobrman)
})

// Post = vloží data do databáze pro nás
//! Přidat podmínku na uživatele
const postDobrman = asyncHandler( async (req, res)=>{
    if(!req.body){
        res.status(400)
        throw new Error('Prosím zadejte text do pole')
    }
    const dobrman = req.body
    const NewDobrman = new Dobrman(dobrman)
    await NewDobrman.save()

    res.json(dobrman)
})

//Put = upravý data pro nás
//! Přidat podmínku na uživatele
const putDobrman = asyncHandler( async (req, res)=>{
    const dobrman = await Dobrman.findById(req.params.id)

    const updatedDobrman = await Dobrman.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedDobrman)
})

//Delete = odstaní data pro nás
//! Přidat podmínku na uživatele
const deleteDobrman = asyncHandler( async (req, res)=>{
    const dobrman = await Dobrman.findById(req.params.id)


    await dobrman.remove()

    res.status(200).json({id: req.params.id})

})

module.exports = {
    getDobrman,
    postDobrman,
    putDobrman,
    deleteDobrman
}