import React from 'react'
import Footer from '../../../components/Footer/Footer'
import SideProfile from '../../../components/Profile/Workers/SideProfile'
import Navbar from '../../../components/Navbar/Navbar'
import Card from '../../../components/Profile/Workers/Card'
import styles from '../../../styles/profile.module.css'
import Link from 'next/link'
import Experience from '../../../components/Profile/Workers/Experience'
import Image from 'next/image'

const profile = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0 mb-4 mt-5">
        <div className={styles["back-purple"]}>
          
          <div className="container row mx-auto" style={{ maxWidth: "1200px" }}>
            <div className="col-12 col-md-4 mb-5" style={{ marginTop: "280px" }}>
              <SideProfile />
            </div>

            <div className="col-12 col-md-8 ">
              <div className={`${styles["profile-right"]} p-3`} style={{ border: "1px solid gray" }}>
                <div className="d-flex">
                  <Link href="#" legacyBehavior>
                    <h5 className={`${styles.tab} mx-2`}>
                      <a>Portofolio</a>
                    </h5>
                  </Link>
                  <Link href="#" legacyBehavior>
                    <h5 className={`${styles.tab} mx-3`}>
                      <a>Pengalaman kerja</a>
                    </h5>
                  </Link>
                </div>
                
                <hr />

                {/* <Portofolio /> */}
                <Card />

                {/* <Experience /> */}
              </div>
            </div>

          </div>

          <Footer />
        </div>
      </div>
    </>
  )
}

export default profile