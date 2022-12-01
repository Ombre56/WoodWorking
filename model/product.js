import { Schema, models, model } from 'mongoose';

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Products = models.product || model('product', productSchema);

export default Products;