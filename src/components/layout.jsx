import React from 'react';
import { Outlet } from "react-router-dom";
import Foot from './foot';
import Head from './head';

function Layout() {
    return(
        <div className="flex flex-col w-screen mt-16 min-h-dvh relative">
            <Head />
            <div className='flex-grow flex flex-col justify-center items-center font-pixelify w-full z-[12]'>
                <Outlet />
            </div>
            <Foot />
        </div>
        )
}

export default Layout