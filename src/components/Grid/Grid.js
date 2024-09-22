import React from 'react';

const Grid = () => {
    return (
        <div >
       
        <div className=' w-full   h-[700px]  z-50  flex lg:flex-row flex-col  cercle-background ' >





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