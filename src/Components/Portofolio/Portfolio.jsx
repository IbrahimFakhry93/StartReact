import React from 'react'
import styles from './Portofolio.module.css'
import cabin from './cabin.png'
import cake from './cake.png'
import circus from './circus.png'
import game from './game.png'
import safe from './safe.png'
import submarine from './submarine.png'
import $ from 'jquery';
export default function Portfolio() {
 
function display(e){
  let imgSrc="";
  let imgAlt='';
  console.log(document.getElementById("layer"));
  console.log(e.target);
  document.getElementById("layer").classList.replace('d-none','d-flex');
  document.getElementById("content").classList.replace('d-none','d-flex');

  let icons=Array.from(document.getElementsByClassName('plus'));
  for (let i = 0; i < icons.length; i++) {
    if (e.target===icons[i]) {
      console.log(icons[i])
      imgSrc=$(e.target).parent().next().attr("src");
      imgAlt=$(e.target).parent().next().attr("alt");
      console.log(imgSrc);
      console.log(imgAlt);
      $('#image').attr("src",imgSrc)
      $('#title').text(imgAlt);
   }
   else{
    imgSrc=$(e.target).next().attr("src");
    imgAlt=$(e.target).next().attr("alt");
    $('#image').attr("src",imgSrc);
    $('#title').text(imgAlt);
  }
  }
  console.log(imgSrc);
}

function close(){
  document.getElementById("layer").classList.replace('d-flex','d-none');
  document.getElementById("content").classList.replace('d-flex','d-none');
}


  return (
    <>
       <div  className={`${styles.home} container-fluid py-5 d-flex justify-content-center align-items-center`}>
           <div className='content container text-center'>
              
               <h1 className={`${styles.h1} fw-bold text-uppercase mb-2`}>portfolio</h1>
               <div className="icon  mb-1">
               <i className="starColor fa-solid fa-star  mb-5"></i>
               </div>
           <div className='row gy-5'>
             <div className='col-md-4'>
                <div  onClick={(e)=>{display(e)}} className='item position-relative d-flex justify-content-center align-items-center'>
                  <div  className={`${styles.layer} position-absolute top-0 start-0 w-100 h-100 text-white d-flex justify-content-center align-items-center`}><i className="plus fa-solid fa-plus"></i></div>
                  <img  src={cabin} className='w-100 rounded' alt="log cabin"/>
                  </div>
             </div>
             <div className='col-md-4'>
                <div onClick={(e)=>{display(e)}} className='item position-relative d-flex justify-content-center align-items-center'>
                  <div className={`${styles.layer} position-absolute top-0 start-0 w-100 h-100 text-white d-flex justify-content-center align-items-center`}><i className="plus fa-solid fa-plus"></i></div>
                  <img src={cake} className='w-100 rounded' alt="tasty cake"/>
                  </div>
             </div>
             <div className='col-md-4'>
                <div onClick={(e)=>{display(e)}} className='item position-relative d-flex justify-content-center align-items-center'>
                  <div className={`${styles.layer} position-absolute top-0 start-0 w-100 h-100 text-white d-flex justify-content-center align-items-center`}><i className="plus fa-solid fa-plus"></i></div>
                  <img src={circus} className='w-100 rounded' alt="circus tent"/>
                  </div>
             </div>
             <div className='col-md-4'>
                <div onClick={(e)=>{display(e)}} className='item position-relative d-flex justify-content-center align-items-center'>
                  <div className={`${styles.layer} position-absolute top-0 start-0 w-100 h-100 text-white d-flex justify-content-center align-items-center`}><i className="plus fa-solid fa-plus"></i></div>
                  <img src={game} className='w-100 rounded' alt="controller"/>
                  </div>
             </div>
             <div className='col-md-4'>
                <div onClick={(e)=>{display(e)}} className='item position-relative d-flex justify-content-center align-items-center'>
                  <div className={`${styles.layer} position-absolute top-0 start-0 w-100 h-100 text-white d-flex justify-content-center align-items-center`}><i className="plus fa-solid fa-plus"></i></div>
                  <img src={safe} className='w-100 rounded' alt="locked safe"/>
                  </div>
             </div>
             <div className='col-md-4'>
                <div onClick={(e)=>{display(e)}} className='item position-relative d-flex justify-content-center align-items-center'>
                  <div className={`${styles.layer} position-absolute top-0 start-0 w-100 h-100 text-white d-flex justify-content-center align-items-center`}><i className="plus fa-solid fa-plus"></i></div>
                  <img src={submarine} className='w-100 rounded' alt="submarine"/>
                  </div>
             </div>
           </div>
           </div>
       </div>


       <div className="position-fixed bg-opacity-50 bg-black top-0 start-0 bottom-0 end-0 d-none p-5" id='layer'>  </div>
        <div id="content" className="content text-center w-75 d-none bg-white p-5 text-center rounded  position-absolute top-0 my-5 start-50 translate-middle-x">
          <i id={styles.xMark} onClick={(e)=>{close(e)}} className="fa-solid fa-xmark fs-2  text-end position-absolute top-0 end-0 p-3"></i>
          <div className="cont text-center">
          <h2 id="title" className="fw-bold text-uppercase mb-2 fs-1 text-center"></h2>
          <div className="icon  mb-1">
               <i className="starColor fa-solid fa-star mb-5"></i>
          </div>
          <img id='image' className="w-75 mb-5 mx-auto" src="" alt=""/>
          <p className={`${styles.popUpText} w-75 mx-auto`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
          <button onClick={(e)=>{close(e)}} id={styles.closeBtn} className="btn btn-info text-white"><i class="fa-solid fa-xmark me-2 p-1"></i>Close Window</button>
          </div>
        </div>
     
    </>
  )
}
