// components/Layout.js
import Link from 'next/link';
import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Layout = () => {
    const [isSidebarHidden, setSidebarHidden] = useState(true);

    const toggleSidebar = () => {
        setSidebarHidden(!isSidebarHidden);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar isHidden={isSidebarHidden} />

            {/* Main Content */}
            <div className="flex-1 bg-gray-200">
                <nav className="bg-white border-b border-gray-300">
                    <div className="flex justify-between items-center px-9">
                        <button id="menuBtn" onClick={toggleSidebar}>
                            <i className="fas fa-bars  text-blue-500 text-lg"></i>
                        </button>

                        {/* Logo */}
                        <Link href="/home">
                        <div className="ml-1">
                            <img src="https://th.bing.com/th/id/OIP.x9engTBsXs4UrYmCB9VBEAHaEt?pid=ImgDet&rs=1" alt="logo" className="h-15 w-20 p-3" />
                        </div>
                        </Link>
                        {/* Notification and Profile Icons */}
                        <div className="space-x-4">
                            <button>
                                <i className="fas fa-bell text-blue-500 text-lg"></i>
                            </button>
                            <button>
                                <i className="fas fa-user text-blue-500 text-lg"></i>
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Main Page Content */}
                <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-2">
                    {/* Searchbar */}
                    <div className="bg-white rounded-full border-none p-3 mb-4 shadow-md">
                        <div className="flex items-center">
                            <i className="px-3 fas fa-search ml-1"></i>
                            <input type="text" placeholder="Search..." className="ml-3 focus:outline-none w-full"/>
                        </div>
                    </div>

                    {/* Content Below Searchbar */}
                    <div className="lg:flex gap-4 items-stretch">
                        {/* Caja Grande */}
                        <div className="bg-blue-500 text-white md:p-2 px-6 rounded-lg border text-white  mb-4 lg:mb-0 shadow-md lg:w-[35%]">
                            <div className="flex justify-center items-center space-x-5 h-full">
                                <div>
                                    <p>Principal</p>
                                    <h2 className="text-4xl font-bold text-white">50.365</h2>
                                    <p>25k tk</p>
                                </div>
                                
                                <i className="fas fa-wallet fa-4x"></i>

                                
                            </div>
                        </div>

                        {/* Caja Blanca */}
                        <div className="bg-blue-500 p-4 rounded-lg xs:mb-4 max-w-full shadow-md lg:w-[65%]">
                            <div className="flex flex-wrap justify-between h-full">
                                {/* Caja pequeña 1 */}
                                <div className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2  m-2">
                                    <i className="fas fa-hand-holding-usd text-white text-4xl"></i>
                                    <p className="text-white">Deposit</p>
                                </div>

                                {/* Caja pequeña 2 */}
                                <div className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2  m-2">
                                    <i className="fas fa-exchange-alt text-white text-4xl"></i>
                                    <p className="text-white">Transection</p>
                                </div>

                                {/* Caja pequeña 3 */}
                                <div className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2  m-2">
                                    <i className="fas fa-qrcode text-white text-4xl"></i>
                                    <p className="text-white">More</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabla */}
                    <div className="bg-white rounded-lg p-4 shadow-md my-4">
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 text-left border-b-2 w-full">
                                        <h2 className="text-ml font-bold text-gray-600">Transection</h2>
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                    <tr class="border-b w-full">
                        <td class="px-4 py-2 text-left align-top w-1/2">
                            <div>
                                <h2>Bank</h2>
                                <p>24/07/2023</p>
                            </div>
                        </td>
                        <td class="px-4 py-2 text-right text-cyan-500 w-1/2">
                            <p><span>15k</span></p>
                        </td>
                    </tr>
                    <tr class="border-b w-full">
                        <td class="px-4 py-2 text-left align-top w-1/2">
                            <div>
                                <h2>MTF</h2>
                                <p>24/06/2023</p>
                            </div>
                        </td>
                        <td class="px-4 py-2 text-right text-cyan-500 w-1/2">
                            <p><span>15K</span></p>
                        </td>
                    </tr>
                    <tr class="border-b w-full">
                        <td class="px-4 py-2 text-left align-top w-1/2">
                            <div>
                                <h2>Bank</h2>
                                <p>02/05/2023</p>
                            </div>
                        </td>
                        <td class="px-4 py-2 text-right text-cyan-500 w-1/2">
                            <p><span>50K</span></p>
                        </td>
                    </tr>
                </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
