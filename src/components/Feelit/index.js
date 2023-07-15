import { useState } from 'react';
import {bikeData } from './bikedata';
import './index.css' ;


const Feelit = () => {

    const [selected , onChangeSelect] = useState("Hourly")

    const chageValue = async (e) => {
        await onChangeSelect("")
        console.log(selected)
        await onChangeSelect(e.target.value)
        console.log(selected)
    }


    return(
    <section>
      <div className="row_2">
        <h2 className="section-heading">OUR FLEET</h2>
      </div>
      <div className='duration-container'>
        <h1>Duration</h1>
        <select onChange={chageValue}>
            <option value="Hourly" selected={true}>Hourly</option>
            <option value="days7">7 days</option>
            <option value='days15'>15 days</option>
            <option value="month1">1 month</option>
            <option value="month3">3 month</option>
        </select>
      </div>
      <div className="row">
      {bikeData.map((each) =>{
        const each_vaulue = each[selected]
        const each_name = each.name
        return <li key={each_name} className='column'>
            <div className="card">
            <h3>{each_name}</h3>
            <div className="icon-wrapper">
                <img alt='logo' src={each.src} className='bike_logo'/>
            </div>
            <p>
             {each_vaulue}
            </p>
            <button type='button' className='book_now_button'>BOOK NOW</button>
          </div>
        </li>
      })}
      </div>
      <p className='extra_devices_message'>*All prices are exlusive of taxes and fuel. Images used for representation purposes only, actual color may vary.</p>
      <p className='small_devices_message'>*All prices are exlusive of taxes and fuel. <br />*Images used for representation purposes only, actual color may vary.</p>
    </section>
    )
}

export default Feelit