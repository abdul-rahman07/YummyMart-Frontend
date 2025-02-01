import React from 'react';
import Accordion from '../components/Accordian';

const SellerDetails = () => {

    const data = {
        name: 'Syed Abdul Rahman',
        seller_type: 'dealer', // show these in dropdown - dealer, distributor, manufacturer, wholesaler, retailer
        image_url: 'Not uploaded yet', // upload store image
        address: 'Banglore, karnataka',
        rating: '5', // google rating (optional)
        reviews: 'Awesome', // google reviews (optional)
        pancard: '121212212',
        pancard_url: 'Not uploaded yet',
        gstnumber:  '22ABCDE1234F1Z5', // read-only (keep the same as entered GST number)
        gstnumber_url: 'Not uploaded yet',
        mobile: "3235436541", // read-only (keep the same as user's phone number)
        fssai_license_number: '1212121212',
        fssai_cert_url: 'Not uploaded yet',
        msme_license_number:'Not uploaded yet',
        msme_cert_url: 'Not uploaded yet',
        dealer_cert_url: 'Not uploaded yet', // show only if seller_type is dealer
        distributor_cert_url: 'Not uploaded yet', // show only if seller_type is distributor
      }

  return <>
   <Accordion data={data}/>
  </>
};


export default SellerDetails;
