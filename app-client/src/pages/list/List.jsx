import React from 'react'
import './list.css'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import ListeItem from '../../components/listeItem/ListeItem';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { format } from 'date-fns';

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate]= useState(false)

  return (
    <>
      <Navbar />
      <Header type='liste'/>

      <div className="listeContainer">
        <div className="listeRow">
          <div className="listeSearch">
            <h1 className='listeH1'>Recherche</h1>
            <div className="listeMenu">
              <span className="listeNom">Destination</span>
              <input type="text" className="listeInput" placeholder={destination}/>
            </div>

            <div className="listeMenu">
              <span className="listeNom">Check-in Date</span>
              <div className="listeDate" onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</div>
              { openDate &&
              <DateRange
                onChange={(item) => setDate([item.selection])}
                ranges={date}
                className='dateList'
                minDate={new Date()}
               />
              }
            </div>
            <div className="listeDetail">
              <h2 className="listeH2">Options</h2>
              <div className="listeOption">
                <span className="listTxt">Min price per night</span>
                <input type="number" className="listeOptionInput" />
              </div>

              <div className="listeOption">
                <span className="listTxt">Max price per night</span>
                <input type="number" className="listeOptionInput" />
              </div>

              <div className="listeOption">
                <span className="listTxt">Adultes</span>
                <input type="number" min={1} className="listeOptionInput" placeholder={options.adultes} />
              </div>

              <div className="listeOption">
                <span className="listTxt">Enfants</span>
                <input type="number" min={0} className="listeOptionInput" placeholder={options.enfants} />
              </div>

              <div className="listeOption">
                <span className="listTxt">Rooms</span>
                <input type="number" min={1} className="listeOptionInput" placeholder={options.rooms} />
              </div>
              <button className="listeBtn">Recherche</button>
            </div>
          </div>
          <div className="listContainer">
            <ListeItem/>
            <ListeItem/>
            <ListeItem/>
            <ListeItem/>
          </div>
        </div>
        </div>
    </>
    
    
  )
}

export default List