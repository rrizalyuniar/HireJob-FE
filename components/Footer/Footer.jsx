import React from 'react';
import Image from "next/legacy/image";
import styles from "../../styles/Home.module.css";
import Icon from "../../public/image/icon.png"

const Footer = () => {
    return (
        <footer className={`${styles.footer} text-light mt-3`}>
            <div className="d-flex align-items-center">
                <div style={{ position: "relative", height: 40, width: 40 }}>
                    <Image src={Icon} alt="Hiring App Logo" fill sizes="100vw"
                        style={{ maxWidth: "100%", height: "auto" }} />
                </div>
                <h2 className="ms-2 mt-2">Hire Job</h2>
            </div>
            <p className="mt-3 mb-5" style={{ maxWidth: "350px" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Porro odio corporis qui odit nisi mollitia!
            </p>
            <hr style={{ height: "2px" }} />
            <div className="d-flex justify-content-between mt-4">
                <p className="m-0 p-0">Copyright © 2023 R.Rizal Yuniar Sutono</p>
                <div className="d-none d-sm-block">
                    <a className="text-light me-5" href="#" style={{ textDecoration: "none"}}>
                        Telepon
                    </a>
                    <a className="text-light" href="#" style={{ textDecoration: "none"}}>
                        Email
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer