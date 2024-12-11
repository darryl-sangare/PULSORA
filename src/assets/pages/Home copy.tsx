import React from 'react';


const Home:React.FC = () => {
    return(
        <>
            <div className='flex justify-center sm:relative lg:bg-blue-500  sm:bg-red-600 py-10' >

               
                <img className='w-3/6  lg:w-2/6' src="src/assets/images/playerhome.png" alt="" />
                <div className='text-center    sm:absolute  sm:bottom-0  ' >
                    <h1 className='text-4xl font-bold ' >PULSORA</h1>
                    <h2 className='text-3xl font-semibold text-blue-900 ' >LOREM</h2>
                </div>

            </div>

            <div className=' my-20 text-center' >
                <button className='bg-blue-900 text-white font-semibold px-4 py-2 rounded-3xl'  >DECOUVRIR</button>
            </div>


            <div className='mx-auto w-5/6 text-center  p-5  my-10 rounded-2xl border-2 border-slate-300		bg-white   md:w-2/3   lg:w-1/3' >
                <p   className='text-center' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </>
    );
   
};

export default Home;