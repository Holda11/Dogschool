const express = require('express')
const router = express.Router()
const { getDog, postDog, putDog, deleteDog } = require('../Controllers/dogController')

router.route('/').get(getDog).post(postDog);
router.route('/:id').put(putDog).delete(deleteDog);


module.exports = router