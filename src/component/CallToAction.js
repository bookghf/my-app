import React from 'react'
import './CallToAction.css'
import {FiCode} from 'react-icons/fi'

function CallToAction() {
  return (
    <div className='cta-bg'>
        <div className='overlay'></div>
        <div className='container'>
            <div className='cta-text'>
                <FiCode className='FiCode'/>
                <h2>We are React dev team</h2>
                <p>lorem dlkajfkldfj lkadfjdsk lkaj klsdfjkdsl; kafj skljsa ljsdalk jlkjdkf djklfjeio kslf eij ksln klejwi jdkslj iwej ksdn lweij fidnsklfnewklj klsddn lkwej ildsnkl nkwelj klk.</p>
                <a href='#' className='cta-btn'>get to know us</a>
            </div>
        </div>
    </div>
  )
}

export default CallToAction