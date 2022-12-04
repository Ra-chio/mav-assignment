import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function EmpDetails() {
    const location = useLocation();

    return (
        <div className="max-w-screen min-h-screen flex flex-col justify-between items-center">
            <Header />

            <div className="w-5/6 lg:w-3/5 h-full flex flex-col items-center my-5 shadow-lg lg:flex-row lg:items-center lg:justify-evenly">
                <div className="my-5">
                    <img
                        src={location.state.img}
                        alt=""
                        className="bg-black w-80 shadow-md"
                    />
                </div>
                <div className="flex flex-col w-auto lg:w-3/5 px-5">
                    <ul className="flex py-2 border-b border-grey">
                        <li className="w-2/5 lg:w-1/3 font-bold text-lg lg:text-start flex justify-between">
                            <span>Name</span>
                            <span>:</span>
                        </li>
                        <li className="w-3/5 lg:2/3 text-lg ml-3">
                            {location.state.name}
                        </li>
                    </ul>
                    <ul className="flex py-2 border-b border-grey">
                        <li className="w-2/5 lg:w-1/3 font-bold text-lg lg:text-start flex justify-between">
                            <span>EIN</span>
                            <span>:</span>
                        </li>
                        <li className="w-3/5 lg:2/3 text-lg ml-3">
                            {location.state.empid}
                        </li>
                    </ul>
                    <ul className="flex py-2 border-b border-grey">
                        <li className="w-2/5 lg:w-1/3 font-bold text-lg lg:text-start flex justify-between">
                            <span>Email</span>
                            <span>:</span>
                        </li>
                        <li className="w-3/5 lg:2/3 text-lg ml-3">
                            {location.state.email}
                        </li>
                    </ul>
                    <ul className="flex py-2 border-b border-grey">
                        <li className="w-2/5 lg:w-1/3 font-bold text-lg lg:text-start flex justify-between">
                            <span>Phone</span>
                            <span>:</span>
                        </li>
                        <li className="w-3/5 lg:2/3 text-lg ml-3">
                            {location.state.phone}
                        </li>
                    </ul>
                    <ul className="flex py-2 border-b border-grey">
                        <li className="w-2/5 lg:w-1/3 font-bold text-lg lg:text-start flex justify-between">
                            <span>Gender</span>
                            <span>:</span>
                        </li>
                        <li className="w-3/5 lg:2/3 text-lg ml-3">
                            {location.state.gender}
                        </li>
                    </ul>
                    <ul className="flex py-2 border-b border-grey">
                        <li className="w-2/5 lg:w-1/3 font-bold text-lg lg:text-start flex justify-between">
                            <span>Address</span>
                            <span>:</span>
                        </li>
                        <li className="w-3/5 lg:2/3 text-lg ml-3">
                            {location.state.address}
                        </li>
                    </ul>
                </div>
            </div>

            <Footer />
        </div>
    );
}
