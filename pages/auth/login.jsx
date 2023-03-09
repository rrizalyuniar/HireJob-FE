import React from "react";
import Login from "../../components/Auth/Login";
import Side from "../../components/Auth/Side";
import styles from "../../styles/auth.module.css";
import Link from "next/link";
import axios from 'axios';
import Swal from "sweetalert2";
import { useRouter } from 'next/router';
import { useState } from 'react';

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`http://localhost:8000/users/login`, { email, password });

    try {
      if (response.data.status === 'success') {
        Swal.fire({
          title: response.data.message,
          icon: "success",
        });
        const token = response.data.data.token;
        const id = response.data.data.id;
        const role = response.data.data.role;

        localStorage.setItem('token', token);
        localStorage.setItem('id', id);
        localStorage.setItem('role', role);

        router.push('/')
      } else {
        Swal.fire({
          title: response.data.message,
          icon: "error",
        });
      }
    } catch (error) {
      Swal({
        title: error,
        icon: "error"
      });
    }

  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Side />
        <div className={`${styles.auth} ${styles.login} col-sm-7 col-md-6`}>
          <div className={styles.content}>
            <h1 className="fs-2 fw-bold mb-3">Halo, Pewpeople</h1>
            <h2 className="fs-6 text-secondary mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              In euismod ipsum et dui rhoncus auctor.
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <Login title="Email" name="email" value={email} type="email" onchange={(e) => setEmail(e.target.value, console.log(e.target.value))} />
                <Login title="Password" name="password" value={password} type="password" onchange={(e) => setPassword(e.target.value)} />
              </div>

              <div className="d-flex justify-content-end mb-3">
                <Link href="/auth/forgot" className="text-dark text-decoration-none">
                  Lupa kata sandi?
                </Link>
              </div>

              <button type="submit" className="btn w-100 text-light mb-2" style={{ backgroundColor: "#FBB017" }}>
                Masuk
              </button>
            </form>

            <p className="text-center text-secondary mt-4">
              Anda belum punya akun?
              <Link href="/auth/register" className="text-decoration-none" style={{ color: "orange" }}>
                Daftar disini!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
