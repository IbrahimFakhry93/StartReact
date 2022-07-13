import $ from 'jquery'
import React from 'react';
import styles from './contact.module.css'
import { useEffect } from "react";
import { useState } from "react"

export default function Contact() {

  let[names,setName] = useState("");
  let[emails,setEmail] = useState("");
  let[phones,setPhone]=useState("");
  let[messages,setMessage]=useState("")
      
function getFormData(){
    let accountsList;
    if(localStorage.getItem("Message ID")!=null){
        accountsList=JSON.parse(localStorage.getItem("Message ID"));
        console.log(accountsList);
      }
      else{
          accountsList=[];
      }
      
     return accountsList
 
 }   
function validateEmail(){
  let email=document.getElementById("email");
  setEmail(email.value);
    var regex=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+\.com$/;
    if(email.value===''){
         $('#alertEmptyEmail').fadeIn(500);
         return false;
    }
    if(regex.test(email.value))
    {  
         $('#alertEmail').fadeOut(500);
        return true;
    }
    else{
        $('#alertEmail').fadeIn(500);
        
        return false;
    }   
}

function  validateName(){
  let Name=document.getElementById("name");
  setName(Name.value);
    var regex=/^[a-zA-Z\s]+$/;
    if(Name.value ===null || Name.value===""){
      $('#alertEmptyName').fadeIn(500);
      return false;
 }
    else if(regex.test(Name.value))
    {  
       $('#alertName').fadeOut(500);
        return true;
    }
    else{
        $('#alertName').fadeIn(500);
       
        return false;
    }   
}

function validatePhone(){
  let phone=document.getElementById('number');
  setPhone(phone.value);
  var regex=/^00201[01245][0-9]{8}$/;
  if(phone.value ==='' || phone.value === null){
    $('#alertEmptyPhone').fadeIn(500);
    return false;
}
  else if(regex.test(phone.value))
  {   console.log("This Password is VALID");   
  $('#alertPhone').fadeOut(500);  
      return true;
  }
  else{
      console.log("This Password is INVALID");
      $('#alertPhone').fadeIn(500);  
      return false;
  }   
}

function  validateMessage(){
  let message=document.getElementById('message');
  setMessage(message.value);
    var regex=/^[a-zA-Z\s].+$/;
    if(message.value ===''){
      $('#alertEmptyMessage').fadeIn(500);
      return false;
  }
    if(regex.test(message.value))
    {  
       $('#alertText').fadeOut(500);
        return true;
    }
    else{
        $('#alertText').fadeIn(500);
 
        return false;
    }   
}



function addAccount(){
    validateName();
    validateEmail();
    validatePhone();
    validateMessage();
 

    let account={
      name:names,
      email:emails,
      phone:phones,
      message:messages,
    }
    console.log("name account"+account.name);
    let accountsList=getFormData();
    

    if(validateEmail() && validateName() && validateMessage() && validatePhone()){
       $('#alertSuccessfulMessage').fadeIn(1000,()=>{
        $('#alertSuccessfulMessage').fadeOut(1000);
    })
       $('#alertEmptyMessage').fadeOut(500); 
       accountsList.push(account);
        console.log(accountsList);
        setLocalStorage(accountsList);
    }


}
 
function setLocalStorage(list){
    localStorage.setItem("Message ID",JSON.stringify(list));
}

function displayLabel(e){
 if($(e.target).val()==0){
  hideLabel(e);
 }
 else{
  $(e.target).prev().css('color','#1ABC9C')
  $(e.target).prev().css("top","0%",100);
  $(e.target).prev().fadeIn(160)
 }
  
}
function hideLabel(e){
  $(e.target).prev().fadeOut(100)
  $(e.target).prev().css("top","100%",120);
}
function labelColor(e){
 console.log($(e.target).prev().css('color','#2C3E50'));
}
    return(
                <>
                <div className="container-fluid py-5">
                <h1 className={`${styles.h1} fw-bold text-uppercase mb-2 text-center`}>Contact us</h1>
                <div className="icon  text-center">
             <i className="starColor fa-solid fa-star mb-5"></i>
             </div>
                  <div className="w-50 mx-auto pb-5">
                    <div className="row">
                      <div className="col-md-12">
                           <div className={`${styles.inputDiv}  position-relative pt-3`}>
                              <label  className={`${styles.label}  position-absolute`}>Name</label>
                              <input type="text" onBlur={(e)=>{labelColor(e)}} onInput={(e)=>{displayLabel(e)}} className="form-control" id="name" placeholder="Name"/>
                              <div id="alertName" className={`${styles.alert} alert-danger mt-2 mb-2`}>Invalid Name</div> 
                               <div id="alertEmptyName" className={`${styles.alert} alert-danger mt-2 mb-2`}>Please enter your name</div> 
                            </div>
                            <div className="overflow-hidden position-relative pt-4">
                              <label  className={`${styles.label}  position-absolute`}>Email Address</label>
                              <input type="email"  onBlur={(e)=>{labelColor(e)}} onInput={(e)=>{displayLabel(e)}} className="form-control" id="email" placeholder="Email Address"/>
                              <div id="alertEmail" className={`${styles.alert} alert-danger mt-2 mb-2`}>Invalid Email</div>
                              <div id="alertEmptyEmail" className={`${styles.alert} alert-danger mt-2 mb-2`}>Please enter your email</div> 
                            </div>
                            <div className="overflow-hidden position-relative pt-4">
                              <label className={`${styles.label}  position-absolute`}>Phone Number</label>
                              <input type="text"  onBlur={(e)=>{labelColor(e)}} onInput={(e)=>{displayLabel(e)}} className="form-control" id="number" placeholder="Phone Number"/>
                              <div id="alertPhone" className={`${styles.alert} alert-danger mt-2 mb-2`}>Invalid Number</div> 
                              <div id="alertEmptyPhone" className={`${styles.alert} alert-danger mt-2 mb-2`}>Please enter your Number</div> 
                            </div>
                            <div className="overflow-hidden position-relative pt-4">
                              <label  className={`${styles.label}  position-absolute`}>Message</label>
                              <textarea  onBlur={(e)=>{labelColor(e)}} onInput={(e)=>{displayLabel(e)}} className="form-control" id="message" rows="5" placeholder="Message"></textarea>
                              <div id="alertText" className={`${styles.alert} alert-danger mt-2 mb-2`}>Invalid Text enter from 30 -100 characters</div> 
                              <div id="alertEmptyMessage" className={`${styles.alert} alert-danger mt-2 mb-2`}>Please enter your Message</div> 
                            </div>
                            <button id="submit" onClick={()=>{addAccount()}} className={`${styles.button} btn text-white mt-4 fs-4 p-2`}>Send</button>
                      </div>
                    </div>
                  </div>
                </div>
                </>
              )
          
}
