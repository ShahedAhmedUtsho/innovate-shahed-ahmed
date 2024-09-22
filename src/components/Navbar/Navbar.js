
import React from 'react';
import SearchBar from './SearchBar';
import Items from './Items';

// this component will be import in app > layout.js
const Navbar = () => {




    return (
        <div
            className='w-full min-h-16 lg:min-h-24 bg-[#363636] grid grid-cols-12 items-center justify-between px-[5vw]  '>
            <div className=' col-span-6  h-full'>
                <Items />
            </div>







            <div className=' col-span-6  h-full flex w-full justify-end items-center '>
                <SearchBar />


            </div>

        </div>
    );
};

export default Navbar;