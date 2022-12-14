import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';

const DashBoardLayout = () => {
    let activeStyle = {
        textDecoration: "underline",
        color: '#7c3aed'

    };
    return (
        <div className=''>
            <Header></Header>

            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

            <div className="drawer drawer-mobile ">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>



                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content bg-lime-100 ">

                        <button>

                            <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn mr-2">
                                <NavLink to="/dashboard"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <button className="py-3">DASHBOARD</button>
                                </NavLink>
                            </h1>
                        </button>

                        <button>
                            <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn">
                                <NavLink to="/dashboard/myreviews"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <button className="py-3">MY-REVIEWS</button>
                                </NavLink>
                            </h1>
                        </button>
                        <button>
                            <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn">
                                <NavLink to="/dashboard/addservice"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <button className="py-3">ADD-ITEM</button>
                                </NavLink>
                            </h1>
                        </button>

                        <button>
                            <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn">
                                <NavLink to="/dashboard/myOrder"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <button className="py-3">MY-ORDER</button>
                                </NavLink>
                            </h1>
                        </button>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;