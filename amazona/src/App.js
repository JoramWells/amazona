import Container0 from "./components/Container0";
import Container1 from "./components/Container1";
import Header from "./components/Header";
import Outfits from "./components/Outfits";
import ProductList from "./components/ProductList";
import TrendingProducts from "./components/TrendingProducts";
import Container from "@material-ui/core/Container";
import "./style.css";
import Wearables from "./components/Wearables";
import ClothingList from "./components/ClothingList";
import OtherProducts from "./components/OtherProducts";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import HomepageRoutes from "./components/HomepageRoutes";
import CartScreen from "./components/CartScreen";
import SignIn from "./components/SignIn"
import Register from "./components/Register";
import AddProduct from "./components/AddProduct";
function App() {
  return (
    <>
      <Header />

      <Router>
        <Route path="/" exact component={HomepageRoutes} />
        <Route path="/signin" component={SignIn} />
        <Route path="/products" component={AddProduct} />
        <Route path="/register" component={Register} />

        <Route path="/product-detail/:id" component={ProductDetails} />
        <Route path="/cart/:id?" component={CartScreen} />
      </Router>
      <Footer />
    </>
  );
}

export default App;
