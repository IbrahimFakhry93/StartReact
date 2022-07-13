import React from 'react';
import styles from './About.module.css'
export default function About(){
    return(
        <>
             <div className={`${styles.about} py-5 container-fluid`}>
              <div className="content">
             <h1 className={`${styles.h1} fw-bold text-uppercase mb-3 text-center text-white`}>About</h1>
              <div className="icon-about  text-center">
             <i className="starColor fa-solid fa-star mb-5 text-white"></i>
             </div>
              <div className="w-50 mx-auto">
                <div className="row">
                  <div className="col-md-6">
                    <div className={`${styles.item} pe-1`}>
                      <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={`${styles.item}`}>
                      <p className='text-white'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
             </div>
        </>
      )
}