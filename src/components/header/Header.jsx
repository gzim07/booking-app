import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range'
import { useState } from 'react'
import "./header.css"
import { faBed,  faCalendarDays, faCar, faHotel, faMapLocationDot, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {format} from "date-fns"
import { useNavigate } from 'react-router-dom'
 const Header = ({type}) => {
    const handleOption=(name,operation)=>{ 
        setOptions(prev=>{
            return {
                ...prev,[name]:operation==="i"?options[name]+1:options[name]-1
            }
        })
    }
    const [openDate,setOpenDate]=useState(false);
    const [date,setDate]=useState([
{
    startDate:new Date(),
    endDate:new Date(),
    key:"selection"
}

    ]);
    const [destination,setDestination]=useState("")
        const  [openOptions,setOpenOptions]=useState(false);
        const [options,setOptions]=useState({
            adult:1,
            children:0,
            room:0
        });

        const navigate=useNavigate()
        const handleSearch=()=>{
            navigate("/hotels",{state:{destination,date,options}});

        }
  return (
    <div className="header">
        <div className={type ==="list"? "headerContainer  listMode":"headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                <FontAwesomeIcon icon={faHotel} />
                <span >Stays</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span >Flights</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span >Car rental</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faMapLocationDot} />
                <span >Atractions</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span >Airport taxis</span>
                </div>
           
           
           
            </div>
         {type !==  "list" &&  <> <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
           <p className="headerDesc">Get rewarder for your travles,unlock instant savings or more with a free zzimbooking Account</p>
           <button className="headerBtn">Sign in/Register</button>
           <div className="headerSearch">
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                    <input type="text" onChange={e=>setDestination(e.target.value)} placeholder="Where are you going"  className="headerSearchInput"></input>
                    
                </div>
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                   <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                    {openDate && <DateRange 
                    editableDateInputs={true}
                    onChange={item=>setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='date'
                    />}
                </div>
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult  . ${options.children} children  .  ${options.room} room `}</span> 
                { openOptions   &&   <div className="option">
                     <div className="optionItem">
                            <span className="optionText">Adult</span>

                            <div className="optionCounter">
                            <button  disabled={options.adult <=1}  className="optionCounterbutton" onClick={()=>handleOption("adult","d")}>-</button>
                           <span className="optionCounterNumber">{options.adult}</span>
                            <button className="optionCounterbutton" onClick={()=>handleOption("adult","i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                            <button disabled={options.children <1}   className="optionCounterbutton" onClick={()=>handleOption("children","d")}>-</button>
                           <span className="optionCounterNumber">{options.children} </span>
                            <button className="optionCounterbutton" onClick={()=>handleOption("children","i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                            <button  disabled={options.room <=1}  className="optionCounterbutton" onClick={()=>handleOption("room","d")}>-</button>
                           <span className="optionCounterNumber">{options.room} </span>
                            <button className="optionCounterbutton" onClick={()=>handleOption("room","i")}>+</button>
                                </div>
                        </div>
                     </div>}
                </div>
                <div className="headerSearchItem">
                <button   onClick={handleSearch} className="headerSecBtn">
                    Search
                </button>
                    
                </div>

           </div> </>}
            </div>

    </div>
  )
}

export default Header