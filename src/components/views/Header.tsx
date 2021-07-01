import React from 'react'
import classes from "../css/Header.module.css";
import EmailIcon from '@material-ui/icons/Email';

const Header = () => {
    return (
        <div className = {classes.header} >
            <div className = {classes.header__contact} >
                <EmailIcon style = {{color: 'purple'}} />
                <p>Contact Me</p>
            </div>
            <div>
                {/* Some links */}
            </div>
        </div>
    )
}

export default Header;
