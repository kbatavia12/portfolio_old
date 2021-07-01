import React from 'react'
import classes from '../css/MainBox.module.css';
import Header from './Header';
import MainProfile from './MainProfile';

const MainBox = () => {
    return (
        <div className = {classes.mainbox} >
            {/* Header goes here */}
            <Header />
            {/* Main Profile */}
            <MainProfile />

        </div>
    )
}

export default MainBox;
