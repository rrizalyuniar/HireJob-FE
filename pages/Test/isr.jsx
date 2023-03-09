import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import List from '../../components/ListWorker/List';
import Footer from '../../components/Footer/Footer';
import Search from '../../components/ListWorker/Search';
import styles from '../../styles/list.module.css';

export async function getStaticProps() {
    const res = await axios.get("http://localhost:4000/workers");
    return {
        props: { workers: res.data },
        revalidate: 20,
    };
}

const isr = ({ workers }) => {
    return (
        <div>
            <div className="container mt-5">
                <Search />

                <ul className="list-group list-group-flush">
                    {workers.map((worker, i) => (
                        <List key={i} item={worker} />
                    ))}
                </ul>

            </div>
            <Footer />
        </div>
    )
}

export default isr