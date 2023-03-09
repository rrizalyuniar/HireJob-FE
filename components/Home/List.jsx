import React from 'react';
import Image from 'next/image';
import Avatar from '../../public/image/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/list.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const list = ( { item } ) => {
    
    return (
        <div className="container" style={{ marginTop: "50px"}}>
            <div className="card" style={{ maxWidth: "70rem" }}>
                <ul className="list-group list-group-flush">
                    {/* {workers.map((item) => ( */}
                        <li className="list-group-item">
                            <div className={`d-flex mt-4 mb-4 ${styles.card}`}>
                                <Image src={item?.photo} width="100" height="100" className="mx-4 rounded-circle" alt="Gambar Landing 1" />
                                <div className="d-md-flex justify-content-between">
                                    <div className="row">
                                        <h1 className={`fs-3 ${styles.LihatProfil}`} style={{ minWidth: "250px"}}>{item?.name}</h1>
                                        <h2 className="fs-6 text-secondary" style={{ minWidth: "250px"}}>
                                            {item?.jobdesk}
                                        </h2>
                                        <div className={`d-flex my-1 ${styles.lokasi}`}>
                                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                                            <h2 className="fs-6 text-secondary mx-2">
                                                {item?.workplace}
                                            </h2>
                                        </div>
                                        <div className={`d-flex my-1 ${styles.skill}`}>
                                            <button className="btn btn-warning text-light" style={{ backgroundColor: "#FBB017" }}>
                                                PHP
                                            </button>
                                            <button className="btn text-light mx-2" style={{ backgroundColor: "#FBB017" }}>
                                                JavaScript
                                            </button>
                                            <button className="btn text-light" style={{ backgroundColor: "#FBB017" }}>
                                                HTML
                                            </button>
                                        </div>
                                    </div>

                                    <div className={`d-flex align-items-center ${styles.LihatProfil}`}>
                                        <Link href={`/profile/workers/${item?.id_user}`} className="btn text-white d-none d-md-block" style={{ backgroundColor: "#5E50A1" }}>
                                            Lihat Profile
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                    {/* ))} */}
                </ul>
            </div>
        </div>
    )
}

export default list