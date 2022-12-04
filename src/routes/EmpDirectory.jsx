import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

export default function EmpDirectory() {
    const navigate = useNavigate();
    const cardsPerPage = 4;
    const [userData, setUserData] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const [currentPage, setCurrentPage] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/employees").then((res) =>
            res.json().then((res) => setUserData(res))
        );
    });

    const handleChange = (e) => {
        setSearchItem(e.target.value);
    };

    const filteredData = userData.filter((user) =>
        Object.values(user)
            .join("")
            .toLowerCase()
            .includes(searchItem.toLowerCase())
    );

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const cardsOfPage = filteredData.slice(indexOfFirstCard, indexOfLastCard);
    //  const totalPages = Math.ceil(filteredData.length / cardsPerPage);

    return (
        <div className=" max-w-screen min-h-screen flex flex-col justify-between items-center">
            <Header />

            <div className="w-5/6 h-full flex flex-col items-center my-5">
                <div className="w-full flex flex-col items-center ">
                    <div className="flex items-center w-auto self-stretch border-b-2 border-blue shadow-lg">
                        <i className="fa-solid fa-magnifying-glass text-blue text-xl" />
                        <input
                            onChange={(e) => handleChange(e)}
                            value={searchItem}
                            type="text"
                            placeholder="Candidate Name"
                            className="bg-transparent w-auto grow py-1 px-2 focus:outline-0 focus:border-pink"
                            autoFocus
                        />
                    </div>
                    <button
                        onClick={() => navigate("/create-user")}
                        className="bg-blue w-36 justify-center text-white flex items-center px-3 py-2 my-5 shadow-md"
                    >
                        <i className="fa-solid fa-user-plus mr-1" />
                        <p>Create User</p>
                    </button>

                    <div className="flex w-full flex-col bg-red-400 shadow-md">
                        {cardsOfPage.map((user, index) => (
                            <Card
                                key={index}
                                name={user.name}
                                empID={user.ein}
                                email={user.email}
                                phone={user.phone}
                                gender={user.gender}
                                img={user.image}
                                address={user.address}
                            />
                        ))}
                    </div>
                    <div className="w-full flex justify-end">
                        <Pagination
                            cardsPerPage={cardsPerPage}
                            totalCards={filteredData.length}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
