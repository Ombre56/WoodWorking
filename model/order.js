import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },
    customer_email: {
      type: String,
      required: true,
      maxlength: 60,
    },
    address: {
      type: String,
      required: true,
      maxlength: 200,
    },
    products: [
      {
        name: {
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
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'products',
          required: true,
        }
      }
    ],
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    method: {
      type: Number,
      required:true
    },
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default Order;