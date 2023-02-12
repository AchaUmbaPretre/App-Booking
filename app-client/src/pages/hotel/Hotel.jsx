import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Mail from '../../components/mail/Mail'
import Footer from '../../components/footer/Footer'
import './hotel.css'
import { useState } from 'react'

const Hotel = () => {
  const [slideNumber, setSlideNumber]= useState(0)
  const [open, setOpen]= useState(false)
  const handClick = (i)=>{
    setSlideNumber(i)
    setOpen(!open)
  }
  const images = [
    {
      src: './../../images/appartement1.jpg'
    },
    {
      src: './../../images/appartement3.jpg'
    },
    {
      src: './../../images/appartement1.jpg'
    },
    {
      src: './../../images/appartement1.jpg'
    },
    {
      src: './../../images/appartement3.jpg'
    },
    {
      src: './../../images/appartement1.jpg'
    },
    
  ]
   
  const handSlide = (direction) => {

    let newSlide;
    if(direction === 'r'){
      newSlide = slideNumber === 0 ? 5 : slideNumber - 1
    }
    else{
      newSlide = slideNumber === 5 ? 0 : slideNumber + 1
    }
    setSlideNumber(newSlide)
  }
 

  return (
    <div>
      <Navbar/>
      <Header type='liste'/>
      {open && <div className="slider">
          <i className="fa-sharp fa-solid fa-circle-xmark circle" onClick={()=>setOpen(false)}></i>
          <i className="fas fa-circle-arrow-left arrow" onClick={()=>handSlide('r')}></i>
          <div className="sliderRowImg">
            <img src={images[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <i className="fas fa-circle-arrow-right arrow" onClick={()=>handSlide('l')}></i>
        </div>}
      <div className="hotel">
        <div className="hotelContainer">
          <div className="hotelRow1">
            <div className="hotelSousTxt1">
              <h1>Tower Street Apartments</h1>
              <span className="hotelTxt"><i className="fas fa-location-dot"></i>5 basztowa, Old Town, 33-332 Krakow, Poland</span>
              <span className="hotelTxt1">Excellent location - 500m from center</span>
              <span className='hotelTxt2'>Book a stay over $110 at this property and get a free airport taxi</span>
            </div>
            <button className="hotelBtn">Reserve or Book Now</button>
          </div>

          <div className="hotelRow2">
            { images.map((image, i)=>(
            <div className="hotelImgWrapper">
              <img onClick={()=>handClick(i)} src={image.src} alt="" className="hotelImg" />
            </div>))}
          </div>

          <div className="hotelRow3">
            <div className="hotelWrapperLeft">
              <h1>Stay in the heart of Krakow</h1>
              <p className="hotelWrapper">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis, nostrum nobis, 
              dolore aspernatur numquam cum quasi tempora quisquam laudantium nemo magni quibusdam libero esse excepturi explicabo.
               Pariatur possimus doloribus nulla quia fuga, corrupti illo totam dolores vero odio!
               
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis, nostrum nobis, 
              dolore aspernatur numquam cum quasi tempora quisquam laudantium nemo magni quibusdam libero esse excepturi explicabo.
               Pariatur possimus doloribus nulla quia fuga, corrupti illo totam dolores vero odio!
               </p>
            </div>
            <div className="hotelWrapperRight">
              <h1>Perfect for a 9-night stay</h1>
              <span>Located in the real heart of Krakow, this property has an excellent location score of 9.8</span>
              <h2><b>$945</b> (9 nights)</h2>
              <button className='hotelBtnBottom'>Reserve or Book Now</button>
            </div>
          </div>
        </div>
        <Mail/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel