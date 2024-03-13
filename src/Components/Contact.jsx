import React from 'react';
import { iconInstagram } from '../icons/InstIcon';
import { iconWhatSapp } from '../icons/WhatSIcon';

function Contact() {


  return (
    <footer>
    <h2 className='contact-h2'>Contact</h2>

    <div className='contact-block'>
      <div className='contacts-one'>
        <div className='contact-first-block'>
          <p className='contact-p'>Phone</p>
          <h3 className='contact-h3'>+49 999 999 99 99</h3>
        </div>
        
        <div className='contact-second-block socials'>
          <p className='contact-p'>Socials</p>
          <div className='contact-icon'>
            <button className='cont-icon'>{iconInstagram}</button>
            <button className='cont-icon'>{iconWhatSapp}</button>
          </div>
        </div>
      </div>

      <div className='contacts-two'>
        <div className='contact-first-block'>
          <p className='contact-p'>Address</p>
          <h3 className='contact-h3'>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</h3>
        </div>
        
        <div className='contact-second-block'>
          <p className='contact-p'>Working Hours</p>
          <h3 className='contact-h3'>24 hours a day</h3>
        </div>
      </div>
    </div>

    <div className="mapStyle">
      <iframe className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510.50899197891505!2d13.375319817128796!3d52.508032797832186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sgr!4v1700724981306!5m2!1sru!2sgr"
        title="tel-run"
      ></iframe>
    </div>
    </footer>

  )
}

export default Contact;