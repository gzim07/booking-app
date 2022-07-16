
import React from 'react'
import "./searchitem.css"

const SearchItem = () => {
  return (
   <div className="searchItem">
        <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/44146554.jpg?k=c418ab13d5c0ad2402cb939d157a20953f233ffbba42753b0f00c4195626a1c1&o=&hp=1" alt="" className="sImg" />
        <div className="siDesc">
            <h1 className="sTitle">Villa Domina</h1>
            <span className="sDistance">0.5km from Center</span>
            <span className="sTaxipop">Free taxi</span>
            <span className="sSubtitle">Studio Apartament</span>
            <span className="sFeatures">Entire Studio </span>
            <span className="sCancelOp">Free Cancellation</span>
            <span className="sCancelOpSubtitle">You can cancel later</span>
        </div>
        <div className="siDetails">
            <div className="sRating">
            <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="sDetailsText">
            <span className="sPrice">$120</span>
            <span className="sTax">Includes taxes and fees</span>
            <button className='checkButton'>See avaibility</button>
            
            </div>
            
            </div>
   </div>
  )
}

export default SearchItem