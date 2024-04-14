import React from "react";
import { PiBooksThin } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";
import { CiLogout } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = ({search,setSearch, searchproduct}) => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();  
  return (
    <>
    <div className="header">
        <div className="top_header">
            <div className="icon">
            <PiBooksThin/>
            </div>
            <div className="info">
                <p>JALINGA BOOKS</p>
            </div>
        </div>
        <div className="mid_header">
            <div className="logo">
                <img src="img/logo.png" alt="logo"></img>   
            </div>
            <div className="search_box">
                <input type="text" value={search}placeholder="search books" onChange={(e)=>setSearch(e.target.value)}></input>
                <button onClick={searchproduct}><IoIosSearch/></button>
            </div>
            {
             isAuthenticated ?
             <div className="user">
                <div className="icon">
                    <CiLogout/>
                </div>
                <div className="btn">
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Signout</button>
                </div>
            </div>
            :
            <div className="user">
                <div className="icon">
                    <FiLogIn/>
                </div>
                <div className="btn">
                    <button onClick={() => loginWithRedirect()}>Sign in</button>
                </div>
            </div>
            }  
        </div>
        <div className="last_header">
            <div className="user_profile">
                {
                    isAuthenticated ?
                    <>
                    <div className="icon">
                        <CiUser/>
                    </div>
                    <div className="info">
                        
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    </div>
                    </>
                    :
                    <>
                    <div className="icon">
                        <CiUser/>
                    </div>
                    <div className="info">
                        <p>Login</p>
                    </div>
                    </>
                }
            </div>
            <div className="nav">
                <ul>
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/shop" className="link">Shop</Link></li>
                    <li><Link to="/cart" className="link">Cart</Link></li>
                    <li><Link to="/contact" className="link">Contact</Link></li>
                </ul>
            </div>
            <div className="offer">
                <p>5% easter give back</p>
            </div>
        </div>
    </div>
    </>
  );
};

export default Nav;