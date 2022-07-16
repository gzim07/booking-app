import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import "./hotels.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faLocationArrow, faLocationDot, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { useState } from 'react'
 const Hotel = () => {
  const [slideNumber,setSlideNumber]=useState(0);
  const [open,setOpen]=useState(false);
  const photos=[
   { src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/354552745.jpg?k=4439d08c7b19ce980601852595f4773e611611113e843fe80299507affdd6612&o=&hp=1"},
    {src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/58065044.jpg?k=dd830410d43aa82566b60fcce81d7927ff397da01ad4181329c6d90922991d5b&o=&hp=1"},
   { src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/58060941.jpg?k=97e1ef12d4ac4b4dd9763a499089fb10b7b55c59fa0693753edbeb3d0c8ac1ec&o=&hp=1"},
   { src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/374778294.jpg?k=22850e3efb825098a81ce053a5578e3334a504cf2edac972e2ff20cd02cd1c30&o=&hp=1"},
   { src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/354551830.jpg?k=892c430d170035cdddebb0edbba46e89e43ae188f9cf153b608bfd44fe96b3f8&o=&hp=1"},
    {src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/58065195.jpg?k=f1fca50b5f604b06fbf5ead57fe6f9bd48b714ca7e4ae8b5ad1eafdbf2b4eb64&o=&hp=1"},

 
  ];
  const handleOpener=(i)=>{
    setSlideNumber(i);
    setOpen(true);
  }
  return (

    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
      { !open &&  <div className="slider">  sxbcvdgdg  </div>}
        <div className="hotelWrapper">
        
          <buttn className="bookNow">Reseve or Book Now</buttn>
           <h1 className="hotelTitle">Grand Hotel</h1>
           <div className="hotelAdress">

            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton St 125 New York</span>

           </div>
           <span className="hotelDistance">
            Excellent location 500m from center
           </span>
           <span className="hotelPriceHighLight">
            Book a stay over $114 at this property and get a free airport taxi
           </span>
           <div className="hotelImages">

            {photos.map((photos,index)=>(
              <div className="hotelImageWrapper">
                  <img src={photos.src} onClick={handleOpener} alt="" className="hotelImg" />


              </div>
            ))}
           </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of New York</h1>
              <p className="hotelDesc">his New York City hotel is located in the Theater District, next to The Ed Sullivan Theater. The hotel offers ticket services and modern rooms with black and white tiled floors.
Guest rooms at the Ameritania feature cable TVs. Designer bath amenities and work desks are also included in each spacious room. They are styled with rich colors, mahogany furnishings, and modern decor.
Ameritania Hotel is 645 m from The Museum of Modern Art and 161 m from the 7th Avenue underground station. Central Park is 805 m away. </p>
            </div>
            <div className="hotelDetailsPrice">
               <h1>Perfect for a wekk stay</h1>

               <span>Located in the heart of New York ,this property has an excellent location of score 9.8</span>
                <h2>
                  <b>$945</b>(9nights)
                </h2>
                <button>Reserve or Book now</button>
            
            </div>
          </div>

        </div>
        <MailList/>
      <Footer/>
      </div>
     
    </div>
  )
}
export default Hotel