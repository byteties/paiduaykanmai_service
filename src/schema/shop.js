import mongoose from 'mongoose'

const SchemaModel = mongoose.Schema

const shopSchema = new SchemaModel({
  name:{ type: String },
  description:{ type: String },
  tel: { type: String },
  address: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const shopModel = mongoose.model('shop', shopSchema)

export default shopModel

