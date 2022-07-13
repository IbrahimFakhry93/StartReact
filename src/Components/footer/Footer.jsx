import React from 'react';
import styles from './footer.module.css'
export default function Footer() {
    return(
                <>
                <div className={`${styles.footerInfo} container-fluid py-5`}>
                  <div className={`container mx-auto`}>
                    <div className="row text-white">
                      <div className="col-md-4">
                        <div className="item text-center">
                          <h3 className='text-uppercase mb-3'>Location</h3>
                          <p className='fs-5 w-75 mx-auto'>2215 John Daniel Drive Clark, MO 65243</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="item text-center px-2">
                          <h3 className='text-uppercase mb-3'>Around the web</h3>
                          <div className="icons d-flex align-content-center justify-content-center">
                              <div className={`${styles.singleIcon}  rounded-circle d-flex align-items-center justify-content-center  me-2`}>
                                <i className='fa-brands fa-facebook-f'></i>
                              </div>
                              <div className={`${styles.singleIcon} rounded-circle d-flex align-items-center justify-content-center  me-2`}>
                                <i className='fa-brands fa-twitter'></i>
                              </div>
                              <div className={`${styles.singleIcon}  rounded-circle d-flex align-items-center justify-content-center  me-2`}>
                                <i className='fa-brands fa-linkedin-in'></i>
                              </div>
                              <div className={`${styles.singleIcon}  rounded-circle d-flex align-items-center justify-content-center  me-2`}>
                                <i className='fa-brands fa-dribbble'></i>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="item text-center">
                          <h3 className='text-uppercase mb-3'>About Freelancer</h3>
                          <p className='fs-5  mb-0'>Freelance is a free to use, MIT<br/> licensed Bootstrap theme created by Route</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.footer} container-fluid py-5 text-center py-3`}>
                 <h5 className='text-white'>Copyright &copy; Your Website 2021</h5>
                </div>
                </>
              )
}
