import React from 'react';
import Link from "next/link";
import styles from "../../styles/auth.module.css";

const Register = () => {
    return (
        <div className={`${styles.auth} ${styles.register} col-sm-7 col-md-6`}>
            <div className={styles.content}>
                <h1 className="fs-2 fw-bold mb-3">Halo, Pewpeople</h1>
                <h2 className="fs-6 text-secondary mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    In euismod ipsum et dui rhoncus auctor.
                </h2>

                <form>
                    <div className="mb-3">
                        <label className="form-label text-secondary fw-bold">
                            Name
                        </label>
                        <input type="name" className="form-control form-control-sm p-3" id="name"
                            placeholder="Masukan nama panjang"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-secondary fw-bold">
                            Email
                        </label>
                        <input type="email" className="form-control form-control-sm p-3" id="email"
                            placeholder="Masukan alamat email"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-secondary fw-bold">
                            Perusahaan
                        </label>
                        <input type="perusahaan" className="form-control form-control-sm p-3" id="perusahaan"
                            placeholder="Masukan nama perusahaan"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-secondary fw-bold">
                            Jabatan
                        </label>
                        <input type="jabatan" className="form-control form-control-sm p-3" id="jabatan"
                            placeholder="Masukan nama jabatan"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-secondary fw-bold">
                            No handphone
                        </label>
                        <input type="handphone" className="form-control form-control-sm p-3" id="handphone"
                            placeholder="Masukan nama handphone"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-secondary fw-bold">
                            Kata Sandi
                        </label>
                        <input type="password" className="form-control form-control-sm p-3" id="password"
                            placeholder="Masukan kata sandi"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-secondary fw-bold">
                            Konfirmasi kata sandi
                        </label>
                        <input type="password" className="form-control form-control-sm p-3" id="password"
                            placeholder="Masukan konfirmasi kata sandi"
                        />
                    </div>
                    <div className="d-flex justify-content-end mb-3">
                        <Link href="/auth/forgot" className="text-dark text-decoration-none">
                            Lupa kata sandi?
                        </Link>
                    </div>

                    <button type="submit" className="btn w-100 text-light mb-2" style={{ backgroundColor: "#FBB017" }}>
                        Daftar
                    </button>
                </form>

                <p className="text-center text-secondary mt-4">
                    Anda sudah punya akun?
                    <Link href="/auth/login" className="text-decoration-none" style={{ color: "orange" }}>
                        Masuk disini!
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Register