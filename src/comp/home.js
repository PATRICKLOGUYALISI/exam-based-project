import React, {useEffect, useState} from "react";
import "./home.css"
import { Link } from "react-router-dom";
import Homeproducts from "./home_products";
import { AiFillEye} from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Home = ({addtocart}) => {
  const[ newProduct, setNewProduct] = useState ([])
  const[ featuredProduct, setFeaturedProduct] = useState ([])
  const[ topProduct, setTopProduct] = useState ([])
  const [trendingProducts, setTrendingProducts]= useState(Homeproducts) 
  const filtercate =(x) =>
  {
    const filterproduct = Homeproducts.filter((curElm)=>{
        return curElm.type === x
    })
    setTrendingProducts(filterproduct)
  } 
  const allTrendingProducts =()=>
  {
    setTrendingProducts(Homeproducts)
  }
  useEffect(() =>
  {
    productcategory()
  })
  const productcategory = () =>
  {
    const newcategory = Homeproducts.filter((x) =>
    {
        return x.type === "new"
    }) 
    setNewProduct(newcategory)

    const featuredcategory = Homeproducts.filter((x)=>
    {return x.type ==="featured"
    })
    setFeaturedProduct(featuredcategory)
    
    const topcategory = Homeproducts.filter((x)=>
    {
        return x.type ==="top"
    })
    setTopProduct(topcategory)
  }
  return (
    <>
    <div className="home">
        <div className="top_banner">
            <div className="contant">
                <h3>Home Of The Best Books</h3>
                <h2>From Across east african</h2>
                <p>Brought Near to you.</p>
                <Link to="/shop" className="link">get now</Link>
            </div>
        </div>
        <div className="trending">
            <div className="container">
                <div className="left_box">
                    <div className="header">
                        <div className="heading">
                            <h2 onClick={()=>allTrendingProducts()}>Popular</h2>
                        </div>
                        <div className="cate">
                            <h3 onClick={()=>filtercate ("new")}>New</h3>
                            <h3 onClick={()=>filtercate("featured")}>Old</h3>
                            <h3 onClick={()=>filtercate("top")}>Top</h3>
                        </div>
                    </div>
                    <div className="products">
                        <div className="container">
                            {
                                trendingProducts.map((curElm)=>
                                {
                                    return(
                                        <>
                                        <div className="box">
                                            <div className="img_box">
                                                <img src={curElm.img} alt=""></img>
                                                <div className="icon">
                                                    <div className="icon_box">
                                                    <AiFillEye />
                                                    </div>
                                                    <div className="icon_box">
                                                    <AiFillHeart />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h3>{curElm.Name}</h3>
                                                <p>${curElm.price}</p>
                                                <button className="btn" onClick={() => addtocart (curElm)}>Add To Cart</button>
                                            </div>
                                        </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <button>show more</button>
                    </div>
                </div>
                <div className="right_box">
                    <div className="right_container">
                        <div className="testimonial">
                            <div className="head">
                                <h3>Feed back</h3>
                            </div>
                            <div className="details">
                                <div className="img_box">
                                    <img src="img/ts.jpg" alt="t"></img>
                                </div>
                                <div className="info">
                                    <h3> MOrjan Lafu</h3>
                                    <h4>IT Specialist</h4>
                                    <p> ILike ths services and the customer care
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="newsletter">
                            <div className="head">
                                <h3>newsletter</h3>
                            </div>
                            <div className="form">
                                <p>join our mailling list</p>
                                <input type="email" placeholder="Email" outoComplete="off"></input>
                                <button>subscribe</button>
                                <div className="icon_box">
                                    <div className="icon">
                                        <FaYoutube/>
                                    </div>
                                    <div className="icon">
                                        <FaFacebookSquare/>
                                    </div>
                                    <div className="icon">
                                        <FaXTwitter/>
                                    </div>
                                    <div className="icon">
                                        <FaInstagramSquare/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="banner">
            <div className="container">
                <div className="left_box">
                    <div className="box">
                        <img src="img/bn.jpg" alt="banner"></img>
                    </div>
                </div>
                <div className="right_box">
                    <div className="top">
                        <img src="img/ban.jpg" alt="banner"></img>
                    </div>
                </div>
            </div>
        </div>
        <div className="product_type">
            <div className="container">
                <div className="box">
                    <div className="header">
                        <h2>New Books</h2>
                    </div>
                    {
                        newProduct.map((curElm) =>
                        {
                            return(
                                <>
                                <div className="productbox">
                                    <div className="img-box">
                                        <img src={curElm.img}  alt=""></img>
                                    </div>
                                    <div className="details">
                                        <h3>{curElm.Name}</h3>
                                        <p> ${curElm.price}</p>
                                        <div className="icon">
                                            <button><AiFillEye /></button>
                                            <button><AiFillHeart /></button>
                                            <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                                        </div>
                                    </div>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="box">
                    <div className="header">
                        <h2>Featured Books</h2>
                    </div>
                    {
                        featuredProduct.map((curElm) =>
                        {
                            return(
                                <>
                                <div className="productbox">
                                    <div className="img-box">
                                        <img src={curElm.img}  alt=""></img>
                                    </div>
                                    <div className="details">
                                        <h3>{curElm.Name}</h3>
                                        <p> ${curElm.price}</p>
                                        <div className="icon">
                                            <button><AiFillEye /></button>
                                            <button><AiFillHeart /></button>
                                            <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                                        </div>
                                    </div>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="box">
                    <div className="header">
                        <h2>Top selling Books</h2>
                    </div>
                    {
                        topProduct.map((curElm) =>
                        {
                            return(
                                <>
                                <div className="productbox">
                                    <div className="img-box">
                                        <img src={curElm.img}  alt=""></img>
                                    </div>
                                    <div className="details">
                                        <h3>{curElm.Name}</h3>
                                        <p> ${curElm.price}</p>
                                        <div className="icon">
                                            <button><AiFillEye /></button>
                                            <button><AiFillHeart /></button>
                                            <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                                        </div>
                                    </div>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Home;