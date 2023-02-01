import React, { useEffect, useState  } from "react";
import "./PgHeader.css";
import img1 from "./image/azerbaijan.png";
import img2 from "./image/united-kingdom.png";
import img3 from "./image/texnoplus-logo11.png";
import Katalog from "./Katalog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass as SearchIcon } from "@fortawesome/free-solid-svg-icons";
import { faUser as UserIcon } from "@fortawesome/free-regular-svg-icons";
import { faHeart as HeartIcon } from "@fortawesome/free-regular-svg-icons";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Pgmain.css"; 
import Kampaniyalar from "./Kampaniyalar";
import {BrowserRouter,Routes,Link, Route, useNavigate} from 'react-router-dom';
import  Modal  from "react-modal";
import img4 from './image/million.png'
import img5 from './image/emanat12.png'
import img6 from './image/epul.png'
import img7 from './image/birbank1.png'
import img8 from './image/HOP portal logo1.jpg'
import img9 from './image/hesaba12.png'
import {addToCard, getProducts, getProductLaptop} from './services/api';
import axios from "axios";
Modal.setAppElement('#root')

const PgHeader = () => {

  const [modal, setModal] = useState(false)
  const [users, setUsers] = useState([]);
  const [productlaptop, setProductLaptop] = useState([]);
  const [text,setText] =useState('')
  const [suggestion,setSuggestion] =useState([])

 
  useEffect( () => {
    const loadUsers = async () => {
      const response =await axios.get('https://reqres.in/api/users')
      setUsers(response.data.data)
    }
    loadUsers();
  }, []);

  const getProductList = async () => {
    const get_products = await getProducts([])
    setProducts(old_data => get_products);
  }
  const getProductLaptops = async () => {
    const get_laptopproduct = await getProductLaptop([])
    setProductLaptop(old_data => get_laptopproduct);
  }

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length>0) {
      matches = users.filter (user=> {
        const regex = new RegExp(`${text}`, "gi")
        return user.email.match(regex)
      })
    }
    console.log('matches',matches)
    setSuggestion(matches)
    setText(text)
  }
  

  const handleModal =() => {
    setModal(true)
  }
  const handleClose =() => {
    setModal(false)
  }
  return (
    
    <div className="header_div">

      <header>
        <section className="section1">
          <div className="container1234">
            <div className="zad">
              <div className="raw">
                <div className="menu">
                  <ul className="menu1">
                    <li className="li1">
                      <a href='/Kampaniyalar'>Kampaniyalar</a>
                    </li>
                    <li className="li2">
                       <a href="">Bloqlar</a>
                    </li>
                    <li className="li3">
                      <a href="/Map">Filiallar</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="raw1">
                <ul className="menu2">
                  <li>
                    <a  className="M1" >
                     
                      <span style={{cursor: 'pointer'}} onClick={handleModal}> Aylıq Ödəniş</span>
                    </a>
                    <div className="modal">
                  <Modal style={{content: {
                    position:'fixed',
                    top:'230px',
                    left:'410px',
                    zIndex :'1050',
                    width: '700px',
                    height:'300px',
                    borderRadius :'6px',
                    border: '1px solid #BEBEBE',
                    backgroundColor :'#FFFFFF',
                  },  
                  overlay: {
                    backgroundColor: 'rgba(0,0,0,0.52)',
                    zIndex: '2'
                  }}}
                  
                  isOpen={modal} shouldCloseOnEsc onRequestClose={handleClose}>
                    <div className="modacontent1">
                   
                      <a href="https://www.million.az/" target={'_blank'}>    
                      <img src={img4} />
                      </a>
                      <a href="https://www.e-pul.az/epay/az/home" target={'_blank'}>
                    <img src={img6} />
                      </a>
                      <a href="https://emanat.az/" target={'_blank'}>
                      <img src={img5} />
                      </a>
          
                  </div>
                  <div className="modacontent2">
                    <a href="https://birbank.az/" target={'_blank'}>
                    <img className="birbank" src={img7} />
                    </a>
                    <a href="https://gpp.az/WebPortal/Infosite" target={'_blank'}>
                    <img src={img8} />
                    </a>
                    <a href="https://hesab.az/#/" target={'_blank'}>
                    <img src={img9} />
                    </a>
                    </div>
                  </Modal>
                    </div>
                  </li>
                
                  <li>
                    <a href="tel: *9955">
                      <span className="M2">*9955</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img alt src={img1} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img alt src={img2} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="section2">
          <div className="container123">
            <div className="header2ci">
              <div className="logo">
                <a href='/'><img alt src={img3} /></a>
              </div>
              <Katalog/>
              <div className="col1">
                <form className="form1">
                  <div className="dvform2">
                    <input  type="text"
                    onChange={(e) =>onChangeHandler(e.target.value)}
                    value ={text}
                    className="input" placeholder="Axtarış..."/>
                    <a className="icon11" href="">
                      <button>
                        <FontAwesomeIcon className="icon1" icon={SearchIcon} />
                      </button>
                    </a>
                    <a href ='./Login' className="icon21" >
                      <FontAwesomeIcon className="icon2" icon={UserIcon} />
                      <span>Daxil ol</span>
                    </a>
                    <a  href="" className="icon30">
                      <FontAwesomeIcon className="icon3" icon={HeartIcon} />
                      <span>Bəyəndim</span>
                    </a>
                    <a href="./Basket" className="icon41" >
                      <AiOutlineShoppingCart className="icon4" />
                      <span className="sebet41">Səbət</span>
                      <span className="CartBadge">0</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </header>
     
    </div>

  );
};

export default PgHeader;
