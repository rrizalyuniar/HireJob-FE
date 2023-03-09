import React from 'react'
import styles from "../../styles/Home.module.css";
import Image from "next/legacy/image";
import img from "../../public/image/img1.png";

const Section1 = () => {
  return (
    <div className="container-lg my-5">
      {/* section 1 */}
      <div className={`${styles.banner} row d-flex align-items-center mb-5 px-3 px-md-0`}>
        <div className="col-12 col-md-7 col-lg-6">
          <p className="display-5 fw-bold">
            Talenta terbaik negeri untuk perubahan revolusi 4.0
          </p>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
            architecto eveniet corporis sunt est ipsum delectus, perferendis
            perspiciatis. Fugiat, officiis.
          </p>
          <div className="btn btn-lg text-white" style={{ backgroundColor: "#5E50A1" }}>
            Mulai Dari Sekarang
          </div>
        </div>

        <div className="col-md-5 col-lg-6 d-none d-md-block">
          <div className="d-flex justify-content-end">
            <div className="position-relative">
              <Image className={`${styles["z-index"]} position-absolute`} crossOrigin="anonymous" 
              src={img} alt="Gambar Landing 1" style={{ maxWidth: "100%", height: "auto" }} />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Section1