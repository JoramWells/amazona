const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const data = require("./items");
const userRoutes = require('./routes/userRoutes')
const productRoute = require('./routes/productRoutes')

mongoose.connect("mongodb+srv://root:JoramWells18@cluster0.jrxlt.mongodb.net/Cluster0?retryWrites=true&w=majority",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).catch(error => console.log(error));



const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use('/api/users', userRoutes)
app.use('/api/products', productRoute)


// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });

// app.get("/api/products/:id", (req, res) => {
//   const productId = req.params.id;
//   const product = data.products.find((x) => x._id === productId);
//   if (product) {
//     res.send(product);
//   } else res.status(404).send({ msg: "Product Not Found" });
// });

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
