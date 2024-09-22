'use client'
import React from 'react';

const SearchBar = () => {
    const handleSearch = (e) => {
        e.preventDefault()
        const search = e.target.search.value;
        e.target.reset()
        alert(search)

    }
    return (
        <form onSubmit={handleSearch} className='lg:w-[18vw]  bg-white rounded-full h-8 lg:h-11  px-3 lg:px-5 lg:py-1 flex justify-between '>
            <input placeholder='Search' className=' lg:text-base text-sm focus:outline-none rounded-full w-full' name='search'></input>
            <button>
                <svg className='max-w-5 lg:max-w-none' xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
                    <path d="M30.625 31.125L25.5208 26.0208M24.7917 15.0833C24.7917 16.4239 24.5276 17.7514 24.0146 18.9899C23.5016 20.2284 22.7496 21.3538 21.8017 22.3017C20.8538 23.2496 19.7284 24.0016 18.4899 24.5146C17.2514 25.0276 15.9239 25.2917 14.5833 25.2917C13.2428 25.2917 11.9153 25.0276 10.6768 24.5146C9.43824 24.0016 8.31288 23.2496 7.36495 22.3017C6.41702 21.3538 5.66508 20.2284 5.15206 18.9899C4.63905 17.7514 4.375 16.4239 4.375 15.0833C4.375 12.3759 5.45052 9.77939 7.36495 7.86495C9.27939 5.95052 11.8759 4.875 14.5833 4.875C17.2908 4.875 19.8873 5.95052 21.8017 7.86495C23.7161 9.77939 24.7917 12.3759 24.7917 15.0833Z" stroke="black" stroke-width="3" stroke-linecap="round" />
                </svg>
            </button>

        </form>
    );
};

export default SearchBar;