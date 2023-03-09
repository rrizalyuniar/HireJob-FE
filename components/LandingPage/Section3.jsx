import React from 'react';
import Image from "next/legacy/image";
import styles from "../../styles/Home.module.css";
import img from "../../public/image/img3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Section3 = () => {
    let Skills = [
        {
            skill: "Java"
        },
        {
            skill: "Kotlin"
        },
        {
            skill: "PHP"
        },
        {
            skill: "JavaScript"
        },
        {
            skill: "Golang"
        },
        {
            skill: "C++"
        },
        {
            skill: "Ruby"
        },
        {
            skill: "10+ Bahasa lainnya"
        },
    ]
    return (
        <div className="container-lg">
            <div className={`${styles.skill} row mb-5`}>
                <div className={`${styles.side} col-12 col-md-6 mt-5`}>
                    <h1 className="fw-bold">Skill Talent</h1>
                    <p className="text-secondary text-start mt-3 mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
                        distinctio facilis dignissimos officiis numquam ullam quo,
                        consequuntur quae molestiae aperiam.
                    </p>

                    <div className="row mb-2">
                        {Skills.map((item) => (
                            <div key={item.skill} className="col-6 my-1">
                                <div className="d-flex">
                                    <svg width="24" height="24">
                                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#FBB017" }} />
                                    </svg>
                                    <p className="ms-2">{item.skill}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-12 col-md-6 d-none d-md-block">
                    <div className="position-relative d-flex align-items-center justify-content-center h-100">
                        <Image className={`${styles["z-index"]} position-absolute`} src={img} alt="Gambar Landing 3"
                            style={{ maxWidth: "100%", height: "auto" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3