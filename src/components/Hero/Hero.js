import React from 'react';
import Grid from '../Grid/Grid';


const Hero = () => {
    return (
        <div>


            <div className='min-h-[900px] w-full flex flex-col '>
                <div className=' hero-bottom h-[574px] mt-auto w-full z-30  pl-[5vw]'>
                    <div className='max-w-[430px]'>
                        <h3 className='text-[40px] font-bold mb-3 mt-24'>
                            Overview
                        </h3>
                        <p className='text-xl'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>


                </div>
            </div>
            <Grid />

        </div>
    );
};

export default Hero;