import React from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import portofolio from '../../../public/image/portofolio.png';
import axios from 'axios';

const Card = () => {
    const [portofolios, setPortofolios] = useState([])

    useEffect(() => {
        axios
            .get(process.env.API_BACKEND + 'portofolios/')
            .then(res => {
                setPortofolios(res.data?.data?.[0])
                console.log(res.data.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="row mx-auto justfy-content-between">
            <div className="d-flex">
                <div className="card mx-2">
                    <Image src={portofolios?.photo} width="200px"
                        height="100px" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-center">{portofolios?.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card