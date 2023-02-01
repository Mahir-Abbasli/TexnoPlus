import React from "react";
import "./Sertler.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as RightIcon } from "@fortawesome/free-solid-svg-icons";

const Korporativsatislar = () => {
  return (
    
    <div>
       <div className="Kecidler">
      <a href="/"> <span>Əsas səhifə</span></a> 
      <FontAwesomeIcon className='RightIcon' icon={RightIcon} />
      <label>Korporativ satışlar</label>
      </div>
     <div  className="Corporative">
      <h1>Korporativ Satışlar</h1>
      <p>
        Biz müxtəlif növ yüksək keyfiyyətli rəqəmsal və məişət texnikasının,
        həmçinin mebellərin pərakəndə satışını həyata keçiririk.{" "}
      </p>
      <p>
        Azərbaycan bazarında qısa müddət ərzində aparıcı mövqelərdən birini
        tutaraq, korporativ müştərilərimizin sayını 2000-in üzərinə çıxartdıq və
        bu say günü-gündən artmağa davam edir.
      </p>
      <span>Qeyd olun sahələrdə sizə əməkdaşlıq təklif edirik:</span>
      <ol className="Listes">
        <li>Korporativ müştərilərə kreditlə satış xidməti;</li>
        <li>
          Telefon, notbuk, kondisioner, mikrodalğalı soba, dispenser və bu kimi
          bütün ofis avadanlıqlarını köçürmə ilə əldə etmək imkanı;
        </li>
        <li>
          Bizimlə əməkdaşlıq zamanı ödənişlərinizi köçürmə yolu ilə edə bilmək
          imkanı;
        </li>
        <li>Əməkdaşlıq etdiyimiz şirkətlər üçün xüsusi endirimli qiymətlər;</li>
        <li>
          Saytımızda əks olunan məhsullarla yanaşı, orada mövcud olmayan
          məhsulları belə öncədən sifarişlə əldə edə bilmə imkanı;
        </li>
        <li>Telefon zəngi və ya elektron poçtla sifariş vermə imkanı.</li>
      </ol>
      <p style={{marginTop:"30px"}} >
        Bizimlə əməkdaşlıq etmək üçün aşağıdakı əlaqə vasitələrindən sizə uyğun
        olanını seçə bilərsiniz:
      </p>
      <ul>
        <li>+994(050)-977-11-81</li>
        <li>(012)-478-98-60</li>
        <li> 
          Poçt ünvanımıza yazmaqla:  <a href="mailto:mahirabbasli777@gmail.com"> mahirabbasli777@gmail.com</a> </li>
      </ul> 
      </div>
    </div>
  );
};

export default Korporativsatislar;
