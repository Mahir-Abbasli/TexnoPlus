import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars as MenuItem } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import './SidebarKataloq.css'
import img1 from "./image/phone.png";
import img2 from './image/laptop.png';
import img3 from './image/watch (2).png';
import img4 from './image/television (2).png';
import img5 from './image/camera.png';
import img6 from './image/fridge (1).png';
import img7 from './image/laundry.png';
import img8 from './image/console.png';
import img9 from './image/chip.png';
import './PgHeader.css'
import App from "./App";


const Katalog = () => {
  const [openMenu, setOpenMenu] =useState(false)

  const [openMenur, setOpenMenur] = useState(false)

  const OpenedMenu =() => {
    setOpenMenu(true)
    setOpenMenur(true)
  }
  const CloseMenu =() =>{
    setOpenMenu(false)
    setOpenMenur(false)
  }

  return (
    <div className="kat1">
          <div onMouseDown={CloseMenu} className={`menu-header_${openMenur?"active" :"inactive"}`}></div>
      <ul className="menyu">
        <li className="menyu2">
           <a  onClick={OpenedMenu} href="#">
            <FontAwesomeIcon className="menyuicon" icon={MenuItem} />
            <span >Kataloq</span>           
          </a>       
          {
                openMenu ?
          
                    <div className={`dropdown-menu.${openMenu?"active" :"inactive"}`} id="MenuSidebar">
                    <section className="sidebar" > 
        <div className='allmenuitem'></div>
          <ul className="mainkt">
            <li className="menyu01"> 
              <a className="kt q1" href="#">
                <img src={img1} />
                <span>Telefon və Planşetlər</span>
              </a>
              <div className="menyudiv1">
                <ul className="menyu1">
                  <li className="Smartfon"> <a href=""> <span>Smartfonlar</span>  </a> </li>
                  <li> <a  href=""> <span className="Apple">Apple</span>  </a> </li>
                  <li> <a href=""> <span>Iphone 14 Pro</span>  </a> </li>
                  <li> <a href=""> <span>Iphone 14 Pro Max</span>  </a> </li>
                  <li> <a href=""> <span>Iphone 14</span>  </a> </li>
                  <li> <a href=""> <span>Iphone 13 Pro max</span>  </a> </li>
                  <li className="lastapple"> <a href=""> <span>Iphone 13</span>  </a> </li>
                  <li className="Samsung"> <a href=""> <span>Samsung</span>  </a> </li>
                  <li> <a href=""> <span>Samsung Galaxy S22 Ultra</span>  </a> </li>
                  <li> <a href=""> <span>Samsung Galaxy S22</span>  </a> </li>
                  <li> <a href=""> <span>Samsung  Galaxy Z Fold</span>  </a> </li>
                  <li> <a href=""> <span>Samsung Galaxy A73</span>  </a> </li>
                  <li className="lastsamsung"> <a href=""> <span>Samsung Galaxy A52</span>  </a> </li>
                  <li className="Xiaomi"> <a href=""> <span>Xiaomi</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi Mi 12T</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi Poco X3 Pro</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi Mi 11 Ultra</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi Redmi Note 11 Pro</span>  </a> </li>
                </ul>
                <ul className="menyu12">
                <li className="Smartfon"> <a href=""> <span>Smartfonlar</span>  </a> </li>
                  <li> <a href=""> <span>Apple</span>  </a> </li>
                  <li> <a href=""> <span>Samsung</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi</span>  </a> </li>
                  <li> <a href=""> <span>Huawei</span>  </a> </li>
                  <li> <a href=""> <span>Realme</span>  </a> </li>
                  <li> <a href=""> <span>One Plus</span>  </a> </li>
                  <li> <a href=""> <span>Blacview</span>  </a> </li>
                  <li> <a href=""> <span>Honor</span>  </a> </li>
                  <li> <a href=""> <span>Oppo</span>  </a> </li>
                  <li> <a href=""> <span>Nothing</span>  </a> </li>
                  <li> <a href=""> <span>Itel</span>  </a> </li>
                  <li> <a href=""> <span>TCL</span>  </a> </li>
                  <li> <a href=""> <span>Asus</span>  </a> </li>
                  <li> <a href=""> <span>Vivo</span>  </a> </li>
                  <li> <a href=""> <span>Motorola</span>  </a> </li>
                  <li> <a href=""> <span>Nokia</span>  </a> </li>
                  <li> <a href=""> <span>Google</span>  </a> </li>
                  <li> <a href=""> <span>Tecno</span>  </a> </li>    
                </ul>
              <ul className="menyu11">
              <li className="Smartfon"> <a href=""> <span>Planşetlər</span>  </a> </li>
                  <li> <a href=""> <span>Apple</span>  </a> </li>
                  <li> <a href=""> <span>Samsung</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi</span>  </a> </li>
                  <li> <a href=""> <span>Huawei</span>  </a> </li>
                  <li> <a href=""> <span>Lenovo</span>  </a> </li>
                  <li> <a href=""> <span>Microsoft</span>  </a> </li>
                  <li> <a href=""> <span>Blacview</span>  </a> </li>
                  <li> <a href=""> <span>Honor</span>  </a> </li>
                  <li> <a href=""> <span>TCL</span>  </a> </li>  
                              
                </ul>
                </div>
            </li>
            <li className="menyu02">
              <a className="kt 2" href="#">
                <img src={img2} />
                <span>Noutbuk və komputer texnikası</span>
              </a>
              <div className="menyudiv2">
                <ul className="menyu1">
                  <li className="Noutbuk"> <a href=""> <span>Noutbuklar</span>  </a> </li>
                  <li> <a href=""> <span>Ev və iş</span>  </a> </li>
                  <li> <a href=""> <span>Oyun</span>  </a> </li>
                  <li> <a href=""> <span>Ultrabook</span>  </a> </li>
                  <li> <a href=""> <span>Macbook</span>  </a> </li>
                  <li className="Noutbuk"> <a href=""> <span>Noutbuklar</span>  </a> </li>
                  <li> <a href=""> <span>Asus</span>  </a> </li>
                  <li> <a href=""> <span>MSI</span>  </a> </li>
                  <li> <a href=""> <span>HP</span>  </a> </li>
                  <li> <a href=""> <span>Apple</span>  </a> </li>
                  <li> <a href=""> <span>Vivo</span>  </a> </li>
                  <li> <a href=""> <span>Acer</span>  </a> </li>
                  <li> <a href=""> <span>Huawei</span>  </a> </li>
                  <li> <a href=""> <span>Lenovo</span>  </a> </li>
                  <li> <a href=""> <span>Dell</span>  </a> </li>
                  <li className="Noutbuk"> <a href=""> <span>Kompyuterlər</span>  </a> </li>
                  <li> <a href=""> <span>Monobloklar</span>  </a> </li>
                  <li> <a href=""> <span>Sistem blokları</span>  </a> </li>                 
                </ul>
                <ul className="menyu12">
                <li className="Noutbuk"> <a href=""> <span>Monitorlar</span>  </a> </li>
                  <li> <a href=""> <span>Apple</span>  </a> </li>
                  <li> <a href=""> <span>Samsung</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi</span>  </a> </li>
                  <li> <a href=""> <span>Lenovo</span>  </a> </li>
                  <li> <a href=""> <span>HP</span>  </a> </li>
                  <li> <a href=""> <span>Dell</span>  </a> </li>
                  <li> <a href=""> <span>Philips</span>  </a> </li>
                  <li> <a href=""> <span>Asus</span>  </a> </li>
                  <li> <a href=""> <span>Aoec</span>  </a> </li>
                  <li className="komputer"> <a href=""> <span>Kompyuter hissələri</span>  </a> </li>
                  <li> <a href=""> <span>Qida blokları</span>  </a> </li>
                  <li> <a href=""> <span>Soyutma sistemləri</span>  </a> </li>                
                  <li> <a href=""> <span>Prosessorlar</span>  </a> </li>
                  <li> <a href=""> <span>Ana platalar</span>  </a> </li>
                  <li> <a href=""> <span>Operativ yaddaş (RAM)</span>  </a> </li>
                  <li> <a href=""> <span>Qrafik yaddaş (videokart)</span>  </a> </li>
                  <li> <a href=""> <span>UPS</span>  </a> </li>
                </ul>
                
              <ul className="menyu11">
              <li className="Noutbuk"> <a href=""> <span>Kompyuter aksessuarları</span>  </a> </li>
                  <li> <a href=""> <span>Klaviatura</span>  </a> </li>
                  <li> <a href=""> <span>Mouse</span>  </a> </li>
                  <li> <a href=""> <span>Mousepad</span>  </a> </li>
                  <li> <a href=""> <span>Kamera</span>  </a> </li>
                  <li> <a href=""> <span>Modem</span>  </a> </li>
                  <li> <a href=""> <span>Portativ HDD</span>  </a> </li>
                  <li> <a href=""> <span>SSD</span>  </a> </li>
                  <li> <a href=""> <span>USB Fləsh</span>  </a> </li>
                  <li> <a href=""> <span>Eynək</span>  </a> </li>    
                  <li> <a href=""> <span>Antiviruslar</span>  </a> </li>                               
                  <li> <a href=""> <span>Mikrofon</span>  </a> </li>                               
                  <li> <a href=""> <span>Təmizlik vasitələri</span>  </a> </li>                               
                </ul>         
                </div>
            </li>
            <li className="menyu03">
              <a className="kt 3" href="#">
                <img src={img3} />
                <span>Saatlar və aksessuarlar</span>
              </a>
              <div className="menyudiv3">
                <ul className="menyu1">
                  <li className="Noutbuk"> <a href=""> <span>Smart Saatlar</span>  </a> </li>
                  <li> <a href=""> <span>Apple</span>  </a> </li>
                  <li> <a href=""> <span>Samsung</span>  </a> </li>
                  <li> <a href=""> <span>Huawei</span>  </a> </li>
                  <li> <a href=""> <span>Mykronor</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi</span>  </a> </li>
                  <li> <a href=""> <span>Omthing</span>  </a> </li>
                  <li> <a href=""> <span>Haylou</span>  </a> </li>
                  <li> <a href=""> <span>1More</span>  </a> </li>
                  <li className="Noutbuk"> <a href=""> <span>Smart qolbaqlar</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi</span>  </a> </li>
                  <li> <a href=""> <span>Huawei</span>  </a> </li>               
                </ul>
                <ul className="menyu12">
                <li className="Noutbuk"> <a href=""> <span>Qulaqlıqlar</span>  </a> </li>
                  <li> <a href=""> <span>Apple</span>  </a> </li>
                  <li> <a href=""> <span>Honor</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi</span>  </a> </li>
                  <li> <a href=""> <span>2E</span>  </a> </li>
                  <li> <a href=""> <span>A4Tech</span>  </a> </li>
                  <li> <a href=""> <span>Alcatel</span>  </a> </li>
                  <li> <a href=""> <span>Baseus</span>  </a> </li>
                  <li> <a href=""> <span>Bang&Olufsen</span>  </a> </li>
                  <li> <a href=""> <span>Beats</span>  </a> </li>
                  <li className="komputer"> <a href=""> <span>Saatlar</span>  </a> </li>
                  <li> <a href=""> <span>Casio</span>  </a> </li>
                  <li> <a href=""> <span>Orient</span>  </a> </li>                
                  <li> <a href=""> <span>Cover</span>  </a> </li>
                  <li> <a href=""> <span>Q&Q</span>  </a> </li>
                  <li> <a href=""> <span>Ingersoll</span>  </a> </li>
                  <li> <a href=""> <span>VMF</span>  </a> </li>
                </ul>
              <ul className="menyu11">
              <li className="Noutbuk"> <a href=""> <span>Telefon aksessuarları</span>  </a> </li>
                  <li> <a href=""> <span>Adapter USB</span>  </a> </li>
                  <li> <a href=""> <span>Adapter simsiz</span>  </a> </li>
                  <li> <a href=""> <span>Telefon qabları</span>  </a> </li>
                  <li> <a href=""> <span>Ekran Qoruyucu</span>  </a> </li>
                  <li> <a href=""> <span>Yaddaş kartı</span>  </a> </li>
                  <li> <a href=""> <span>Power Bank</span>  </a> </li>
                  <li> <a href=""> <span>USB</span>  </a> </li>
                  <li> <a href=""> <span>Stilus</span>  </a> </li>
                  <li> <a href=""> <span>Monopod</span>  </a> </li>    
                  <li> <a href=""> <span>Portativ printerlər</span>  </a> </li>                               
                  <li> <a href=""> <span>Nömrə ötürücü</span>  </a> </li>                               
                  <li> <a href=""> <span>Qulaqlıq qabları</span>  </a> </li>   
                  <li> <a href=""> <span>Ştativli led İşıq</span>  </a> </li>                               
                  <li> <a href=""> <span>Mikrofon</span>  </a> </li>                               
                </ul>         
                </div>
            </li>
            <li className="menyu04">
              <a className="kt 4" href="#">
                <img src={img4} />
                <span>Tv və audio</span>
                <div className="menyudiv4">
                <ul className="menyu1">
                  <li className="Noutbuk"> <a href=""> <span>Televizorlar</span>  </a> </li>
                  <li> <a href=""> <span>LG</span>  </a> </li>
                  <li> <a href=""> <span>Neos</span>  </a> </li>
                  <li> <a href=""> <span>Samsung</span>  </a> </li>
                  <li> <a href=""> <span>Skyworth</span>  </a> </li>
                  <li> <a href=""> <span>Sony</span>  </a> </li>
                  <li> <a href=""> <span>Arçelik</span>  </a> </li>
                  <li> <a href=""> <span>Zimmer</span>  </a> </li>
                  <li> <a href=""> <span>Sunny</span>  </a> </li>
                  <li> <a href=""> <span>Panasonic</span>  </a> </li>
                  <li> <a href=""> <span>AIWA</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi</span>  </a> </li>  
                  <li> <a href=""> <span>Lotus</span>  </a> </li>               
                  <li> <a href=""> <span>Yoshira</span>  </a> </li>               
                  <li> <a href=""> <span>Hisense</span>  </a> </li>  
                  <li> <a href=""> <span>TCL</span>  </a> </li>               
                  <li> <a href=""> <span>Toshiba</span>  </a> </li>  
                  <li> <a href=""> <span>Artel</span>  </a> </li>               
                  <li> <a href=""> <span>Beko</span>  </a> </li>              
                </ul>
                <ul className="menyu12">
                <li className="Noutbuk"> <a href=""> <span>Televizor aksessuarları</span>  </a> </li>
                  <li> <a href=""> <span>TV Box</span>  </a> </li>
                  <li> <a href=""> <span>Kronşteyn</span>  </a> </li>
                  <li> <a href=""> <span>HDMI Labellər</span>  </a> </li>
                  <li> <a href=""> <span>Çərçivələr</span>  </a> </li>
                  <li> <a href=""> <span>Tv ekran qoruyucuları</span>  </a> </li>
                  <li> <a href=""> <span>AUX naqillər</span>  </a> </li>
                  <li> <a href=""> <span>A/V naqillər</span>  </a> </li>
                  <li> <a href=""> <span>Optik naqillər</span>  </a> </li>
                  <li> <a href=""> <span>Televizor altlığı</span>  </a> </li>
                  <li> <a href=""> <span>Pultlar</span>  </a> </li>
                  <li> <a href=""> <span>Mikrofon</span>  </a> </li>
                  <li> <a href=""> <span>Təmizlik vasitələri</span>  </a> </li>                
                  <li> <a href=""> <span>Adapterlər</span>  </a> </li>
                  <li> <a href=""> <span>3D eynəklər</span>  </a> </li>
                </ul>
              <ul className="menyu11">
              <li className="Noutbuk"> <a href=""> <span>Audio</span>  </a> </li>
                  <li> <a href=""> <span>Soundbarlar</span>  </a> </li>
                  <li> <a href=""> <span>Mikrofonlar</span>  </a> </li>
                  <li> <a href=""> <span>Portativ akustiklər</span>  </a> </li>
                  <li> <a href=""> <span>Smart akustiklər</span>  </a> </li>
                  <li> <a href=""> <span>Səs gücləndiricilər</span>  </a> </li>
                  <li> <a href=""> <span>Qulaqlıq aksesuarları</span>  </a> </li>
                  <li> <a href=""> <span>Pioneer aksessuarları</span>  </a> </li>                        
                </ul>         
                </div>        
              </a>
            </li>
            <li className="menyu05">
              <a className="kt 5" href="#">
                <img src={img5} />
                <span>Foto və video</span>
              </a>
              <div className="menyudiv5">
                <ul className="menyu1">
                  <li className="Noutbuk"> <a href=""> <span> Güzgülü və güzgüsüz fotoaparatlar</span>  </a> </li>
                  <li> <a href=""> <span>Canon</span>  </a> </li>
                  <li> <a href=""> <span>Leica</span>  </a> </li>
                  <li> <a href=""> <span>Nikon</span>  </a> </li>
                  <li> <a href=""> <span>Sony</span>  </a> </li>
                  <li> <a href=""> <span>Action kamerala</span>  </a> </li>  
                </ul>
                <ul className="menyu12">
                <li className="Noutbuk"> <a href=""> <span>Foto aksessuarlar</span>  </a> </li>
                  <li> <a href=""> <span>Obyektivlər</span>  </a> </li>
                  <li> <a href=""> <span>Foto çantalar</span>  </a> </li>
                  <li> <a href=""> <span>Ştativlər</span>  </a> </li>
                  <li> <a href=""> <span>Foto stabilizatorlar</span>  </a> </li>
                  <li> <a href=""> <span>Fotokağızlar</span>  </a> </li>
                </ul>         
                </div>
            </li>
            <li className="menyu06">
              <a className="kt 6" href="#">
                <img src={img6} />
                <span> Böyük məişət texnikası</span>
                </a>
                <div className="menyudiv6">
                <ul className="menyu1">

                  <li className="Noutbuk"> <a href=""> <span>Stasionar</span>  </a> </li>
                  <li> <a href=""> <span>Paltaryuyan maşınlar</span>  </a> </li>
                  <li> <a href=""> <span>Qabyuyanlar</span>  </a> </li>
                  <li> <a href=""> <span>Sobalar</span>  </a> </li>
                  <li> <a href=""> <span>Mikrodalğalı soba</span>  </a> </li>
                  <li> <a href=""> <span>Plitələr</span>  </a> </li>
                  <li> <a href=""> <span>Qurutma Maşınları</span>  </a> </li>
                  <li> <a href=""> <span>Dondurucu</span>  </a> </li>
                  <li> <a href=""> <span>Dispenser</span>  </a> </li>
                  <li> <a href=""> <span>Şərab dolabları</span>  </a> </li>    
                </ul>
                <ul className="menyu12">
                <li className="Noutbuk"> <a href=""> <span>Quraşdırılan texnika</span>  </a> </li>
                  <li> <a href=""> <span>Soyuducu</span>  </a> </li>
                  <li> <a href=""> <span>Paltaryuyan maşınlar</span>  </a> </li>
                  <li> <a href=""> <span>Qabyuyanlar</span>  </a> </li>
                  <li> <a href=""> <span>Sobalar</span>  </a> </li>
                  <li> <a href=""> <span>Mikrodalğalı soba</span>  </a> </li>
                  <li> <a href=""> <span>Bişirmə panel</span>  </a> </li>
                  <li> <a href=""> <span>Aspiratorlar</span>  </a> </li>
                </ul>
              <ul className="menyu11">
              <li className="Noutbuk"> <a href=""> <span>İqlim</span>  </a> </li>
                  <li> <a href=""> <span>Kombi sistemləri</span>  </a> </li>
                  <li> <a href=""> <span>Kombi aksessuarları</span>  </a> </li>
                  <li> <a href=""> <span>İran sobaları</span>  </a> </li>
                  <li> <a href=""> <span>Kondisioner</span>  </a> </li>
                  <li> <a href=""> <span>Sərinkeş</span>  </a> </li>
                  <li> <a href=""> <span>Radiatorlar</span>  </a> </li>
                  <li> <a href=""> <span>Qızdırıcılar</span>  </a> </li>  
                  <li> <a href=""> <span>Su qızdırıcı kalonkalar</span>  </a> </li>                        
                  <li> <a href=""> <span>Hava təmizləyicilər</span>  </a> </li>                        
                  <li> <a href=""> <span>Kamin</span>  </a> </li>                        

                </ul>         
                </div>
                </li>
                <li className="menyu07">
                <a className="kt 7" href="#">
                <img src={img7} />
                <span>Kiçik məişət texnikası</span>
              </a>
              <div className="menyudiv7">
                <ul className="menyu1">
                  <li className="Noutbuk"> <a href=""> <span>Mətbəx</span>  </a> </li>
                  <li> <a href=""> <span>Ətçəkənlər</span>  </a> </li>
                  <li> <a href=""> <span>Şirəçəkən</span>  </a> </li>
                  <li> <a href=""> <span>Mikser</span>  </a> </li>
                  <li> <a href=""> <span>Blenderlər</span>  </a> </li>
                  <li> <a href=""> <span>Çaydanlar</span>  </a> </li>
                  <li> <a href=""> <span>Multibişiricilər</span>  </a> </li>
                  <li> <a href=""> <span>Tosterlər</span>  </a> </li>
                  <li> <a href=""> <span>Qəhvəbişirənlər</span>  </a> </li>
                  <li> <a href=""> <span>Mətbəx robotu</span>  </a> </li>
                  <li> <a href=""> <span>Çörəkbişirənlər</span>  </a> </li>
                  <li> <a href=""> <span>Elektrik plitələr</span>  </a> </li>  
                  <li> <a href=""> <span>Fritozlar</span>  </a> </li>               
                  <li> <a href=""> <span>Qəhvə üyüdənlərr</span>  </a> </li>               
                  <li> <a href=""> <span>Doğrayıcılar</span>  </a> </li>  
                  <li> <a href=""> <span>Buxarlı bişiricilər</span>  </a> </li>               
                  <li> <a href=""> <span>Elektrikli sac</span>  </a> </li>  
                  <li> <a href=""> <span>Artel</span>  </a> </li>               
                </ul>
                <ul className="menyu12">
                <li className="Noutbuk"> <a href=""> <span>Robot tozsoranlar</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi</span>  </a> </li>
                  <li> <a href=""> <span>Samsung</span>  </a> </li>
                  <li> <a href=""> <span>Roborock</span>  </a> </li>
                  <li className="Noutbuk"> <a href=""> <span>Buxarlı Təmizləyicilər</span>  </a> </li>
                  <li> <a href=""> <span>Karcher</span>  </a> </li>
                  <li> <a href=""> <span>Tefal</span>  </a> </li>
                  <li> <a href=""> <span>Philips</span>  </a> </li>
                  <li> <a href=""> <span>Zelmer</span>  </a> </li>
                  <li> <a href=""> <span>Bort</span>  </a> </li>
                  <li className="Noutbuk"> <a href=""> <span>Ütülər</span>  </a> </li>
                  <li> <a href=""> <span>Tefal</span>  </a> </li>                
                  <li> <a href=""> <span>Polaris</span>  </a> </li>
                  <li> <a href=""> <span>Panasonic</span>  </a> </li>
                  <li> <a href=""> <span>Bosch</span>  </a> </li>
                  <li> <a href=""> <span>Beko</span>  </a> </li>
                  <li> <a href=""> <span>Karcher</span>  </a> </li>
                </ul>
              <ul className="menyu11">
              <li className="Noutbuk"> <a href=""> <span>Tozsoronlar</span>  </a> </li>
                  <li> <a href=""> <span>Panasonic</span>  </a> </li>
                  <li> <a href=""> <span>Samsung</span>  </a> </li>
                  <li> <a href=""> <span>Xiaomi</span>  </a> </li>
                  <li> <a href=""> <span>LG</span>  </a> </li>
                  <li> <a href=""> <span>Fakir</span>  </a> </li>
                  <li> <a href=""> <span>Ardesto</span>  </a> </li>
                  <li> <a href=""> <span>Philips</span>  </a> </li>  
                  <li> <a href=""> <span>Polaris</span>  </a> </li>                        
                  <li> <a href=""> <span>Tefal</span>  </a> </li>                        
                  <li> <a href=""> <span>Bosch</span>  </a> </li>    
                  <li> <a href=""> <span>Hitachi</span>  </a> </li>                        
                  <li> <a href=""> <span>Beko</span>  </a> </li>                        
                  <li> <a href=""> <span>Baseus</span>  </a> </li>                        
                </ul>         
                </div>
              </li>
            
            <li className="menyu08">
              <a className="kt 8" href="#">
                <img src={img8} />
                <span>Oyun konsolları</span>
              </a>
              <div className="menyudiv8">
              <ul className="menyu1">
                <li className="Noutbuk"> <a href=""> <span>Oyun konsolları</span>  </a> </li>
                <li> <a href=""> <span>Sony</span>  </a> </li>
                <li> <a href=""> <span>Xbox</span>  </a> </li>
                <li> <a href=""> <span>Oculus</span>  </a> </li>
                <li> <a href=""> <span>Nintendo</span>  </a> </li>      
              </ul>
              <ul className="menyu12">
              <li className="Noutbuk"> <a href=""> <span>Playstation konsolları</span>  </a> </li>
                <li> <a href=""> <span> Playstation joystick və aksessuarları </span>  </a> </li>
                <li> <a href=""> <span>Playstation oyun diskləri</span>  </a> </li>
                <li> <a href=""> <span>Playstation virtual eynəklər</span>  </a> </li>
              </ul>   
                </div>
            </li>
            <li className="menyu08">
              <a className="kt8" href="#">
                <img src={img9} />
                <span>TexnoPlus özəl</span>
              </a>
              </li>
          </ul>
        </section>
                    </div>
                    : null }
        </li>
      </ul>
    </div>
  );
};

export default Katalog;
