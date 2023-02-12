import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './header.css'

const Header = ({type}) => {
  let [options, setOptions] =useState({
    adultes: 1,
    enfants: 0,
    rooms: 1,  
  })
  const [openOptions, setOpenOptions] = useState(false);
  const [destination, setDestination] = useState('');
  let [date, setDate] = useState('');

  const navigate = useNavigate();

  const handleOption = (name, operation) =>{
   setOptions((prev)=>{
    return{
      ...prev, [name]:operation === 'i'? options[name] + 1 : options[name] - 1,
    };
   });
  }
  const handSubmit = () =>{
    navigate('/hotels', {state: {destination, options, date}})
  }

  return (
    <>
      <div className="header">
        <div className={type === 'liste' ?'headerContainer headerListe': "headerContainer"}>
          <div className="itemIcon">
            <a href="" className="item active"><i className="fas fa-bed"></i>Stays</a>
            <a href="" className="item"><i className='fas fa-book'></i>Flights</a>
            <a href="" className="item"><i className='fas fa-car'></i>Car rentals</a>
            <a href="" className="item"><i className='fas fa-bed'></i>Attraction</a>
            <a href="" className="item"><i className='fas fa-taxi'></i>Airport taxis</a>
          </div>
          { type !== 'liste'&&<> <h1>A lifetime of discounts? It's Genius.</h1>
          <p>Get rewarded for your travels - unlock instant savings of 10% or more with a free A-book account</p>
          <a href="" className="btnHeader">Sign in / Register</a>
          <div className="calendar">
            <div className="spanIcon">
              <i className="fas fa-bed"></i>
              <input type="text" placeholder='Where are you going?' onChange={(e)=> setDestination(e.target.value)} />
            </div>

            <div className="spanIcon">
              <i className='fas fa-calendar'></i>
              <input type="date" onChange={(e)=> setDate(e.target.value)}/>
            </div>

            <div className="spanIcon">
              <i className='fas fa-person'></i>
              <span className='headerText' onClick={()=>setOpenOptions(!openOptions)}>{`${options.adultes} Adultes. ${options.enfants} Enfants. ${options.rooms} Rooms`}</span>
              {openOptions && <div className="options">
                <div className="optionItem">
                  <span className="optionTxt">Adultes</span>
                  <div className="optionCounter">
                    <button className="optionBtn" disabled={options.adultes <= 1} onClick={()=>handleOption('adultes', 'd')} >-</button>
                    <span className="optionNumber">{options.adultes}</span>
                    <button className="optionBtn" onClick={()=>handleOption('adultes', 'i')}>+</button>
                  </div>
                </div>

                <div className="optionItem">
                  <span className="optionTxt">Enfants</span>
                  <div className="optionCounter">
                    <button className="optionBtn" disabled={options.enfants < 1} onClick={()=>handleOption('enfants', 'd')}>-</button>
                    <span className="optionNumber">{options.enfants}</span>
                    <button className="optionBtn" onClick={()=>handleOption('enfants', 'i')}>+</button>
                  </div>
                </div>

                <div className="optionItem">
                  <span className="optionTxt">Rooms</span>
                  <div className="optionCounter">
                    <button className="optionBtn" disabled={options.rooms <= 1} onClick={()=>handleOption('rooms', 'd')}>-</button>
                    <span className="optionNumber">{options.rooms}</span>
                    <button className="optionBtn" onClick={()=>handleOption('rooms', 'i')}>+</button>
                  </div>
                </div>
              </div>}
            </div>
            <button className='btn' onClick={handSubmit}>search</button>
          </div> </>}
        </div>
      </div>
    </>
  )
}

export default Header