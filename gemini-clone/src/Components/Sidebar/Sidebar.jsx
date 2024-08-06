import React from 'react'
import { assets } from '../../assets/assets'

const Sidebar = () => {

    

    return (
        <div className='sidebar-data bg-body-secondary w-25 mh-100' id="collapseSideBar">
            <div class="sidebar p-4 text-dark">
                <div class="sidebar-header" id="collapseSideBar" data-bs-toggle="collapse" >
                    <a href="/"><i class="fas fa-bars fs-4 text-dark"></i></a>
                </div>
                <div class="nav flex-column pt-4" style={{ fontSize: "14px" }}>
                    <button className='btn d-flex justify-content-around rounded-pill btn-outline-dark w-50' style={{ fontSize: "14px" }}>
                        <img src={assets.plus_icon} style={{ width: "15px" }} />
                         New Chat</button>
                    <p class="nav-item pt-4">Recent</p>
                    <a href="#" class="nav-item mb-3 text-decoration-none text-dark"><img src={assets.message_icon} style={{ width: "25px" }} /> Youtube Music Limitations</a>
                    <a href="#" class="nav-item mb-3 text-decoration-none text-dark"><img src={assets.message_icon} style={{ width: "25px" }} /> Fix Image Slider Error</a>
                    <a href="#" class="nav-item mb-3 text-decoration-none text-dark"><img src={assets.message_icon} style={{ width: "25px" }} /> Finding Longest Repeated S...</a>
                    <a href="#" class="nav-item mb-3 text-decoration-none text-dark"><img src={assets.message_icon} style={{ width: "25px" }} /> YouTube Vlog Channel Nam...</a>
                    <a href="#" class="nav-item mb-3 text-decoration-none text-dark"><img src={assets.message_icon} style={{ width: "25px" }} /> How to get a Microsoft Offi...</a>
                    <p class="show-more nav-item"><i class="fas fa-chevron-down"></i> Show more</p>
                    <a href="/" class="nav-item mb-2 text-decoration-none text-dark"><i class="fas fa-question-circle"></i> Help</a>
                    <a href="/" class="nav-item mb-2 text-decoration-none text-dark"><i class="fas fa-history"></i> Activity</a>
                    <a href="/" class="nav-item mb-2 text-decoration-none text-dark"><i class="fas fa-cog"></i> Settings</a>
                </div>
                <div class="footer mt-3" style={{ fontSize: "13px" }}>
                    <p>Uttar Pradesh, India</p>
                    <a href="/" className='text-decoration-none'>From your IP address • Update location</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar