import { useState } from 'react'
import './service.css'





export const Service = () => {

    const item = {
        h2: "Fund Your Account Make Transfer, Pay Bills",
        pg: "Live life on your own terms! Add money to your U~D wallet and transfer to other bank accounts for free. Enjoy bonuses on airtime & data top-ups and fast bill payments at no extra charge.",
        id: 1, src: 'online5.jpg',
    }

    const item2 = {
        h2: "Flexible Savings",
        pg: "Need a better way to save? Enjoy up to 15% annual interest paid daily when you save with U~D Bank and spend without paying withdrawal charges.",
        id: 1, src: 'online4.jpg',

    }


    return (
        <div className=" service">

            <h1>Our Services</h1>


            <div className='maincontainer'>
                <div className="img_container">
                    <img src={item.src} key={item.id} />
                </div>
                <div className='description'>
                    <h2 key={item.id}>{item.h2}</h2>
                    <p key={item.id}>{item.pg}</p>
                </div>
            </div>

            <div className='maincontainer'>
                <div className='description'>
                    <h2 key={item2.id}>{item2.h2}</h2>
                    <p key={item2.id}>{item2.pg}</p>
                </div>
                <div className="img_container">
                    <img src={item2.src} key={item2.id} />

                </div>
            </div>
            <marquee  ><p>Powered by BlueRidge Microfinance Bank.</p></marquee>







        </div>
    )
}