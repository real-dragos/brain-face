import React from 'react';
import styles from './Logo.module.css';
import logo from '../../assets/logo.png';
import Tilt from 'react-tilt';
import { Link } from "react-router-dom";

const Logo = () => {
    return (<Tilt className={["Tilt", styles['tilt-wrapper']].join(' ')} options={{ max: 40 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner">
            <Link to="/home/">
                <img className={styles['logo']} alt='logo' src={logo} />
            </Link>
        </div>
    </Tilt>)
}

export default Logo;