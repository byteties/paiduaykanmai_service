import mongoose from 'mongoose'

const SchemaModel = mongoose.Schema

const categorySchema = new SchemaModel({
  _id: {type: Number},
  name:{ type: String },
  description:{ type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const categoryModel = mongoose.model('category', categorySchema)

export default categoryModel

