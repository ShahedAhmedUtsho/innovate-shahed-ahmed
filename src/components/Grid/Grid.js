import React from 'react';

const Grid = () => {
    return (
        <div >
       
        <div className=' w-full   z-50  flex lg:flex-row flex-col  cercle-background ' >





            <div className='  flex w-full    px-[5vw] gap-5  h-[600px] '>


                <div className='    flex flex-col gap-5 '>
                    <span className='   w-[430px] min-h-[420px] border-2 border-black rounded-[30px]  '>

                    </span>
                    <div className=' flex gap-4 2 h-full mt-auto'>
                   
<span className='border-2 border-black rounded-[30px] h-32 w-32'></span>
<span className='border-2 border-black rounded-[30px] h-32 w-32'></span>
<span className='border-2 border-black rounded-[30px] h-32 w-32'></span>
                    </div>
                </div>



                <div className='  w-full flex flex-col gap-4'> 
<span className='border-2 border-black rounded-[30px] h-32 w-32'></span>
<span className='border-2 border-black rounded-[30px] h-32 w-32'></span>
<span className='border-2 border-black rounded-[30px] h-32 w-32'></span>
<span className='border-2 border-black rounded-[30px] h-32 w-32'></span>

                </div>

            </div>



            <div className=' w-full flex  items-center'>
                
            <div className='max-w-[430px]'>
                        <h3 className='text-[40px] font-bold mb-3 '>
                        Collection Featured
                        </h3>
                        <p className='text-2xl '>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
            </div>
        
           
           </div>
        </div>
    );
};

export default Grid;