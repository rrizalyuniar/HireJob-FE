import LayoutLoginProfile from '../../../components/Layout/LayoutLoginProfil'
import SectionPage from '../../../components/Section/SectionPage'
import React from 'react'
import style from './company.module.css'
// import background from '../../Assets/CompanyProfile/background.jpg'
import Image from 'next/image'
// import img from '../../Assets/Home/imgSection.png'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const CompanyProfile = () => {
    return (
        <LayoutLoginProfile>
            <SectionPage sty={{ marginTop: "50px", marginBottom: "50px" }}>
                <div className={`box ${style.box}`}>
                    <div className="row justify-content-center">
                        <div className={`col-11 ${style.colRow}`}>
                            <div className={`${style['box-imgBackground']} d-flex justify-content-end align-items-end`} style={{backgroundColor: "#ffffff"}}>
                                <Image src={img} className={`img-fluid ${style.img}`}></Image>
                                <Link href={''} className='pe-4 pb-2'>Edit Profile</Link>
                            </div>
                            <div className="box-content text-center">
                                <h2>PT. Martabat Jaya Abadi</h2>
                                <p>Financial</p>
                                <p className='text-secondary'><FontAwesomeIcon icon={faLocationDot} /> Purwokerto, Jawa Tengah</p>
                                <p className='px-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                                <div className="row justify-content-center text-start ">
                                    <div className="col-6 col-md-3 d-grid text-center mb-4">
                                        <div className="button d-grid">
                                        <button className='btn btn-primary' style={{height: '50px', backgroundColor: '#5E50A1', borderColor: '#5E50A1'}}>Edit Profile</button>
                                        </div>
                                    </div>
                                    <div className="col-12 d-grid justify-content-center mb-5">
                                        <p><FontAwesomeIcon icon={faGithub} /> github.dhimasswara.com </p>
                                        <p><FontAwesomeIcon icon={faFacebook} /> Dhimas Pandu Yogaswara</p>
                                        <p><FontAwesomeIcon icon={faLinkedin} /> Dhimas Pandu Yogaswara</p>
                                        <p><FontAwesomeIcon icon={faLinkedin} /> Dhimas Pandu Yogaswara</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionPage>
        </LayoutLoginProfile>
    )
}

export default CompanyProfile