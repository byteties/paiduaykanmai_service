import mongoose from 'mongoose'
import snackModel from '../schema/snack'

const add = async(req,res) =>{
  const { body } = req
  const snackResult = await snackModel.create(body)
  return res.send(snackResult.toObject())
}

const update = async(req,res) =>{
  const { params,body} = req
  const { id } = params
  const snackID = mongoose.Types.ObjectId(id)
  await snackModel.findByIdAndUpdate({_id:snackID},body)
  return res.send("Update successfully!!!").status(200)
}

const get = async (req,res) => {
  const { id } = req.params
  const snackID = mongoose.Types.ObjectId(id)
  const snackResult = await snackModel.findById(snackID)
  return res.send(snackResult.toObject())
}

const getAll = async(req,res) =>{
  const snackResult = await snackModel.find({})
  return res.send(snackResult)
}

const remove = async(req,res) =>{
  const { id } = req.params
  const snackID = mongoose.Types.ObjectId(id)
  await snackModel.deleteOne({_id:snackID})
  return res.send('Delete successfully!!!').status(200)
}

export default{
  add,
  update,
  getAll,
  get,
  remove
}