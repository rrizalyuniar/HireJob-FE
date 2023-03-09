import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../../styles/navbar.module.css'
import Image from 'next/image'
import logo from '../../public/image/logo.png'
import bell from '../../public/image/bell.png'
import mail from '../../public/image/mail.png'
import foto from '../../public/image/avatar.png'

const Navbar = () => {
    const [item, setItem] = useState(['']);

    const clearLocal = () => {
        localStorage.clear()
    }

    useEffect(() => {
        const localLength = localStorage.getItem('user');
        if (!localLength) {
            console.log(localLength);
        } else {
            setItem(localLength)
        }

    }, []);

    return (
        <>
            {item !== 'user' ?
                <nav className={`navbar fixed-top ${styles.navbar}`}>
                    <div className="container">
                        <a className="navbar-brand">
                            <Image src={logo} />
                        </a>
                        <form className="d-flex">
                            <Image src={bell} className="mx-4 mt-1" />
                            <Image src={mail} className="mx-4 mt-1" />
                            <Image src={foto} className="ms-4" width={30} height={30} />
                        </form>
                    </div>
                </nav>
                :
                <nav className={`navbar fixed-top ${styles.navbar}`}>
                    <div className="container">
                        <a className="navbar-brand">
                            <Image src={logo} />
                        </a>
                        <form className="d-flex">
                            <Link href={'auth/login'} className={`btn btn-outline-success me-md-2 me-0 mb-2 mb-lg-0 `} type="button">Masuk</Link>
                            <Link href={'auth/register'} className={`btn btn-outline-success me-md-2 me-0 `} type="button">Daftar</Link>
                        </form>
                    </div>
                </nav>
            }
        </>
    )
}

export default Navbar