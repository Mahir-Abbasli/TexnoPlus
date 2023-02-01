import React, { useState } from 'react'
import "./sikayetler.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as RightIcon } from "@fortawesome/free-solid-svg-icons";

const Sikayetveteklifler = () => {
    
  return (
    <div>
       <div className="Kecidler">
      <a href="/"> <span>Əsas səhifə</span></a> 
      <FontAwesomeIcon className='RightIcon' icon={RightIcon} />
      <label>Məxfilik siyasəti</label>
      </div>
      <div>
        <h1>Şikayət və təkliflər</h1>
        <form className='FormSikayet'>
            <input  className='adinput' type='name' placeholder='Ad'></input>
            <input className='adinput2' type='tel' placeholder='Əlaqə nömrəsi'></input>
            <input className='adinput3' type='text' placeholder='Şikayətiniz/Təklifiniz'></input>
            <button className='btns1'>Göndər</button>
        </form>
      </div>
    </div>
  )
}

export default Sikayetveteklifler
