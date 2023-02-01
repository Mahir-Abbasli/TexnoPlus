import React from "react";
import Slider from "react-slick";
import "./MainCarousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faManatSign as ManatIcon } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import {addToCard, getProducts, getProductLaptop} from './services/api';


const MainCarousel = () => {

  const [products, setProducts] = useState([]);
  const [productlaptop, setProductLaptop] = useState([]);
  const [ids, setIds] = useState([]);

  const [cart,setCart] = useState([])

  const AddCart = () => {
    console.log(setCart)
  }
  useEffect( () => {

    // load products
    getProductList();    
    getProductLaptops();

  }, []);

  const getProductList = async () => {
    const get_products = await getProducts([])
    setProducts(old_data => get_products);
  }
  const getProductLaptops = async () => {
    const get_laptopproduct = await getProductLaptop([])
    setProductLaptop(old_data => get_laptopproduct);
  }


  const updateIds = (e) => {
    const {value, checked} = e.target;

    if (checked) {

      setIds(old_ids => [...old_ids, value]);

    }else{
      ids.splice(ids.indexOf(value), 1);

      setIds(old_ids => ids);
    }
  }

  const addToBasket = () => {
    let create_basket_ids=ids.map(id => {
      return {
        productId: Number(id),
        quantity: 1
      }
    })
    console.log(ids,products, create_basket_ids)

    let request_data={
      userId: 5,
      date: new Date(),
      products: create_basket_ids
    }

    addToCard(request_data).then(res => {
      console.log(res);
    }); 
  }


  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };
      return (
          <div className="Main_Carousel">
           <b>Smartfonlar</b>
           <Slider {...settings}>
           
           { 
            products?.map((product) => {
            return (
              <div>
           <div  className="EveryCarousel">
            <a href="">
              
              <div className="orders">
                <span className="firstKomissiyasiz">komissiyasız</span>
                <span className="firstFaizsiz">faizsiz</span>
              </div>
              
              <div className="ImgCarousel"> <img src={product.thumbnail}/></div>
              <div className="Mehsullarin_adlari"><span>{product.title}</span></div>
              <div className="KreditSpan"><span>0 <FontAwesomeIcon className="ManatIcon1" icon={ManatIcon} />0% 18ay </span></div>
              <div className="QiymetSpan"> <span>{product.price} <FontAwesomeIcon className="ManatIcon2" icon={ManatIcon} /></span></div>
              <div className="Mehsulbtn"><button onClick={AddCart}>Səbətə at</button></div>
            </a>
           </div>
          
           
           </div>
           
           
           
            )
            
          })
        }
           

          
           </Slider>
           <div className="Main_Carousel">
           <b>Noutbuklar</b>
<Slider {...settings}>
{
            productlaptop?.map((product) => {
            return (
              <div>
           <div  className="EveryCarousel">
            <a href="">
              
            <div className="orders">
                <span className="firstKomissiyasiz">komissiyasız</span>
                <span className="firstFaizsiz">faizsiz</span>
              </div>
              
              <div className="ImgCarousel"> <img src={product.thumbnail}/></div>
              <div className="Mehsullarin_adlari"><span>{product.title}</span></div>
              <div className="KreditSpan"><span>0 <FontAwesomeIcon className="ManatIcon1" icon={ManatIcon} />0% 18ay </span></div>
              <div className="QiymetSpan"> <span>{product.price} <FontAwesomeIcon className="ManatIcon2" icon={ManatIcon} /></span></div>
              <div className="Mehsulbtn"> <button onClick={AddCart}>Səbətə at</button></div>
            </a>
           </div>
          
           
           </div>
           
           
            )
            
          })
        }
</Slider>
           
           
          </div>
          </div>
          
        
      )
}
export default MainCarousel;