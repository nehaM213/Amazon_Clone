import React from 'react';
import "../styles/Home.css"
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img className='home__image' src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61+Om+g+8SL._SX3000_.jpg" alt=""></img>
        
            <div className="home__row">
                <Product id={1} title="SANDISK CRUZER BLADE SDC50 USB 2.0 PENDRIVE(16GB)PACK OF 5" price={1425} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41r9HAJFJaL.jpg" rating={5} />
                <Product id={2} title="Pigeon Kessel Multipurpose Kettle (12173) 1.2 litres with Stainless Steel Body, used for boiling Water and milk, Tea, Coffee, Oats, Noodles, Soup etc. 600 Watt (Black & Silver)" price={899}image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41orhoQwtGL._SX300_SY300_QL70_FMwebp_.jpg" rating={4}/>        
            </div>
            <div className="home__row">
                <Product id={3} title="Face Mask With Nose Clip (Black) For Men & Women (100)" price={299} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71L8zRAURcL._SX522_.jpg" rating={4}/>
                <Product id={4} title="Eufy Genie Wi-Fi Smart Speaker with Amazon Alexa" price={1999} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71QukIod+-L._SX679_.jpg" rating={3}/>
                <Product  id={5} title="Apple 2022 11-inch iPad Pro (Wi-Fi, 256GB) - Space Grey (4th Generation)" price={84900} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81gC7frRJyL._SX679_.jpg" rating={4}/>
            </div>
            <div className="home__row">
                <Product id={6} title="Atomberg MG 1 All-in-One Mixer Grinder with 4 Jars | Chopper Jar Inclusive | 4 Speed Control Powerful BLDC Motor with LED Indicators (Red Wine)" price={7699} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81ye-5qDWWL._SX679_.jpg" rating={4}/>
            </div>
        </div>
    </div>
  )
}

export default Home