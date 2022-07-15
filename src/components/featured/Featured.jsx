import React from 'react'
import "./featured.css"


const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/348730736.jpg?k=839c261660f01b9904451599d286eef7a455e0d6ff6fc14663ab147379831aef&o=&hp=1" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Marseille</h1>
            <h2>123 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/177954582.jpg?k=ff6f19fa263f9b3afac23df3338d5858bc21639cbcc510c57223c1ae8a3ecd2d&o=&hp=1" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Amsterdam</h1>
            <h2>400 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/286716835.jpg?k=c0ef4a553391c77373ff8532868c8c82cfb31ba6584ed484ecde4a45646babcc&o=&hp=1" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Nice</h1>
            <h2>503 Properties</h2>
            </div>
        </div>


    </div>
  )
}

export default Featured