const express = require('express')
const router = express.Router()
const { getNews, postNews, putNews, deleteNews } = require('../Controllers/newsController')

router.route('/').get(getNews).post(postNews);
router.route('/:id').put(putNews).delete(deleteNews);


module.exports = router