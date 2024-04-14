import React, { useState } from "react";
import "./shop.css";
import { AiFillHeart, AiFillEye } from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";


const Shop = ({shop, Filter, allcatefilter, addtocart}) => {
    const [showDetail, setShowDetails] = useState(false)
    const [detail, setDetail] = useState([])
    const detailpage = (product) =>
    {
        const detaildata = ([{product}])
        const productdetail = detaildata[0]["product"]
        setDetail(productdetail)
        setShowDetails(true)
    }
    const closedetail = () =>
    {
        setShowDetails(false)
    }
  return (
    <>
    {
        showDetail ?
        <>
        <div className="product_detail">
            <button className="close_btn" onClick={closedetail}><IoIosCloseCircleOutline/></button>
            <div className="container">
                <div className="img_box">
                    <img src={detail.img}alt=""></img>
                </div>
                <div className="info">
                    <h4>#{detail.cat}</h4>
                    <h2>{detail.Name}</h2>
                    <p>Author:{detail.author}</p>
                    <h3>${detail.price}</h3>
                    <button onClick={()=>addtocart (detail)} > Cart</button>
                </div>
            </div>
        </div>
        </>
        : null
    }
    <div className="shop">
        <h2># shop</h2>
        <p>Home . shop</p>
        <div className="container">
            <div className="left_box">
                <div className="category">
                    <div className="header">
                        <h3>All categories</h3>
                    </div>
                    <div className="box">
                        <ul>
                            <li onClick={()=>allcatefilter("children")}>#All</li>
                            <li onClick={()=>Filter("cookbook")}># cookbook</li>
                            <li onClick={()=>Filter("history")}># history</li>
                            <li onClick={()=>Filter("novel")}># novel</li>
                            <li onClick={()=>Filter("travel")}># travel</li>
                            <li onClick={()=>Filter("wildlife")}># wildlife</li>
                        </ul>
                    </div>
                </div>
                <div className="banner">
                    <div className="img_box">
                        <img src="img/bn.jpg" alt=""></img>
                    </div>
                </div>
            </div>
            <div className="right_box">
                <div className="banner">
                    <div className="img_box">
                        <img src="img/kk.jpg"alt=""></img>
                    </div>
                </div>
                <div className="product_box">
                    <h2>Buy Books</h2>
                    <div className="product_container">
                        {
                            shop.map((curElm)=>
                        {
                            return(
                                <>
                                <div className="box">
                                    <div className="img_box">
                                        <img src={curElm.img}alt=""></img>
                                        <div className="icon">
                                            <li><AiFillHeart/></li>
                                            <li onClick={() => detailpage (curElm)}><AiFillEye/></li>
                                        </div>
                                    </div>
                                    <div className="detail">
                                    <h3>{curElm.Name}</h3>
                                    <p>${curElm.price}</p>
                                    <button onClick={()=>addtocart (curElm)}>Add To Cart</button>
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
    </div>
    </>
  );
};

export default Shop;