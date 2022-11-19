const express = require('express')
const router = express.Router()
const { getDog, postDog, putDog, deleteDog } = require('../Controllers/dogController')
const { protect } = require('../Middleware/authMiddleware')


router.route('/').get(getDog).post(protect, postDog);
router.route('/:id').put(protect, putDog).delete(protect, deleteDog);


module.exports = router