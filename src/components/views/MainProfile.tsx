import React from 'react'
import classes from '../css/MainProfile.module.css';
import ProfilePic from '../../static/Profile.jpg';

const MainProfile = (props: any) => {
    return (
        <div {...props} className = {classes.mainprofile} >
            <div className = {classes.mainprofile__intro} >
                <h1>Karan Batavia.</h1>
                <p>Hello, I'm Karan Batavia. I'm a Full-Stack Developer based in Nashik, Maharashtra. </p>
            </div>

            <div className = {classes.mainprofile__imagecontainer} >
                <img src = {ProfilePic} />
                <div></div>
            </div>



        </div>
    )
}

export default MainProfile;
