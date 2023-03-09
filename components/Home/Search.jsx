import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/list.module.css';
import Link from "next/link";

const Search = () => {
    return (
        <div className="container">
            <div className="row height d-flex justify-content-center align-items-center mt-5">
                <div className="col-md-12">
                    <div className={`${styles.form}`}>

                        <input type="text" className={`form-control form-control-lg ${styles.form}`} placeholder="Search for any skill" />
                        <span className={`${styles.formSpan}`}>
                            <FontAwesomeIcon className={`mx-2`} icon={faMagnifyingGlass} />
                        </span>

                        <select className={`form-select ${styles.sort}`} style={{ width: "30px"}}  name="sort" aria-label="Default select example">
                            <option value="desc">Sortir berdasarkan nama</option>
                            <option value="asc">Sortir berdasarkan Skill</option>
                            <option value="asc">Sortir berdasarkan Lokasi</option>
                            <option value="asc">Sortir berdasarkan freelance</option>
                            <option value="asc">Sortir berdasarkan fulltime</option>
                        </select>

                        <Link href="#" className={`btn text-white ${styles.btnSearch}`} style={{ backgroundColor: "#5E50A1" }}>
                            Search
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
