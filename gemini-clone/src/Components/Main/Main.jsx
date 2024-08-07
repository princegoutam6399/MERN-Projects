import React from 'react'
import { assets } from '../../assets/assets'
import './Main.css'

const Main = () => {
  return (
        <div className="main">
            <div className="main-nav position-fixed ">
                <p>Gemini</p>
                <img src={assets.user_icon} className=""  style={{width:"40px",height:"40px",borderRadius:"50%"}}/>
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Dev</span></p>
                    <p>How can I help you today ?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quaerat!</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quaerat!</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quaerat!</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quaerat!</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Main