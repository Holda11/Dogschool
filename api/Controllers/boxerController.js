// Controllers = zjednodušení Routes, callback funkce pro přijmutí/odeslání dat
const asyncHandler = require('express-async-handler')
const Boxer = require('../Models/BoxerModel')

//Get = vezme data z listu News pro nás
const getBoxer = asyncHandler( async (req, res)=>{
    const boxer = await Boxer.find()
    res.status(200).json(boxer)
})

// Post = vloží data do databáze pro nás
//! Přidat podmínku na uživatele
const postBoxer = asyncHandler( async (req, res)=>{
    if(!req.body){
        res.status(400)
        throw new Error('Prosím zadejte text do pole')
    }
    const boxer = req.body
    const NewBoxer = new Boxer(boxer)
    await NewBoxer.save()

    res.json(boxer)
})

//Put = upravý data pro nás
//! Přidat podmínku na uživatele
const putBoxer = asyncHandler( async (req, res)=>{
    const boxer = await Boxer.findById(req.params.id)

    const updatedBoxer = await Boxer.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedBoxer)
})

//Delete = odstaní data pro nás
//! Přidat podmínku na uživatele
const deleteBoxer = asyncHandler( async (req, res)=>{
    const boxer = await Boxer.findById(req.params.id)


    await boxer.remove()

    res.status(200).json({id: req.params.id})

})

module.exports = {
    getBoxer,
    postBoxer,
    putBoxer,
    deleteBoxer
}