import React from 'react';

const FAQ = () => {
    return (
        <div className='flex flex-col gap-2'> 
             <h1 className='text-2xl text-center font-bold'>Got Questions? We’ve Got Answers!</h1>
            <div className="collapse collapse-arrow bg-base-100">
                <input type="radio" name="my-accordion-2"  />
                <div className="collapse-title text-xl font-medium">
                    What is your return policy?
                </div>
                <div className="collapse-content">
                    <p>
                        We accept returns within 30 days of purchase. Items must be unused and in their
                        original packaging. Visit our Returns & Refunds page for more details.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    How long does shipping take?
                </div>
                <div className="collapse-content">
                    <p>
                        Standard shipping typically takes 5-7 business days. Expedited shipping options
                        are available at checkout for faster delivery.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Do you ship internationally?
                </div>
                <div className="collapse-content">
                    <p>
                        Yes, we ship to most countries worldwide. Shipping costs and delivery times vary
                        depending on the destination.
                    </p>
                </div>
            </div>
            
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    How can I track my order?
                </div>
                <div className="collapse-content">
                    <p>
                        Once your order is shipped, you will receive a tracking number via email. Use this number
                        to track your order on our website or the carrier's site.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    What if I receive a damaged or defective product?
                </div>
                <div className="collapse-content">
                    <p>
                        If you receive a damaged or defective item, contact our support team within 48 hours of
                        receiving it. We will arrange a replacement or refund promptly.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default FAQ;