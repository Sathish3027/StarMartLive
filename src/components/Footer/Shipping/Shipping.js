import React from 'react';
import './Shipping.css';
import Footer from '../Footer';
import {AiFillPlusSquare,AiFillMinusSquare} from 'react-icons/ai';

function Shipping(){
    return(
        <>
        <div>
        <div className='heading-title'>
        <h1 className='heading-title-content'>shipping</h1>
      </div></div>
<div className='accordion-container'>
    
    <div className='accordion' id='accordion-top'>
        <div className='accordion-item' id='question1'>
            <a className='accordion-link' href='#question1'>Why does the delivery 
            date not correspond to the delivery timeline of X-Y business days? 
            <AiFillPlusSquare className='icon-plus'/> <AiFillMinusSquare className='icon-minus'/></a>
        <div className='accordion-answer'>
            <p className='accordion-content'>It is possible that the Seller or our courier partners have a 
            holiday between the day you’re placed your order and the date of delivery, which is based on the 
            timelines shown on the product page. In this case, we add a day to the estimated date. 
            Some courier partners and Sellers do not work on Sundays and this is factored in to the 
            delivery dates.</p>
        </div>
        </div>

        <div className='accordion-item' id='question2'>
            <a className='accordion-link' href='#question2'>Why does the estimated delivery time vary for each seller?
            <AiFillPlusSquare className='icon-plus'/> <AiFillMinusSquare className='icon-minus'/></a>
        <div className='accordion-answer'>
            <p className='accordion-content'>You have probably noticed varying estimated delivery times 
            for sellers of the product you are interested in. Delivery times are influenced by product 
            availability, geographic location of the Seller, your shipping destination and the courier 
            partner's time-to-deliver in your location.Please enter your default pin code on the 
            product page (you don't have to enter it every single time) to know more accurate delivery 
            times on the product page itself.</p>
        </div>
        </div>

        <div className='accordion-item' id='question3'>
            <a className='accordion-link' href='#question3'>What are the delivery charges?
            <AiFillPlusSquare className='icon-plus'/> <AiFillMinusSquare className='icon-minus'/></a>
        <div className='accordion-answer'>
            <p className='accordion-content'>Delivery charge varies with each Seller.<br/>

Sellers incur relatively higher shipping costs on low value items. In such cases, charging a nominal 
delivery charge helps them offset logistics costs. The delivery charge may be waived off by some Sellers, 
if you shop with them for a minimum predefined value.For example, seller WS Retail, which generally 
charges Rs 50 for delivery, provides free delivery on orders valued at Rs 500 or more. Please check 
with individual Sellers to understand what the delivery charges are.</p>
        </div>
        </div>

        <div className='accordion-item' id='question4'>
            <a className='accordion-link' href='#question4'> Are there any hidden costs (sales tax, octroi etc) on items sold by Sellers on TIC?
            <AiFillPlusSquare className='icon-plus'/> <AiFillMinusSquare className='icon-minus'/></a>
        <div className='accordion-answer'>
            <p className='accordion-content'>There are NO hidden charges when you make a purchase on TIC. 
            List prices are final and all-inclusive. The price you see on the product page is exactly what 
            you would pay.Delivery charges are not hidden charges and are charged (if at all) extra 
            depending on the Seller's shipping policy.</p>
        </div>
        </div>
          
        <div className='accordion-item' id='question5'>
            <a className='accordion-link' href='#question5'> Seller does not/cannot ship to my area. Why?
            <AiFillPlusSquare className='icon-plus'/> <AiFillMinusSquare className='icon-minus'/></a>
        <div className='accordion-answer'>
            <p className='accordion-content'>Please enter your pincode on the product page 
            (you don't have to enter it every single time) to know whether the product can 
            be delivered to your location.If you haven't provided your pincode until the 
            checkout stage, the pincode in your shipping address will be used to check for serviceability.

Whether your location can be serviced or not depends on

Whether the Seller ships to your location

Legal restrictions, if any, in shipping particular products to your location

The availability of reliable courier partners in your location

At times Sellers prefer not to ship to certain locations. This is entirely at their discretion.</p>
        </div>
        </div>

        <div className='accordion-item' id='question6'>
            <a className='accordion-link' href='#question6'> What is the estimated delivery time?
            <AiFillPlusSquare className='icon-plus'/> <AiFillMinusSquare className='icon-minus'/></a>
        <div className='accordion-answer'>
            <p className='accordion-content'>Sellers generally procure and ship the items within the time specified on the product page. <br/>
            Business days exclude public holidays and Sundays.<br/>

Estimated delivery time depends on the following factors:<br/>

 The Seller offering the product<br/>

 Product's availability with the Seller<br/>

 The destination to which you want the order shipped to and location of the Seller.<br/>

'Pre-order' or 'Forthcoming'<br/>

Such items are expected to be released soon and can be pre-booked for you. 
The item will be shipped to you on the day of its official release launch and will 
reach you in 2 to 6 business days. The Pre-order duration varies from item to item. 
Once known, release time and date is mentioned. (Eg. 18th Jan, Feb 3rd week)<br/>

<b>'Out of Stock'</b><br/>

Currently, the item is not available for sale. Use the 'Notify Me' feature to know once it is 
available for purchase.<br/>

<b>'Imported'</b><br/>

Sometimes, items have to be sourced by Sellers from outside India. These items are mentioned as 'Imported' on the product page and can take at least 10 days or more to be delivered to you.<br/>

<b>'Back in Stock Soon'</b><br/>

The item is popular and is sold out. You can however 'book' an order for the product and it will be shipped according to the timelines mentioned by the Seller.<br/>

<b>'Temporarily Unavailable'</b><br/>

The product is currently out of stock and is not available for purchase. The product could to be in stock soon. Use the 'Notify Me' feature to know when it is available for purchase.<br/>

<b>'Permanently Discontinued'</b><br/>

This product is no longer available because it is obsolete and/or its production has been discontinued.<br/>

<b>‘Out of Print’</b><br/>

This product is not available because it is no longer being published and has been permanently discontinued.<br/>

<b>Does TIC deliver internationally?</b><br/>

As of now, TIC doesn't deliver items internationally. You will be able to make your purchases on our site from anywhere in the world with credit/debit cards issued in India and 21 other countries, but please ensure the delivery address is in India.</p>
        </div>
        </div>

        <div className='accordion-item' id='question7'>
            <a className='accordion-link' href='#question7'> Why is the COD option not offered in my location?
            <AiFillPlusSquare className='icon-plus'/> <AiFillMinusSquare className='icon-minus'/></a>
        <div className='accordion-answer'>
            <p className='accordion-content'>Availability of COD depends on the ability of our courier partner 
            servicing your location to accept cash as payment at the time of delivery.

Our courier partners have limits on the cash amount payable on delivery depending on the destination 
and your order value might have exceeded this limit. Please enter your pin code on the product page 
to check if COD is available in your location.</p>
        </div>
        </div>

        <div className='accordion-item' id='question8'>
            <a className='accordion-link' href='#question8'> I need to return an item, how do I arrange for a pick-up?
            <AiFillPlusSquare className='icon-plus'/> <AiFillMinusSquare className='icon-minus'/></a>
        <div className='accordion-answer'>
            <p className='accordion-content'>Returns are easy. Contact us to initiate a return. You will receive a call explaining the process, once you have initiated a return.<br/>

Wherever possible Logistics will facilitate the pick-up of the item. In case, the pick-up cannot be arranged through them, you can return the item through a third-party courier service. Return fees are borne by the Seller.<br/>

What do the different tags like "In Stock", "Available" mean?<br/>

<b>'In Stock'</b><br/>

For items listed as "In Stock", Sellers will mention the delivery time based on your location pincode (usually 2-3 business days, 4-5 business days or 4-6 business days in areas where standard courier service is available). For other areas, orders will be sent by Registered Post through the Indian Postal Service which may take 1-2 weeks depending on the location.<br/>

<b>'Available'</b><br/>

The Seller might not have the item in stock but can procure it when an order is placed for the item. The delivery time will depend on the estimated procurement time and the estimated shipping time to your location.</p>
        </div>
        </div>


    </div>
</div>

<div>
    <Footer />
</div>
</>
    );
}
export default Shipping