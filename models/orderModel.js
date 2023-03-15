import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Products",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    status: {
      type: String,
      default: "Not Process",
      enum: [
        "Not Process",
        "Your Order being Packed",
        "Out For Delivery",
        "Delivered",
        "Order Canceled ",
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
