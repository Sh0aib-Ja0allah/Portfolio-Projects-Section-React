import React from 'react'
import '../Footer/Footer.css'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'


function Footer() {
    return (
    <div className='Footer'>
        <div className="FooterChild FooterName">
            Shoaib Jadallah
        </div>
        <div className="FooterChild FooterReach">
            For more information reach me in one of this links :
        </div>
        <div className="FooterChild FooterIcons">
            <a href='https://github.com/Sh0aib-Ja0allah' className='IconLink'><img src={github} alt="Github Icon" className="icon" /></a>
            <a href='https://www.facebook.com/profile.php?id=100082226078414' className='IconLink'><img src={facebook} alt="Facebook Icon" className="icon" /></a>
            <a href='https://www.instagram.com/shoaib_ja0allah/' className='IconLink'><img src={instagram} alt="Instagram Icon" className="icon" /></a>
            <a href='https://ps.linkedin.com/in/shoaib-jadallah-0a1595230' className='IconLink'><img src={linkedin} alt="LinkedIn Icon" className="icon" /></a>
        </div>
        <div className="FooterChild FooterRights">
            <span>&copy;</span>All rights reserved.
        </div>
        <div className="FooterChild FooterMade">
            Made with &#129293; By: Shoaib Jadallah.
        </div>
    </div>
    )
}

export default Footer
