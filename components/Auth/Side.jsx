import React from 'react';
import Link from "next/link";
import Image from "next/legacy/image";
import Icon from "../../public/image/icon.png";
import styles from "../../styles/auth.module.css";


const Side = () => {
    return (
        <div className={`${styles.side} col-sm-5 col-md-6 d-none d-sm-flex`}>
            <div className={`${styles.content} mx-1 mx-md-2 mx-lg-5 text-white w-100`}>
                <div className={styles.icon}>

                    <Link href="/" className="text-decoration-none">
                        <div className="d-flex align-items-center">
                            <div style={{ position: "relative", height: 40, width: 40 }}>
                                <Image src={Icon} alt="Hiring AIcon" fill sizes="100vw" />
                            </div>
                            <p className="ms-2 mt-3 text-white">Hiring App</p>
                        </div>
                    </Link>

                </div>
                <h1 className="fw-bold"  style={{ maxWidth: "540px", fontSize: "40px" }}>
                    Temukan developer berbakat & terbaik di berbagai bidang keahlian
                </h1>
            </div>
        </div>
    )
}

export default Side