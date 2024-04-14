import React, { useState } from "react";
import Nav from "./comp/nav";
import { BrowserRouter } from "react-router-dom";
import Rout from "./comp/rout";
import Footer from "./comp/footer";
import Homeproducts from "./comp/home_products";

const App = () => {
  //add to cart
  const [cart, setCart] =useState([])
  const [shop, setShop] = useState(Homeproducts)
  const [search, setSearch] = useState([])
  const Filter= (x)=>
  {
    const catefilter= Homeproducts.filter((product)=>
  {
    return product.cat === x
  })
  setShop(catefilter)
  }
  const allcatefilter =()=>
  {
    setShop(Homeproducts)
  }
  //seacrh filter
  const searchproduct = () =>
  {
    const searchfilter = Homeproducts.filter((x) =>
  {
    return x.cat === search
  })
  setShop(searchfilter)
  }
  //cart
  
  const addtocart= (product) =>
  {
     const exist = cart.find((x)=> 
    {
      return x.id === product.id
    })
    if (exist)
    {
      alert("This product is already in cart")
    }
    else
    {
      setCart([...cart,{...product, qty:1}])
      alert("Added to cart")
    }
    
  }
  console.log(cart)
    return (
    <>
    <BrowserRouter>
    <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
    <Rout setCart={setCart}cart={cart}shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>
    <Footer/>
    </BrowserRouter>
    </>
  );
};

export default App;

