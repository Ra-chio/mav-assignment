import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Login() {
    const navigate = useNavigate();

    const [input, setInput] = useState({ username: "", password: "" });
    const [userData, setUserData] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/employees")
            .then((res) => res.json())
            .then((res) => setUserData(res))
            .catch((err) => console.log(err));
    }, []);

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const userValidation = (values) => {
        const error = {};

        const storedUser = Object.values(userData).find(
            (user) =>
                user.username === values.username &&
                user.password === values.password
        );

        if (storedUser == null) {
            if (values.username === "" && values.password === "") {
                error.username = "username is required";
                error.password = "password is required";
            } else if (values.username === "") {
                error.username = "username is required";
            } else if (values.password === "") {
                error.password = "password is required";
            } else {
                error.username = "invalid credentials";
                error.password = "invalid credentials";
            }
        } else {
            return true;
        }
        return error;
    };

    useEffect(() => {
        if (Object.values(error).length === 0 && submitted) {
            localStorage.setItem("login", true);
            navigate("/employee-directory");
        } else {
            localStorage.setItem("login", false);
        }
    }, [error, submitted, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(userValidation(input));
        //   console.log(localStorage.getItem("token"));
        setSubmitted(true);
        setUserData({ username: "", password: "" });
    };

    return (
        <div className="w-screen min-h-screen flex flex-col justify-between">
            <Header />

            <div className="w-screen h-full flex flex-col mx-auto px-10">
                <form
                    onSubmit={(event) => handleSubmit(event)}
                    className="w-full px-4 py-3 md:w-3/5 lg:w-1/3 bg-white mx-auto my-5 shadow-md"
                >
                    <p className="text-center text-black text-lg font-bold md:text-start">
                        Login
                    </p>
                    <div className="flex flex-col border-b border-black hover:border-red">
                        <label
                            htmlFor="username"
                            className="mt-4 text-sm text-gray-600"
                        >
                            Enter Username
                        </label>
                        <div className="mb-0.5 flex items-center">
                            <i className="fa-solid fa-user-large mr-2 text-blue" />
                            <input
                                type="text"
                                id="username"
                                placeholder="Username"
                                name="username"
                                value={input.username}
                                onChange={(e) => handleChange(e)}
                                className=" focus:ring-none focus:outline-0 w-full placeholder:text-sm "
                                autoComplete="off"
                                autoFocus
                            />
                        </div>
                    </div>
                    <p className="text-red text-sm"> {error.username} </p>
                    <div className="flex flex-col border-b border-black hover:border-red">
                        <label
                            htmlFor="password"
                            className="mt-4 text-sm text-gray-600"
                        >
                            Enter Password
                        </label>
                        <div className="mb-0.5 flex items-center">
                            <i className="fa-solid fa-key mr-2 text-blue" />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={input.password}
                                onChange={(e) => handleChange(e)}
                                className=" focus:ring-none focus:outline-0 w-full placeholder:text-sm"
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    <p className="text-red text-sm"> {error.password} </p>
                    <div className="flex mt-5 items-center justify-between">
                        <div
                            role="button"
                            className="text-sm text-blue underline hover:text-sky-900"
                            onClick={() => {
                                navigate("/create-user");
                            }}
                        >
                            SignUp
                        </div>
                        <button
                            type="submit"
                            className="bg-blue text-md text-white py-1 px-3 shadow-sm hover:bg-blue"
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    );
}
