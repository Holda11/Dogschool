const express = require('express')
const router = express.Router()
const { getBoxer, postBoxer, putBoxer, deleteBoxer } = require('../Controllers/BoxerController')
const { protect } = require('../Middleware/authMiddleware')


router.route('/').get(getBoxer).post(protect, postBoxer);
router.route('/:id').put(protect, putBoxer).delete(protect, deleteBoxer);


module.exports = router