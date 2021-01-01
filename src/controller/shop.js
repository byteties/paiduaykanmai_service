import mongoose from 'mongoose'
import shopModel from '../schema/shop'

const add = async(req,res) =>{
  const { body } = req
  const shopResult = await shopModel.create(body)
  return res.send(shopResult.toObject())
}

const update = async(req,res) =>{
  const { params,body} = req
  const { id } = params
  const shopID = mongoose.Types.ObjectId(id)
  await shopModel.findByIdAndUpdate({_id:shopID},body)
  return res.send("Update successfully!!!").status(200)
}

const get = async (req,res) => {
  const { id } = req.params
  const shopID = mongoose.Types.ObjectId(id)
  const shopResult = await shopModel.findById(shopID)
  return res.send(shopResult.toObject())
}

const getAll = async(req,res) =>{
  const shopResult = await shopModel.find({})
  return res.send(shopResult)
}
export default{
  add,
  update,
  getAll,
  get
}