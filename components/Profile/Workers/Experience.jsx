import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import tokoijo from '../../../public/image/tokoijo.png'

const Experience = () => {
    const router = useRouter()
    const { id } = router.query
    const [experience, setExperience] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:4000/experience/${id}`)
            .then(res => {
                setExperience(res.data)
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    return (

        <div className="row mb-3">
            <div className="col-12 col-sm-2 col-lg-2 mb-1">
                <Image src={tokoijo} alt="" />
            </div>
            <div className="col-12 col-sm-10 col-lg-10">
                <h5>{experience.jobdesk}</h5>
                <span>{experience.workplace}</span>
                <p className="text-secondary d-flex">
                    <small>
                        <h6>{experience.date}</h6>
                    </small>
                    <small className="ms-3">
                        <h6>6 month</h6>
                    </small>
                </p>
                <p>{experience.desc}</p>
            </div>
        </div>

    )
}

export default Experience