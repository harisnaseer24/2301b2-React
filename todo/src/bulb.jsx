import React, { useState } from 'react'
import onBulb from "./assets/on.png"
import offBulb from "./assets/off.png"

const Bulb = () => {
    const [isOn, setIsOn] = useState(true);
    return (
        <div className='container '>
            <p>The Bulb is { isOn ? "On": "Off"}</p>
            {/* <button onClick={()=> {setIsOn(isOn? false : true)}}>Swtch Build</button> */}
            <button className="btn btn-primary" onClick={() => { setIsOn(!isOn) }}>ON/ OFF </button>
            {/* <button className="btn btn-primary" onClick={() => { setIsOn(false) }}>OFF</button> */}
            {isOn ?
                <div className='img-container'>
                    <img src={onBulb} alt="" height={200}/>
                </div>
                :
                <div className='img-container'>
                    <img src={offBulb} alt="" height={200}/>
                </div>
            }
        </div>
    )
}

export default Bulb