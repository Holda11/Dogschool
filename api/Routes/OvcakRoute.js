const express = require('express')
const router = express.Router()
const { getOvcak, postOvcak, putOvcak, deleteOvcak } = require('../Controllers/OvcakController')
const { protect } = require('../Middleware/authMiddleware')


router.route('/').get(getOvcak).post(protect, postOvcak);
router.route('/:id').put(protect, putOvcak).delete(protect, deleteOvcak);


module.exports = router