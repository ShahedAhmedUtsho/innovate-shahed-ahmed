import React from 'react';

const Grid = () => {
    return (
        <div >
           
        <div className='min-h-[700px] w-full  relative overflow-hidden flex flex-col items-center justify-center'>

           <div className='h-[100vw] -mt-[100vw] w-[150vw] -z-40 rounded-b-[150%] bg-[#6BE6A8]'>

           </div>
           
        </div>
        <div className=' w-full   h-[700px] -mt-[44vw] z-50  flex lg:flex-row flex-col   '>





            <div className='  flex w-full    px-[5vw] gap-5  h-[600px] '>


                <div className='    flex flex-col gap-5 '>
                    <span className='   w-[430px] min-h-[420px] border-2 border-black rounded-[30px]  '>

                    </span>
                    <div className=' flex gap-4 2 h-full mt-auto'>
                   
<span className='border-2 border-black rounded-[30px] h-32 w-32'>1</span>
<span className='border-2 border-black rounded-[30px] h-32 w-32'>1</span>
<span className='border-2 border-black rounded-[30px] h-32 w-32'>1</span>
                    </div>
                </div>



                <div className='  w-full flex flex-col gap-4'> 
<span className='border-2 border-black rounded-[30px] h-32 w-32'>1</span>
<span className='border-2 border-black rounded-[30px] h-32 w-32'>1</span>
<span className='border-2 border-black rounded-[30px] h-32 w-32'>1</span>
<span className='border-2 border-black rounded-[30px] h-32 w-32'>1</span>

                </div>

            </div>



            <div className=' w-full'>
                
            </div>
        
           
           </div>
        </div>
    );
};

export default Grid;