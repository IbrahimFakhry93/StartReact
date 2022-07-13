import React from 'react';
import styles from './Home.module.css'
import logo from './avataaars.svg'

export default function Home(){
  return(
    <>
    <div  className={`${styles.home} container-fluid vh-100 py-5 d-flex justify-content-center align-items-center`}>
           <div className='item text-center'>
               <img src={logo} className='w-50 mb-3' alt="logo"/>
               <h1 className={`${styles.h1} fw-bold text-white`}>START REACT</h1>
               <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
           </div>
    </div>
    </>
  )
}

