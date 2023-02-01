import React, { useState,useEffect } from 'react'
import './endirim_carousel.css'
import img1 from './image/iphone14 midnghtpng.png'
import img2 from './image/Samsungg.jpg'
import img3 from './image/Kombi.jpg'
import img4 from './image/Plataryuyan.jpg'
import img5 from './image/Asus tuf.jpg'
import img6 from './image/Manat.jpg'

const endirim_carousel = () => {
    const [second,setSecond]= useState(59);
    const [clock,setClock] = useState(6);
    const [minute,setMinute] = useState(47);

    useEffect(() => {
     const Seconds = setInterval(() => {
            setSecond(second=> {
                if (second === 0) {
                    return 59;
                }
                return second ---1;
            })
        },1000);
       return () => clearInterval(Seconds)
    }, [])

   useEffect(() => {
   const clocks = setInterval(() => {
        setClock(clock =>  {
            if (clock === 0){
                return 24;
            }
            return clock ---1;
        })
    }, 1440000);
   },[])


   useEffect(() => {
    const Minutes = setInterval(() => {
        setMinute(minute=> {
            if (minute===0) {
                return 60;
            }
            return minute---1;
        })
    }, 60000);
    return () => clearInterval(Minutes)
   }, [])



  return (
    <div>
      <div className="big_div">
        <div className="portre">
            <div className="hef_end">
                <span>Həftənin endirimləri</span>
            </div>
            <ul className="time">
                <li className="li_1 li_right1" >
                    <span className="hour">{clock}</span>
                    <span className="hour1">saat</span>
                </li>
                <li className="li_2 li_right2">
                    <span className="minute">{minute}</span>
                    <span className="minute1">dəqiqə</span>
                </li>
                <li className="li_3">
                    <span className="second">{second}</span>
                    <span className="second2">saniyə</span>
                </li> 
            </ul>
                <div className="b_div">
                    <div id="myCarousel1" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-interval="2800">
                                <div className="overlay-image image1s" >
                                    <img src={img1}/>
                                    <span className="span_1">Iphone 13 512 GB Starlight</span>
                                    <div className="qiymet_sebet">
                                        <div className="qiymet">
                                            <p className="oz_qiymeti">3169.99<img src={img6} /></p>
                                            <p className="end_qiymeti">2849.99<img src={img6} /></p>
                                        </div>
                                        <div className="sebete_at">
                                            <button type="button" className="sebet_button" >Səbətə at</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="2800">
                                <div className="overlay-image image1s samsungimg1" >
                                    <img src={img2} />
                                    <span className="span_1">Samsung Galaxy S22 Ultra</span>
                                    <div className="qiymet_sebet">
                                        <div className="qiymet">
                                            <p className="oz_qiymeti">3099.99<img src={img6} /></p>
                                            <p className="end_qiymeti">2849.99<img src={img6} /></p>
                                        </div>

                                        <div className="sebete_at">
                                            <button type="button" className="sebet_button" >Səbətə at</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="2800">
                                <div className="overlay-image image1s" >
                                    <img src={img3} />
                                    <span className="span_1">Kombi HOFFMANN 24 KW</span>
                                    <div className="qiymet_sebet">

                                        <div className="qiymet">
                                            <p className="oz_qiymeti">1099.99<img src={img6} /></p>
                                            <p className="end_qiymeti">949.99<img src={img6} /></p>
                                        </div>

                                        <div className="sebete_at">
                                            <button type="button" className="sebet_button" >Səbətə at</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="2800">
                                <div className="overlay-image image1s" >
                                    <img src={img4} />
                                    <span className="span_1">Paltaryuyan Samsung W8</span>
                                    <div className="qiymet_sebet">

                                        <div className="qiymet">
                                            <p className="oz_qiymeti">1299.99<img src={img6} /></p>
                                            <p className="end_qiymeti">1039.99<img src={img6} /></p>
                                        </div>

                                        <div className="sebete_at">
                                            <button type="button" className="sebet_button" >Səbətə at</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="2800">
                                <div className="overlay-image image1s" >
                                    <img src={img5} />
                                    <span className="span_1 span_asus">ASUS TUF Gaming F15</span>
                                    <div className="qiymet_sebet">

                                        <div className="qiymet">
                                            <p className="oz_qiymeti">2099.99<img src={img6} /></p>
                                            <p className="end_qiymeti">1699.99<img src={img6} /></p>
                                        </div>

                                        <div className="sebete_at">
                                            <button type="button" className="sebet_button" >Səbətə at</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                        <a href="#myCarousel1" className='previousbtn1'  role="button" data-slide="prev">
                            <span className="sr-only"></span>
                            <span className="button_16"
                            aria-hidden="true"><svg xmlns="http://www.w3.org/2800/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                              </svg></span>
                        </a>
                        <a href="#myCarousel1" className='nextbtn1'  role="button" data-slide="next">
                            <span className="sr-only"></span>
                            <span className="button_16"
                            aria-hidden="true"><svg xmlns="http://www.w3.org/2800/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right " viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                              </svg></span>
                        </a>
                      
                        <div className="caro_control">
                            <ol className="carousel-indicators carousel_buttons4 ">
                                <li data-target="#myCarousel1"
                                data-slide-to="0" className="active bg-secondary"></li>
                                <li data-target="#myCarousel1"
                                data-slide-to="1" className="bg-secondary"></li> 
                                <li data-target="#myCarousel1"
                                data-slide-to="2" className="bg-secondary"></li> 
                                <li data-target="#myCarousel1"
                                data-slide-to="3" className="bg-secondary"></li> 
                                <li data-target="#myCarousel1"
                                data-slide-to="4" className="bg-secondary"></li> 
                            </ol>
                        </div>
                    </div>
                    <div className="div_but_tek_bax">
                        <a href="#" >Bütün təklifləri gör</a>
                    </div>
                </div>
        </div>
    </div>
    </div>
  )
}

export default endirim_carousel
