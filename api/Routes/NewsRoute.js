const express = require('express')
const router = express.Router()
const { getNews, postNews, putNews, deleteNews } = require('../Controllers/newsController')
const { protect } = require('../Middleware/authMiddleware');



router.route('/').get(getNews).post(  protect, postNews);
router.route('/:id').put(protect, putNews).delete(protect, deleteNews);


module.exports = router