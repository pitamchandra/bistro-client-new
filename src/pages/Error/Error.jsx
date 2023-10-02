import Lottie from "react-lottie";
import { Link } from "react-router-dom";

import animationData from '../../assets/animation_ln80bzsv.json'


const Error = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
      };
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="w-64 mb-8">
                    <Lottie options={defaultOptions} height={200} width={200} />
                </div>
                <div className="text-center mb-8">
                    <p className="text-lg text-gray-700 mb-4">Page not Found. Something went wrong..............</p>
                </div>
                
                <Link
                    to="/" // Replace with the path to your home page
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-lg"
                >
                    Back to Home
                </Link>
            </div>
        </>
    );
};

export default Error;