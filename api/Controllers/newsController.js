// Controllers = zjednodušení Routes, callback funkce pro přijmutí/odeslání dat
const asyncHandler = require('express-async-handler')
const News = require('../Models/NewsModel')

//Get = vezme data z listu News pro nás
const getNews = asyncHandler( async (req, res)=>{
    const news = await News.find()
    res.status(200).json(news)
})

// Post = vloží data do databáze pro nás
//! Přidat podmínku na uživatele
const postNews = asyncHandler( async (req, res)=>{
    if(!req.body){
        res.status(400)
        throw new Error('Prosím zadejte text do pole')
    }
    const news = req.body
    const NewNews = new News(news)
    await NewNews.save()

    res.json(news)
})

//Put = upravý data pro nás
//! Přidat podmínku na uživatele
const putNews = asyncHandler( async (req, res)=>{
    const news = await News.findById(req.params.id)

    const updatedNews = await News.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedNews)
})

//Delete = odstaní data pro nás
//! Přidat podmínku na uživatele
const deleteNews = asyncHandler( async (req, res)=>{
    const news = await News.findById(req.params.id)


    await news.remove()

    res.status(200).json({id: req.params.id})

})

module.exports = {
    getNews,
    postNews,
    putNews,
    deleteNews
}