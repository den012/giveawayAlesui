import React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';

import Confetti from 'react-confetti';
import Gift from '../assets/gift.png';

const Confeti = () => {
    const { width, height } = useWindowSize();
    return (
        <div>
            <div className="w-auto h-96 flex justify-center items-center"> 
                <div className="flex flex-col items-center justify-center z-index-0">
                    <h1 className="text-gray-100 bg-slate-800 p-3 rounded-md mb-2 text-sm">Ends joi 8th, 3088 @13:13am EST</h1>
                    <h1 className="text-gray-100 uppercase bg-red-600 p-5 px-10 text-4xl font-bold pyramid-shape mb-4">Giveaway Lessi05yt</h1>

                    <div className="flex flex-row items-center">
                        {/* <h1>giftt</h1> */}
                        <img src={Gift} alt="gift" className="w-32 h-32 mr-10"/>
                        <h1 className="bg-green-700 text-2xl p-2 rounded-md rotate-[-10deg] font-bold">50$ CS2 SKIN</h1>
                    </div>
                </div>

                
                <Confetti
                className="z-index-50" 
                width={width} 
                height={height}
                numberOfPieces={100}
                opacity={0.8}
                />
            </div>
        </div>
    )
}

export default Confeti;