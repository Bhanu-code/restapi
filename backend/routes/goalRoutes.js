const express = require('express')
const router = express.Router()
const {getGoals, setGoals, putGoals, deleteGoals} = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(putGoals).delete(deleteGoals)


module.exports = router

