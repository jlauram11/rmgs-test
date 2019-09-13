import React, { Component } from "react";
import Collapsible from "../Collapsible/Collapsible";
import facebookIcon from "../../images/facebook-icon.png";
import instagramIcon from "../../images/instagram_icon.png";
import headerLogo from "../../images/RMGS_header.png";
import "./Header.css";
import "../Collapsible/Collapsible.css";

class Header extends Component {
    constructor () {
        super();

        this.state = {
            displayMenu: false
        }
    }

    onClick = () => {
        this.setState({
            displayMenu: !this.state.displayMenu,
        })
    }
    
    render () {

        let displayMenu = () => {
            if (this.state.displayMenu) {
               return <Collapsible />
            }
        }

        let buttonContent = () => {
            if (this.state.displayMenu) {
                return "▲"
            }
            else {
                return "▼"
            }
        }
        let socialLinks = {
            facebook: "https://www.facebook.com/SendOutCards/",
            instagram: "https://www.instagram.com/sendoutcards_official/?hl=en"
        }
    return (
        <div>
            <div className="headerFlex">
                {displayMenu()}
                <div className="header">
                    <img src={headerLogo} width="100%" alt="RMGS logo"/>
                </div>
                <div>
                    <a href={socialLinks.facebook}>
                        <img className="facebookIcon" src={facebookIcon} alt="Facebook icon"/>
                    </a>
                    <a href={socialLinks.instagram}>
                        <img className="instagramIcon" src={instagramIcon} alt="Instagram icon"/>
                    </a>
                </div>
                <button className="collapsible" onClick={this.onClick}>
                    <span>&#9776;<b>{buttonContent()}</b></span> 
                </button>
            </div>
        </div>
    )
}}

export default Header;