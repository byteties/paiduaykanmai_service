import mongoose from 'mongoose'

const SchemaModel = mongoose.Schema

const snackSchema = new SchemaModel({
  name:{ type: String },
  description:{ type: String },
  price: {type: Number},
  unit: { type: String },
  shopID: { type: String },
  categoryID: { type: Number },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const snackModel = mongoose.model('snack', snackSchema)

export default snackModel

