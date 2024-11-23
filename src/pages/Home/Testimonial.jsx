import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialCard";
import useAuth from "../../CustomHooks/useAuth";
import { useEffect, useState } from "react";
import axios from 'axios';


const Testimonial = () => {

    const { user, loading } = useAuth()
    // console.log(user.email);

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReview = async () => {
            const res = await axios.get(`http://localhost:5000/reviews`)
            // console.log(res.data);
            setReviews(res.data)


        };
        fetchReview()
    }, [loading]);


    return (

       <div className="my-10 ">
            <h1 className="text-2xl font-bold text-center my-10">Voices of Satisfaction</h1>
         <TestimonialCard reviews={reviews}></TestimonialCard>
       </div>

        // <Marquee pauseOnHover={true} speed={80}>
        //     {
        //         reviews.map((review)=>(
        //             <TestimonialCard key={review._id} review={review}></TestimonialCard>
        //         ))
        //     }
            
        // </Marquee>
    );
};

export default Testimonial;