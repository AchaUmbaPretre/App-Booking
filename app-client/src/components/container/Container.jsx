import React from 'react'
import './container.css';

const Container = () => {
  return (
    <>  
        <div className="containerRow">
          <div className="row">
            <img src='./../../images/appartement3.jpg' alt="" className='RowImage'/>
            <div className="sousRow">
              <h3 className='rowH3'>Hotels</h3>
              <span className="rowsub">854 hotels</span>
            </div>
          </div>

          <div className="row">
            <img src='./../../images/appartement1.jpg' alt="" className='RowImage'/>
            <div className="sousRow">
              <h3 className='rowH3'>Appartement</h3>
              <span className="rowsub">854 hotels</span>
            </div>
          </div>

          <div className="row">
            <img src='./../../images/appartement3.jpg' alt="" className='RowImage'/>
            <div className="sousRow">
              <h3 className='rowH3'>Villa</h3>
              <span className="rowsub">855 hotels</span>
            </div>
          </div>

          <div className="row">
            <img src='./../../images/appartement6.jpg' alt="" className='RowImage'/>
            <div className="sousRow">
              <h3 className='rowH3'>Hotels</h3>
              <span className="rowsub">851 hotels</span>
            </div>
          </div>

          <div className="row">
            <img src='./../../images/hotels3.jpg' alt="" className='RowImage'/>
            <div className="sousRow">
              <h3 className='rowH3'>Hotels</h3>
              <span className="rowsub">850 hotels</span>
            </div>
          </div>

        </div>
        <div className="container">
          <div className="containerItem">
            <img src='./../../images/appartement1.jpg' alt="" className='containerImage'/>
            <div className="containerTitle">
              <h1 className='containerH1'>Matete</h1>
              <h2 className='containerH2'>50 Properties</h2>
            </div>
          </div>

          <div className="containerItem">
            <img src='./../../images/appartement3.jpg' alt="" className='containerImage'/>
            <div className="containerTitle">
              <h1 className='containerH1'>Mont ngafula</h1>
              <h2 className='containerH2'>50 Properties</h2>
            </div>
          </div>

          <div className="containerItem">
            <img src='./../../images/appartement1.jpg' alt="" className='containerImage'/>
            <div className="containerTitle">
              <h1 className='containerH1'>Lemba</h1>
              <h2 className='containerH2'>50 Properties</h2>
            </div>
          </div>
          
        </div>
    </>
  )
}

export default Container