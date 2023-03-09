import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';
import List from '../../components/Home/List';
// import Search from '../../components/Home/Search';
import Navbar from '../../components/Navbar/Navbar';
import { useDispatch } from 'react-redux'
import { getWorkers } from '../../redux/actions/workerActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/list.module.css';
import Link from "next/link";
import Button from "../../components/Button/index"

const list = () => {
    const [search, setSearch] = useState();
    const [workers, setWorkers] = useState([{}]);
    const [pagination, setPagination] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBY, setSortBy] = useState("name");
    const [sort, setsortOrder] = useState("asc");

    const filterUser = (key, page) => {
        axios
            .get(
                `${process.env.API_BACKEND}workers/allworker?search=${search ? search : ""}&sortBY=${sortBY}&sort=${sort}&page=${page ? page : 1}`
            )
            .then((res) => {
                setWorkers(res.data.data);
                console.log(res.data.data);
                setPagination(res.data.pagination);
            });
    };

    const handleSearch = async (e) => {
        if (e.key === "Enter") {
            setCurrentPage(1);
            filterUser(search, currentPage);
        }
    };

    const handlePage = (page) => {
        setCurrentPage(page);
        filterUser(search, page);
    };

    const handleSort = () => {
        if (sortBY == "name") {
            setSortBy("name");
        } else {
            setSortBy("address");
        }
        filterUser(sort, sort, 3, currentPage);
    };

    const handleAsc = () => {
        if (sort == "asc") {
            setsortOrder("desc");
        } else {
            setsortOrder("asc");
        }
        filterUser(sort, sort, 3, currentPage);
    };

    useEffect(() => {
        filterUser();
    }, [search]);

    

    return (
        <div>
            <Navbar />
            <div className="container-fluid" style={{ backgroundColor: "#5E50A1", height: "100px", marginTop: "60px" }}>
                <div className="container text-white py-4">
                    <h1>TOP JOBS</h1>
                </div>
            </div>

            <div className='container mt-5'>
                <div style={{ border: "1px solid black" }} className={styles.searchbar}>
                    <input name="search" type="text" style={{ borderBottom: "3px solid #5e50a1" }} placeholder="Cari berdasarkan jobdesk" onChange={(e) => setSearch(e.target.value)} onKeyDown={handleSearch} className={`mb-4 ${styles["search-input"]}`} />
                    <FontAwesomeIcon icon={faMagnifyingGlass} height={25} className={styles["search-icon"]}
                    />
                    <div className={styles.vl} />
                    <div className="dropdown border-start">
                        <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16" style={{ color: "#9ea0a5" }}>
                                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
                            </svg>
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" onClick={handleSort}>
                                    Sort by {sortBY}
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" onClick={handleAsc}>
                                    Sort by {sort}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <Button
                        title="Cari"
                        type="button"
                        style={{ backgroundColor: "transparent !important", border: "none !important", marginRight: "10px" }}
                    />
                </div>


            </div>

            {/* <Search /> */}

            <li className="list-group-item">
                {workers.map((worker, i) => (
                    <List key={i} item={worker} />
                ))}
            </li>

            <div className="container justify-content-center d-flex mt-2 mb-3">
                <div className={`${styles["page-container"]}`}>
                    {pagination &&
                        new Array(pagination.totalPage).fill().map((item, index) => (
                            <button
                                className={styles.pagination}
                                onClick={() => handlePage(index + 1)}
                                key={index}
                            >
                                {index + 1}
                            </button>
                        ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default list