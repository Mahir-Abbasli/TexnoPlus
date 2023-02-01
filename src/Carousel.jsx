import React from 'react'
import './Carousel.css'
import img2 from './image/Paltaryuyuan sekli.jpg'
import img4 from './image/Made in Samsung.png'
import img5 from './image/Birkart.jpg'
import img6 from './image/Tamkart.jpg'
import img7 from './image/Samsung-tv.jpg'
import img8 from './image/kombi-az-1.png'
import img9 from './image/samsung bannet.jpg'
import img3 from './image/ivi_3ayliq.png'
import img10 from './image/samsung_400.png'
import img11 from './image/asus-post-az.jpg'

const Carousel = () => {
  return (
    <div>
      <div className="bc_div">
    <div id="myCarousel2" className="carousel slide"
        data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#myCarousel2"
            data-slide-to="0" className='active'></li>
            <li data-target="#myCarousel2"
            data-slide-to="1"></li> 
            <li data-target="#myCarousel2"
            data-slide-to="2"></li> 
            <li data-target="#myCarousel2"
            data-slide-to="3"></li> 
            <li data-target="#myCarousel2"
            data-slide-to="4"></li> 
            <li data-target="#myCarousel2"
            data-slide-to="5"></li> 
            <li data-target="#myCarousel2"
            data-slide-to="6"></li> 
            <li data-target="#myCarousel2"
            data-slide-to="7"></li> 
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active" data-interval="3000">
                <div className="overlay-image image1" >
                    <img src={img4} />
                </div>
            </div>
            <div className="carousel-item" data-interval="3000">
                <div className="overlay-image image1" >
                    <img src={img10}/>
                </div>
            </div>
            <div className="carousel-item" data-interval="3000">
                <div className="overlay-image image1" >
                    <img src={img11} />
                </div>
            </div>
            <div className="carousel-item" data-interval="3000">
                <div className="overlay-image image1" >
                    <img src={img9} />
                </div>
            </div>
            <div className="carousel-item" data-interval="3000">
                <div className="overlay-image image1" >
                    <img src={img7} />
                </div>
            </div>
            <div className="carousel-item" data-interval="3000">
                <div className="overlay-image image1" >
                    <img src={img3} />
                </div>
            </div>
            <div className="carousel-item" data-interval="3000">
                <div className="overlay-image image1" >
                    <img src={img2} />
                </div>
            </div>
            <div className="carousel-item" data-interval="3000">
                <div className="overlay-image image1" >
                    <img src={img8} />
                </div>
            </div>
        </div>
        <a href="#myCarousel2" className='previousbtn' role="button" data-slide="prev">
            <span className="sr-only">Previous</span>
            <span
            aria-hidden="true" className=" button_16"><svg xmlns="http://www.w3.org/3000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg></span>
        </a>
        <a href="#myCarousel2" className='nextbtn' role="button" data-slide="next">
            <span className="sr-only">Previous</span>
            <span className="button_16"
             aria-hidden="true"><svg xmlns="http://www.w3.org/3000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right " viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg></span>
        </a>
    </div>
</div>
    <div className='KrKartlar'>
        <a href='https://birbank.az/' target={'_blank'}><img src={img5}/></a>
        <a href='https://tamkart.az/' target={'_blank'}><img src={img6}/></a>
    </div>
    </div>
    
  )
}

export default Carousel
