import React from 'react';
import ContactInfo from './ContactInfo.js'
import contact from '../data/contact.json'


export default function Contact(){
  return (
    <div className="contact container-fluid">
      <div className="contact-title">Contact</div>
      <div className="contact-content">
        <div className="row justify-content-center">
          {contact.contact.filter(info => info.method).map(info => (
              <ContactInfo {...info}/>
          ))}
        </div>
      </div>
    </div>
  )
}
