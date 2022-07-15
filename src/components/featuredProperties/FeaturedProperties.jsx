import React from 'react'
import "./featuredproperties.css"
 const FeaturedProperties = () => {
  return (
  <div className="fp">
    <div className="fpItem">
    <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/74148273.jpg?k=529c86e3cc2795cfecf5361e5ac419d6131713898885304917e637607494318f&o=&hp=1" alt="" className="fpImage" />

    <span className="fpName">Pateo Santo Estevao-Self Catering Apartments</span>
    <span className="fpCity">Lisbon</span>
    <span className="fpPrice">Starting From $130</span>
    <div className="fpRating">
      <button>9.6</button>
      <span>Excellent</span>
    </div>
    
  </div>
  <div className="fpItem">
    <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/74529550.jpg?k=48fd03c2e4a2539e3ba20dd50e89364e7d8172e386005b1716594e1a30bad958&o=&hp=1" alt="" className="fpImage" />

    <span className="fpName">Sugar Loft Apartments </span>
    <span className="fpCity">Rio De Jainero</span>
    <span className="fpPrice">Starting From $45</span>
    <div className="fpRating">
      <button>9.0</button>
      <span>Good</span>
    </div>
    
  </div>
  <div className="fpItem">
    <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/64768782.jpg?k=87839fc2ccdf77d3108c8ec41bb4c1b80c28ab311355aa1a6af8b83fb9f760a5&o=&hp=1" alt="" className="fpImage" />

    <span className="fpName">Zoku Apartements</span>
    <span className="fpCity">Amsterdam</span>
    <span className="fpPrice">Starting From $189</span>
    <div className="fpRating">
      <button>8.9</button>
      <span>Good</span>
    </div>
    
  </div>
  <div className="fpItem">
    <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/39659322.jpg?k=fbe4e7f98e8792d3058bb67ef33acd68dade1f632a3a5354ef50e8de71558709&o=&hp=1" alt="" className="fpImage" />

    <span className="fpName">Appartamento Benincampi </span>
    <span className="fpCity">Rome</span>
    <span className="fpPrice">Starting From $150</span>
    <div className="fpRating">
      <button>9.7</button>
      <span>Excellent</span>
    </div>
    
  </div>
  </div>
  
  )
}
export default FeaturedProperties
