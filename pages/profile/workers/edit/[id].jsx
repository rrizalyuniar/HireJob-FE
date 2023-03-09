import Link from "next/link";
import React, { useState, useEffect } from "react";
import Footer from "../../../../components/Footer/Footer";
import Navbar from "../../../../components/Navbar/Navbar";
import FormSkill from "../../../../components/Profile/Workers/FormSkill";
import SideEdit from "../../../../components/Profile/Workers/SideEdit";
import styles from "../../../../styles/profile.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";

const edit = () => {
  const router = useRouter();
  const { id } = router.query;

  const [user, setUser] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [portofolios, setPortofolios] = useState({
    name: "",
    repository: "",
    type: "Aplikasi Mobile",
    photo: "",
  });
  // console.log(portofolios);

  const [experience, setExperience] = useState({
    jobdesk: "",
    workplace: "",
    date: "",
    desc: "",
  });

  useEffect(() => {
    axios
      .get(process.env.API_BACKEND + "workers/allworker/" + id)
      .then((response) => {
        setUser(response.data?.data?.[0]);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(user);
  };
  const handleUpload = (e) => {
    setUser((prev) => {
      return { ...prev, photo: e.target.files[0] };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (let attr in user) {
      formData.append(attr, user[attr]);
    }

    axios
      .put(`http://localhost:8000/users/workers/${id}`, formData)
      // console.log(result);
      .then((res) => {
        Swal.fire("Berhasil update data!", "success");
        console.log(formData);
      });
  };

  const changePortofolio = (e) => {
    setPortofolios({
      ...portofolios,
      [e.target.name]: e.target.value,
    });
  };
  const handleUploadPort = (e) => {
    setPortofolios((prev) => {
      return { ...prev, photo: e.target.files[0] };
    });
  };
  const handlePortofolio = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let attr in portofolios) {
      formData.append(attr, portofolios[attr]);
    }
    axios
      .post(`http://localhost:8000/portofolios`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        Swal.fire("Berhasil input data!", "success");
        console.log(res.data);
      })
      .catch((err) => alert(`${err.res}`));
  };

  const changeExperience = (e) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  };

  const handleExperience = async (e) => {
    e.preventDefault();

    if (!experience) {
      alert("please input data");
    } else {
      const result = await axios
        .post(`http://localhost:8000/experience`, {
          ...experience,
          id_user: id,
        })
        .then((res) => {
          Swal.fire("Berhasil input data!", "success");
          console.log(res.data);
        });
      console.log(result);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="container-fluid p-0 mb-4 mt-5">
        <div className={styles["back-purple"]}>
          <div className="container row mx-auto" style={{ maxWidth: "1200px" }}>
            <div
              className="col-12 col-md-4 mb-5"
              style={{ marginTop: "280px" }}
            >
              <SideEdit onclick={handleSubmit} />
            </div>

            <div className="col-12 col-md-8 ">
              <div
                className={`${styles["profile-right"]} p-3`}
                style={{ border: "1px solid gray" }}
              >
                <div className="d-flex">
                  <h4 className="mt-3 mb-1">Data diri</h4>
                </div>

                <hr />

                <form>
                  <div className="mb-3">
                    <FormSkill
                      type={"text"}
                      title={"Nama Lengkap"}
                      name={"name"}
                      placeholder={"Masukan nama lengkap"}
                      value={user?.name}
                      onchange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <FormSkill
                      type={"text"}
                      title={"No. Handphone"}
                      name={"phone"}
                      placeholder={"Handphone"}
                      value={user?.phone}
                      onchange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <FormSkill
                      type={"textarea"}
                      title={"Deskripsi"}
                      name={"description"}
                      placeholder={"Deskripsi Pekerjaan"}
                      value={user?.description}
                      onchange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="formFile" className="form-label">
                      Image
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                      name="photo"
                      onChange={handleUpload}
                    />
                  </div>
                </form>
              </div>

              <div
                className={`${styles["profile-right"]} p-3 mt-4`}
                style={{ border: "1px solid gray" }}
              >
                <div className="d-flex">
                  <h4 className="mt-3 mb-1">Skill</h4>
                </div>

                <hr />

                <form>
                  <div className="d-flex">
                    <input
                      type="text"
                      className="form-control form-control-sm p-3"
                      id="skill"
                      placeholder="Java"
                      style={{ height: "40px" }}
                    />
                    <button
                      type="submit"
                      className="btn text-light mb-2"
                      style={{ backgroundColor: "#FBB017", marginLeft: "15px" }}
                    >
                      Masuk
                    </button>
                  </div>
                </form>
              </div>

              <div
                className={`${styles["profile-right"]} p-3 mt-4`}
                style={{ border: "1px solid gray" }}
              >
                <div className="d-flex">
                  <h4 className="mt-3 mb-1">Pengalaman kerja</h4>
                </div>

                <hr />

                <form onSubmit={handleExperience}>
                  <div className="mb-3">
                    {/* <label className="form-label text-secondary fw-bold">
                      Posisi
                    </label> */}
                    <FormSkill
                      type={"text"}
                      title={"Posisi"}
                      name={"jobdesk"}
                      placeholder={"Web Developer"}
                      value={experience.jobdesk}
                      onchange={changeExperience}
                      req={"required"}
                    />
                  </div>
                  <div className="d-flex">
                    <div className="col-6 mb-3">
                      {/* <label className="form-label text-secondary fw-bold">
                        Nama perusahaan
                      </label> */}
                      <FormSkill
                        type={"text"}
                        title={"Nama perusahaan"}
                        name={"workplace"}
                        placeholder={"PT Maju Mundur"}
                        value={experience.workplace}
                        onchange={changeExperience}
                        req={"required"}
                      />
                    </div>
                    <div className="col-4 ms-4">
                      {/* <label className="form-label text-secondary fw-bold">
                        Bulan/tahun
                      </label> */}
                      <FormSkill
                        type={"text"}
                        title={"Bulan/tahun"}
                        name={"date"}
                        placeholder={"Januari 2018"}
                        value={experience.date}
                        onchange={changeExperience}
                        req={"required"}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    {/* <label className="form-label text-secondary fw-bold">
                      Deskripsi singkat
                    </label> */}
                    <FormSkill
                      type={"text"}
                      title={"Deskripsi Singkat"}
                      name={"desc"}
                      placeholder={"Deskripsikan pekerjaan anda"}
                      value={experience.desc}
                      onchange={changeExperience}
                    />
                    {/* </FormSkill> */}
                  </div>
                  <button
                    type="submit"
                    className="btn d-none d-md-block mt-2"
                    style={{
                      backgroundColor: "white",
                      color: "#FBB017",
                      border: "2px solid #FBB017",
                    }}
                  >
                    Tambah pengalaman kerja
                  </button>
                </form>
              </div>

              <div
                className={`${styles["profile-right"]} p-3 mt-4`}
                style={{ border: "1px solid gray" }}
              >
                <div className="d-flex">
                  <h4 className="mt-3 mb-1">Portofolio</h4>
                </div>

                <hr />

                <form onSubmit={handlePortofolio}>
                  <div className="mb-3">
                    {/* <label className="form-label text-secondary fw-bold">
                      Posisi
                    </label> */}
                    <FormSkill
                      type={"text"}
                      title={"Nama aplikasi"}
                      name={"name"}
                      placeholder={"Masukan nama aplikasi"}
                      onchange={changePortofolio}
                    />
                    <FormSkill
                      type={"text"}
                      title={"Repository"}
                      name={"repository"}
                      placeholder={"Masukan nama aplikasi"}
                      onchange={changePortofolio}
                    />
                    <FormSkill type={'file'} title={'photo'} name={'photo'} placeholder={'photo'} onchange={handleUploadPort} />
                  </div>
                  <button
                    type="submit"
                    className="btn d-none d-md-block mt-2"
                    style={{
                      backgroundColor: "white",
                      color: "#FBB017",
                      border: "2px solid #FBB017",
                    }}
                  >
                    Tambah Portofolio
                  </button>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default edit;
