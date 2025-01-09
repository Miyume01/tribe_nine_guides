import React from 'react';
import { Outlet } from "react-router-dom";
import Foot from './foot';
import Head from './head';

function Layout() {
    return(
        <div className="flex flex-col min-h-screen w-full">
            <Head />
            <div className='flex-grow flex flex-col justify-center items-center font-roboto'>
                <Outlet />
            </div>
            <Foot />
        </div>
        )
}

export default Layout