// Controllers = zjednodušení Routes, callback funkce pro přijmutí/odeslání dat
const asyncHandler = require('express-async-handler')
const Ovcak = require('../Models/OvcakModel')

//Get = vezme data z listu News pro nás
const getOvcak = asyncHandler( async (req, res)=>{
    const ovcak = await Ovcak.find()
    res.status(200).json(ovcak)
})

// Post = vloží data do databáze pro nás
//! Přidat podmínku na uživatele
const postOvcak = asyncHandler( async (req, res)=>{
    if(!req.body){
        res.status(400)
        throw new Error('Prosím zadejte text do pole')
    }
    const ovcak = req.body
    const NewOvcak = new ovcak(ovcak)
    await NewOvcak.save()

    res.json(ovcak)
})

//Put = upravý data pro nás
//! Přidat podmínku na uživatele
const putOvcak = asyncHandler( async (req, res)=>{
    const ovcak = await Ovcak.findById(req.params.id)

    const updatedOvcak = await Ovcak.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedOvcak)
})

//Delete = odstaní data pro nás
//! Přidat podmínku na uživatele
const deleteOvcak = asyncHandler( async (req, res)=>{
    const ovcak = await Ovcak.findById(req.params.id)


    await ovcak.remove()

    res.status(200).json({id: req.params.id})

})

module.exports = {
    getOvcak,
    postOvcak,
    putOvcak,
    deleteOvcak
}