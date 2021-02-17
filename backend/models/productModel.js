const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: false },
  brand: { type: String, required: true },
  shop:{type:String, required:false},
  price:{type:Number, default:0, required:true},
  category: { type: String, required: true },
  countInStock: { type: Number, default:0, required: true },
  description: { type: String, required: false },
  rating: { type: Number, default:0},
  numReviews: { type: Number, default:0  },
});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
