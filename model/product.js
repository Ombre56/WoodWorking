import { Schema, models, model } from 'mongoose';

const productSchema = new Schema({
  image: String,
  name: String,
  price: Number,
  amount: Number,
  status: String,
});

const Products = models.product || model('product', productSchema);

export default Products;