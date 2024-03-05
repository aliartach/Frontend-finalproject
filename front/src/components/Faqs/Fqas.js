import React from 'react'
import "./Fqas.css"

const Fqas = () => {
  return (
    <div class="faq-container">
        <h2>Frequently Asked Questions</h2>

        <div class="faq-item">
            <div class="faq-question">1. What is the shelf life of your chocolates?</div>
            <div class="faq-answer">Our chocolates typically have a shelf life of 6 to 12 months when stored in a cool, dry place.</div>
        </div>

        <div class="faq-item">
            <div class="faq-question">2. Do you offer international shipping?</div>
            <div class="faq-answer">Yes, we offer international shipping to select countries. Please check our shipping policies for more information.</div>
        </div>

        <div class="faq-item">
            <div class="faq-question">3. Can I customize my chocolate order?</div>
            <div class="faq-answer">Currently, we do not offer customization options for individual orders. However, we occasionally offer special customization options for corporate or bulk orders.</div>
        </div>

        <div class="faq-item">
            <div class="faq-question">4. What payment methods do you accept?</div>
            <div class="faq-answer">We accept major credit cards (Visa, Mastercard, American Express) as well as PayPal for online orders. In-store purchases may also be made using cash or debit/credit cards.</div>
        </div>

    </div>
  )
}

export default Fqas
