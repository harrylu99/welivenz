import React from 'react'
import './resources/styles.css'
import { Element } from 'react-scroll'

import Header from './components/Header'
import Featured from './components/Featured'
import VenueInfor from './components/VenueInfor'
import Highlights from './components/Highlights'
import Guests from './components/Guests'
import Location from './components/Location'
import Footer from './components/Footer'
import Recording from './components/Recording'


export default function App() {
  return (
    <div>
      <Header/>
      <Featured/>

      <Element name="highlights">
        <Highlights/>
      </Element>

      <Element name="guests">
        <Guests/>
      </Element>

      <Element name="recording">
        <Recording/>
      </Element>

      <Element name="venueinfor">
        <VenueInfor/>
      </Element>

      <Element name="location">
        <Location/>
      </Element>

      <Footer/>

    </div>
  );
}

