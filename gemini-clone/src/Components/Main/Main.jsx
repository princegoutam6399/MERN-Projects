import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../Context/Context'

const Main = () => {


    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    return (
        <div className="main">
            <div className="container">
                <div className="main-nav position-fixed ">
                    <p>Gemini</p>
                    <img src={assets.user_icon} className="" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                </div>
                <div className="main-container">

                    {!showResult ? <>


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
                        <div className="main-bottom">
                            <div className="search-box">
                                <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here...' />
                                <div>
                                    <img src={assets.gallery_icon} alt="" />
                                    <img src={assets.mic_icon} alt="" />
                                    <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                                </div>
                            </div>
                            <p className="bottom-info">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </> : <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />{
                                loading?<div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                :<p dangerouslySetInnerHTML={{ __html: resultData }}>{resultData}</p>
                            }
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Main