const express = require('express')
const router = express.Router()
const { getDobrman, postDobrman, putDobrman, deleteDobrman } = require('../Controllers/dobrmanController')
const { protect } = require('../Middleware/authMiddleware')


router.route('/').get(getDobrman).post(protect, postDobrman);
router.route('/:id').put(protect, putDobrman).delete(protect, deleteDobrman);


module.exports = router