import { Schema, models, model } from 'mongoose';

const productSchema = new Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String
  },
  description: String,
  price: Number,
  amount: Number,
  status: String,
});

const Products = models.product || model('product', productSchema);

export default Products;