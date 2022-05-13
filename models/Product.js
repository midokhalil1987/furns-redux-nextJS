import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    // desc: {
    //   type: String,
    //   required: true,
    //   maxlength: 200,
    // },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    // extraOptions: {
    //   type: [
    //     {
    //       text: { type: String, required: true },
    //       price: { type: Number, required: true },
    //     },
    //   ],
    // },
  },
  { timestamps: true }
);

export default mongoose.model.Products ||
  mongoose.model("Products", ProductSchema);
