import React from 'react'
import './containerItem.css'

const ContainerItem = () => {
  return (
    <>
        <div className="containerItem">
            <div className="rowItem">
                <img src="./../../images/hotels1.jpg" alt="" className='rowImg' />
                <span className='rowName' >Aparthoteks stare Miasto</span>
                <span className="rowCity">Madrid</span>
                <span className="rowPrix">Starting from $120</span>
                <div className="rowSous">
                  <button className='rowBtn'>8.9</button>
                  <span className="rowSousSpan">Excellent</span>
                </div>
            </div>

            <div className="rowItem">
                <img src="./../../images/hotels1.jpg" alt="" className='rowImg' />
                <span className='rowName' >Aparthoteks stare Miasto</span>
                <span className="rowCity">Madrid</span>
                <span className="rowPrix">Starting from $120</span>
                <div className="rowSous">
                  <button className='rowBtn'>8.9</button>
                  <span className="rowSousSpan">Excellent</span>
                </div>
            </div>

            <div className="rowItem">
                <img src="./../../images/hotels1.jpg" alt="" className='rowImg' />
                <span className='rowName' >Aparthoteks stare Miasto</span>
                <span className="rowCity">Madrid</span>
                <span className="rowPrix">Starting from $120</span>
                <div className="rowSous">
                  <button className='rowBtn'>8.9</button>
                  <span className="rowSousSpan">Excellent</span>
                </div>
            </div>

            <div className="rowItem">
                <img src="./../../images/hotels1.jpg" alt="" className='rowImg' />
                <span className='rowName' >Aparthoteks stare Miasto</span>
                <span className="rowCity">Madrid</span>
                <span className="rowPrix">Starting from $120</span>
                <div className="rowSous">
                  <button className='rowBtn'>8.9</button>
                  <span className="rowSousSpan">Excellent</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContainerItem