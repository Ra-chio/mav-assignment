import React from "react";
import FooterLogo from "../static/footer_logo.png";

export default function Footer() {
    return (
        <div className="w-screen h-auto bg-blue">
            <div className=" w-4/5 mx-auto py-6">
                <div className="flex flex-col">
                    <div className="flex flex-start">
                        <a href="#!">
                            <img src={FooterLogo} alt="Maveric" />
                        </a>
                    </div>
                    <hr className="text-white h-0.5 w-full my-5" />
                    <div className="flex flex-col lg:flex-row lg:justify-between text-white   ">
                        <div className="mb-3 text-center">
                            <p>Copyrights © 2022. Maveric Systems Ltd.</p>
                        </div>
                        <ul className="flex gap-3 items-center justify-center">
                            <li>
                                <a
                                    href="https://www.facebook.com/mavericsystemsltd/"
                                    className="bg-transparent hover:bg-pink hover:border-pink flex justify-center items-center rounded-3xl h-10 w-10 border-2 border-white"
                                >
                                    <i className="fa-brands fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/maveric-systems-limited/"
                                    className="bg-transparent hover:bg-pink hover:border-pink flex justify-center items-center rounded-3xl h-10 w-10 border-2 border-white"
                                >
                                    <i className="fa-brands fa-linkedin-in" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/mavericsystems"
                                    className="bg-transparent hover:bg-pink hover:border-pink flex justify-center items-center rounded-3xl h-10 w-10 border-2 border-white"
                                >
                                    <i className="fa-brands fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/c/mavericsystemsltd"
                                    className="bg-transparent hover:bg-pink hover:border-pink flex justify-center items-center rounded-3xl h-10 w-10 border-2 border-white"
                                >
                                    <i className="fa-brands fa-youtube" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
