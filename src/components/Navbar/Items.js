import React from 'react';
import { ChevronDown, Menu, Search } from 'lucide-react';
const Items = () => {

    const navItems = [
        {
            title: "Home",
            href: "/",
            dropdown: null,
        },
        {
            title: "Event",
            href: "/events",
            dropdown: [
                {
                    title: "Upcoming Events",
                    href: "/events/upcoming",
                },
                {
                    title: "Past Events",
                    href: "/events/past",
                },
                {
                    title: "Event Registration",
                    href: "/events/register",
                },
            ],
        },
        {
            title: "Contact",
            href: "/contact",
            dropdown: null,
        },
        {
            title: "Blog",
            href: "/blog",
            dropdown: [
                {
                    title: "Latest Posts",
                    href: "/blog/latest",
                },
                {
                    title: "Categories",
                    href: "/blog/categories",
                },
                {
                    title: "About the Author",
                    href: "/blog/about",
                },
            ],
        },
    ];





    return (

        <div className='w-full h-full flex items-center'>
            <ul className=' text-white hidden lg:flex w-full lg:gap-[6vw] h-full items-center'>
                {
                    navItems.map((item, index) => {
                        return (<li className='NavItem capitalize text-base justify-center items-center flex gap-2 '>{item.title}  <ChevronDown size={16} />  </li>)
                    })
                }
            </ul>
            <Menu className=' text-white lg:hidden' />
        </div>
    );
};

export default Items;