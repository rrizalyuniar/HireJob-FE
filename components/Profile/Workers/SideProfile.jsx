import React from 'react';
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
import { useDispatch } from 'react-redux'
import { getDetailWorker } from '../../../redux/actions/workerActions'

const SideProfile = () => {
    const router = useRouter()
    const { id } = router.query
    const dispatch = useDispatch();
    const [workers, setWorker] = useState([])
    console.log(workers);

    useEffect(() => {
        dispatch(getDetailWorker(setWorker,id))
    }, [dispatch])

    return (

        <div className={`${styles["profile-left"]} w-100 p-3`} style={{ border: "1px solid gray" }}>
            <div className="mx-auto" style={{ position: "relative", height: 210, width: 200 }}>
                <Image src={workers?.photo} className="rounded-circle" alt="Gambar Profile"
                    unoptimized={true} layout='fill' sizes="100vw" />
            </div>
            <h1 className="fs-3 mt-3">{workers?.name}</h1>
            <div className="mb-1">
                <h2 className="fs-6 mb-3">
                    {workers?.jobdesk}
                </h2>
            </div>
            <div className={`d-flex my-1 ${styles.lokasi}`}>
                <FontAwesomeIcon icon={faLocationDot} />
                <h2 className="fs-6 text-secondary mx-2 mb-2">
                    {workers?.address}
                </h2>
            </div>
            <div className="mb-4">
                <h2 className="fs-6 text-secondary">
                    Freelancer
                </h2>
            </div>
            <div className="mb-1">
                <h2 className="fs-6 text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
                    Curabitur eu lacus fringilla, vestibulum risus at.
                </h2>
            </div>
            <Link href={`/profile/edit/`} className="d-grid gap-2 mb-4">
                <button className="btn btn-lg text-white mt-4" style={{ backgroundColor: "#5E50A1" }}>
                    Hire
                </button>
            </Link>

            <h1 className="fs-3 mt-3 mb-3">Skill</h1>
            <div className="my-2 mb-4">
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

            <Link href={`mailto:rizalyuniar123@gmail.com`} target="_blank" className="d-flex text-secondary text-decoration-none mb-3" rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="fa-lg" style={{ marginRight: "15px" }} />
                <h2 className="fs-6 text-secondary">
                    Louistommo@gmail.com
                </h2>
            </Link>
            <Link href={`isntagram.com`} target="_blank" className="d-flex text-secondary text-decoration-none mb-3" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="fa-lg" style={{ marginRight: "17px" }} />
                <h2 className="fs-6 text-secondary">
                    @Louist91
                </h2>
            </Link>
            <Link href={`github.com`} target="_blank" className="d-flex text-secondary text-decoration-none mb-3" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className="fa-lg" style={{ marginRight: "15px" }} />
                <h2 className="fs-6 text-secondary">
                    @Louistommo
                </h2>
            </Link>

        </div>

    )
}

export default SideProfile