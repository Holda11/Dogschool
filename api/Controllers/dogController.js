// Controllers = zjednodušení Routes, callback funkce pro přijmutí/odeslání dat
const asyncHandler = require('express-async-handler')
const Dog = require('../Models/DogModel')

//Get = vezme data z listu News pro nás
const getDog = asyncHandler( async (req, res)=>{
    const dog = await Dog.find()
    res.status(200).json(dog)
})

// Post = vloží data do databáze pro nás
//! Přidat podmínku na uživatele
const postDog = asyncHandler( async (req, res)=>{
    if(!req.body){
        res.status(400)
        throw new Error('Prosím zadejte text do pole')
    }
    const dog = req.body
    const NewDog = new Dog(dog)
    await NewDog.save()

    res.json(dog)
})

//Put = upravý data pro nás
//! Přidat podmínku na uživatele
const putDog = asyncHandler( async (req, res)=>{
    const dog = await Dog.findById(req.params.id)

    const updatedDog = await Dog.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedDog)
})

//Delete = odstaní data pro nás
//! Přidat podmínku na uživatele
const deleteDog = asyncHandler( async (req, res)=>{
    const dog = await Dog.findById(req.params.id)


    await dog.remove()

    res.status(200).json({id: req.params.id})

})

module.exports = {
    getDog,
    postDog,
    putDog,
    deleteDog
}