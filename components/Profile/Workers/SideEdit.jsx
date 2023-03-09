import React from 'react'
import Image from 'next/legacy/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from '../../../styles/profile.module.css';
import avatar from '../../../public/image/avatar.png';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const SideEdit = ({ onclick }) => {
    const router = useRouter()
    const { id } = router.query
    const [worker, setWorker] = useState([])

    useEffect(() => {
        axios
            .get(process.env.API_BACKEND + 'workers/allworker/' + id)
            .then(res => {
                setWorker(res.data?.data?.[0])
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <div>
            <div className={`${styles["profile-left"]} w-100 p-3`} style={{ border: "1px solid gray" }}>
                <div className="mx-auto" style={{ position: "relative", height: 200, width: 190 }}>
                    <Image src={worker?.photo} className="rounded-circle" alt="Gambar Profile"
                        unoptimized={true} layout='fill' sizes="100vw" />
                </div>
                <h1 className="fs-3 mt-3">{worker?.name}</h1>
                <div className="mb-1">
                    <h2 className="fs-6 mb-3">
                        {worker?.jobdesk}
                    </h2>
                </div>
                <div className={`d-flex my-1 ${styles.lokasi}`}>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <h2 className="fs-6 text-secondary mx-2 mb-2">
                        {worker?.address}
                    </h2>
                </div>
                <div className="mb-4">
                    <h2 className="fs-6 text-secondary">
                        Freelancer
                    </h2>
                </div>
            </div>
            <Link href="#" onClick={onclick} className="btn text-white d-none d-md-block mt-3" style={{ backgroundColor: "#5E50A1" }}>
                Simpan
            </Link>
            <Link href="" className="btn d-none d-md-block mt-2" style={{ backgroundColor: "white", color: "#5E50A1", border: "2px solid #5E50A1" }}>
                Batal
            </Link>
        </div>
    )
}

export default SideEdit