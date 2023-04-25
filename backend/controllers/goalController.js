
const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
const User = require('../models/userModel')

const getGoals = asyncHandler( async (req, res)=>{

    const goals = await Goal.find({user: req.user.id})

    res.status(200).json(goals)
})

const setGoals = asyncHandler( async (req, res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please add some text')
    }

    const goals = await Goal.create({
        text : req.body.text,
        user: req.user.id,
    })

    res.status(200).json(goals)
})

const putGoals = asyncHandler( async (req, res)=>{

    const goals = await Goal.findById(req.params.id)

    if(!goals){
        res.status(400)
        throw new Error('Goal not found')
    }

    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    if(goals.user.toString() !== user.id){
        res.status(401)
        throw new Error('user not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new:true,})
    
    res.status(200).json(updatedGoal)
})

const deleteGoals = asyncHandler( async (req, res)=>{
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    if(goals.user.toString() !== user.id){
        res.status(401)
        throw new Error('user not authorized')
    }
    
    await goal.deleteOne({_id:req.params.id});

    res.status(200).json({_id : req.params.id})
})

module.exports = {
    getGoals, setGoals, putGoals, deleteGoals
}