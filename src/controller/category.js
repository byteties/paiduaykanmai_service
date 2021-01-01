import mongoose from 'mongoose'
import categoryModel from '../schema/category'

const add = async(req,res) =>{
  const { body } = req
  const categoryResult = await categoryModel.create(body)
  return res.send(categoryResult.toObject())
}

const update = async(req,res) =>{
  const { params,body} = req
  const { id } = params
  const categoryID = mongoose.Types.ObjectId(id)
  await categoryModel.findByIdAndUpdate({_id:categoryID},body)
  return res.send("Update successfully!!!").status(200)
}

const get = async (req,res) => {
  const { id } = req.params
  const categoryID = mongoose.Types.ObjectId(id)
  const categoryResult = await categoryModel.findById(categoryID)
  return res.send(categoryResult.toObject())
}

const getAll = async(req,res) =>{
  const categoryResult = await categoryModel.find({})
  return res.send(categoryResult)
}
export default{
  add,
  update,
  getAll,
  get
}