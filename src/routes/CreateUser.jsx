import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
export default function CreateUser() {
    const navigate = useNavigate();

    const [initialValues] = useState({
        name: "",
        ein: "",
        email: "",
        phone: "",
        gender: "",
        image: "",
        username: "",
        password: "",
        address: "",
    });

    const [formData, setFormData] = useState(initialValues);

    const postData = async () => {
        try {
            const res = await fetch("http://localhost:3000/employees", {
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    function handleSubmit(event) {
        event.preventDefault();
        postData();
        setFormData(initialValues);
        navigate("/");
    }

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div className="w-screen min-h-screen flex flex-col justify-between">
            <Header />

            <div className="w-screen h-full flex flex-col mx-auto px-10 ">
                <form
                    onSubmit={(event) => handleSubmit(event)}
                    className="w-full px-4 py-3 md:w-3/5 lg:w-1/3 bg-white mx-auto my-5 shadow-md flex flex-col"
                >
                    <p className="text-center text-black px-3 py-2 text-xl font-bold md:text-start">
                        Create User
                    </p>
                    <div className="flex flex-col w-full items-center py-2">
                        <div className="flex flex-col w-full mb-2 md:flex-row ">
                            <div className="flex flex-col px-3 py-1 w-full md:w-1/2">
                                <label className="text-blue" htmlFor="">
                                    Name
                                </label>
                                <input
                                    className="border-b border-black py-1 focus:outline-none focus:border-pink"
                                    type="text"
                                    placeholder="firstname"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className="flex flex-col px-3 py-1 w-full md:w-1/2">
                                <label className="text-blue" htmlFor="">
                                    Gender
                                </label>
                                <input
                                    className="border-b border-black py-1 focus:outline-none focus:border-pink"
                                    type="text"
                                    placeholder="gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col w-full mb-2 md:flex-row">
                            <div className="flex flex-col px-3 py-1 w-full md:w-1/2">
                                <label className="text-blue" htmlFor="">
                                    Phone
                                </label>
                                <input
                                    className="border-b border-black py-1 focus:outline-none focus:border-pink"
                                    type="phone"
                                    placeholder="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className="flex flex-col px-3 py-1 w-full md:w-1/2">
                                <label className="text-blue" htmlFor="">
                                    EmpID
                                </label>
                                <input
                                    className="border-b border-black py-1 focus:outline-none focus:border-pink"
                                    type="test"
                                    placeholder="ein"
                                    name="ein"
                                    value={formData.ein}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col w-full mb-2 md:flex-row">
                            <div className="flex flex-col px-3 py-1 w-full ">
                                <label className="text-blue" htmlFor="">
                                    Address
                                </label>
                                <input
                                    className="border-b border-black py-1 focus:outline-none focus:border-pink"
                                    type="text"
                                    placeholder="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col w-full mb-2 md:flex-row">
                            <div className="flex flex-col px-3 py-1 w-full md:w-1/2">
                                <label className="text-blue" htmlFor="">
                                    Username
                                </label>
                                <input
                                    className="border-b border-black py-1 focus:outline-none focus:border-pink"
                                    type="text"
                                    placeholder="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className="flex flex-col px-3 py-1 w-full md:w-1/2">
                                <label className="text-blue" htmlFor="">
                                    Profile
                                </label>
                                <input
                                    className="border-b border-black py-1 focus:outline-none focus:border-pink"
                                    type="text"
                                    placeholder="imgURL"
                                    name="image"
                                    value={formData.image}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col w-full mb-2 md:flex-row">
                            <div className="flex flex-col px-3 py-1 w-full md:w-1/2">
                                <label className="text-blue" htmlFor="">
                                    Email
                                </label>
                                <input
                                    className="border-b border-black py-1 focus:outline-none focus:border-pink"
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className="flex flex-col px-3 py-1 w-full md:w-1/2">
                                <label className="text-blue" htmlFor="">
                                    Password
                                </label>
                                <input
                                    className="border-b border-black py-1 focus:outline-none focus:border-pink"
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex my-2 items-center justify-between px-3">
                        <div
                            role="button"
                            className="text-sm text-blue underline"
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            Login
                        </div>
                        <button
                            type="submit"
                            className="bg-blue text-md text-white py-1 px-4 shadow-sm"
                        >
                            Create User
                        </button>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    );
}
