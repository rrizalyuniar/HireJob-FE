import React from 'react';
import Image from "next/legacy/image";
import styles from "../../styles/Home.module.css";
import img from "../../public/image/img2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Section2 = () => {
    let List = [
        {
            list: "Lorem ipsum dolor sit amet."
        },
        {
            list: "Lorem ipsum dolor sit amet."
        },
        {
            list: "Lorem ipsum dolor sit amet."
        },
        {
            list: "Lorem ipsum dolor sit amet."
        },
    ];

    return (
        <div className="container-lg">
            <div className={`${styles.why} row mb-5`}>
                <div className="col-12 col-md-6 d-none d-md-block">
                    <div className="position-relative d-flex align-items-center justify-content-center h-100">
                        <Image className={`${styles["z-index"]} position-absolute`} src={img} alt="Gambar Landing 2"
                            style={{ maxWidth: "100%", height: "auto" }} />
                    </div>
                </div>

                <div className={`${styles.side} col-12 col-md-6`}>
                    <h1 className="fw-bold">Kenapa harus mencari tallent di Hiring App</h1>
                    <ul className="list-unstyled mt-3 text-start mt-5">

                        {List.map((item) => (
                            <li className="mb-2">
                                <div className="d-flex">
                                    <svg width="24" height="24">
                                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#5E50A1" }} />
                                    </svg>
                                    <p className="ms-3">
                                        {item.list}
                                    </p>
                                </div>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Section2