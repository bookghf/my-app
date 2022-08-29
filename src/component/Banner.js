import React from 'react'
import './Banner.css'

let bannerData = {
    title: "React landing page",
    desc: "book tanawin jitpong tae dsaklfjs dlkjdsa fklsdfakjdsfjlkas lk jfkdlafjdk ja kdlsfjldkjfldsk jldsa fkldjflkdsajf ldjfa lsjflkdsjf kldjsfdlkfj ldksjfsldfepojsk kltjioklj sohskl jid jsklejlk"
}

function Banner() {
  return (
    <div className='banner-bg'>
        <div className='container'>
            <div className='banner-con'>
                <div className='banner-text'>
                    <h1>{bannerData.title}</h1>
                    <p>{bannerData.desc}</p>
                    <a href='#' className='banner-btn'>Learn More</a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Banner