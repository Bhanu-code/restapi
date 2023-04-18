
const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler( async (req, res)=>{
    res.status(200).json({message: 'Get goals'})
})

const setGoals = asyncHandler( async (req, res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please add some text')
    }
    res.status(200).json({message: 'Set goals'})
})

const putGoals = asyncHandler( async (req, res)=>{
    
    res.status(200).json({message: `Update goals ${req.params.id}` })
})

const deleteGoals = asyncHandler( async (req, res)=>{
    res.status(200).json({message: `Delete goals ${req.params.id}`})
})

module.exports = {
    getGoals, setGoals, putGoals, deleteGoals
}