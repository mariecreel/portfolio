import React from 'react';
import ContactInfo from './ContactInfo.js'
import contact from '../data/contact.json'


export default function Contact(){
  return (
    <div className="contact container-fluid">
      <div className="contact-title">Contact</div>
      <div className="contact-content">
        <div className="row justify-content-center">
          {/*
            because object contact contains a list of objects, have to use
            filter to select objects that match a certain filter (here, we
            test whether a method attribute exists in the object) and then
            we can spread that object and use it as props. map doesn't work
            when we're using objects this way, so we have to use filter. 
          */}
          {contact.contact.filter(info => info.method).map(info => (
              <ContactInfo {...info}/>
          ))}
        </div>
      </div>
    </div>
  )
}
