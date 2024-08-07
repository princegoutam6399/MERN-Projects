import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const Sidebar = () => {

    const [collapse, setCollapse] = useState(false);

    return (
        <div className='sidebar-data position-fixed'>
            <div class="sidebar bg-danger-subtle d-inline-flex justify-content-between flex-column min-vh-100  p-4 text-dark">
                <div className="sidebar-top">
                    <div class="sidebar-menu" data-bs-toggle="collapse" >
                        <img onClick={() => setCollapse(prev => !prev)} src={assets.menu_icon} alt="" style={{ width: "25px" }} />
                    </div>
                    <div class="nav flex-column pt-4">
                        <div className="new-chat d-flex">
                            <img src={assets.plus_icon}  style={{ width: "20px",height:"30px" }}/>
                            {collapse ? <p className='ms-2 mt-1'>New Chat</p> : null}
                        </div>
                        {collapse ?
                            <div className="recent mb-2">
                                <p class="nav-item pt-1">Recent</p>
                                <a href="#" class="nav-item mb-3 text-decoration-none text-dark"><img src={assets.message_icon} style={{ width: "25px" }} /> Youtube Music Limitations</a>
                            </div>
                            : null}
                    </div>
                </div>
                
                <div className="bottom">
                    <div className="bottom-item d-flex mb-1">
                        <a href="/" class="nav-item text-decoration-none me-2 text-dark"><i class="fas fa-question-circle"></i> </a>
                        {collapse ? <p>Help</p> : null}
                    </div>
                    <div className="bottom-item d-flex mb-1">
                        <a href="/" class="nav-item text-decoration-none me-2 text-dark"><i class="fas fa-history"></i></a>
                        {collapse ? <p>Activity</p> : null}
                    </div>
                    <div className="bottom-item d-flex mb-1">
                        <a href="/" class="nav-item text-decoration-none me-2 text-dark"><i class="fas fa-cog"></i> </a>
                        {collapse ? <p>Settings</p> : null}
                    </div>
                </div>
            </div>
            {/* <div class="footer mt-3" style={{ fontSize: "13px" }}>
                    <p>Uttar Pradesh, India</p>
                    <a href="/" className='text-decoration-none'>From your IP address • Update location</a>
                </div> */}
        </div>
    )
}

export default Sidebar