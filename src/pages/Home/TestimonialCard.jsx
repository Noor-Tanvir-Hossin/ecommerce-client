import React from 'react';
import Marquee from "react-fast-marquee";


const TestimonialCard = ({ reviews }) => {
    return (
        <section className="bg-gray-50 py-12 rounded-md">
            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    What Our Customers Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Marquee pauseOnHover={true} speed={80}>
                        {
                            reviews.map((review) => (
                                
                                <div className="bg-white p-6 rounded-lg shadow-md" key={review._id} >
                                    <p className="text-gray-600 italic">
                                        {review.comment}
                                    </p>
                                    <div className="flex items-center mt-4">
                                        <img
                                            className="w-12 h-12 rounded-full"
                                            src="https://randomuser.me/api/portraits/women/68.jpg"
                                            alt="Customer"
                                        />
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-800">
                                                Sarah Johnson
                                            </p>
                                            <p className="text-sm text-gray-500">Verified Customer</p>
                                        </div>
                                    </div>
                                </div>
                                
                            ))
                        }

                    </Marquee>

                    

                    
                </div>
                </div> */}
                <div>
      <Marquee speed={50} pauseOnHover={true} gradient={true}>
        {reviews.map((review) => (
           <div className="bg-white p-6 rounded-lg shadow-md mr-5 inline-block w-72 h-36" key={review._id} >
           <p className="text-gray-600 italic">
               {review.comment}
           </p>
           <div className="flex items-center mt-4">
               <img
                   className="w-12 h-12 object-cover rounded-full"
                   src={review.photo}
                   alt="Customer"
               />
               <div className="ml-3">
                   <p className="text-sm font-medium text-gray-800">
                       {review.name}
                   </p>
                   <p className="text-sm text-gray-500">Verified Customer</p>
               </div>
           </div>
       </div>
        ))}
      </Marquee>
    </div>
        </section>
    );
};

export default TestimonialCard;