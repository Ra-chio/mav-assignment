import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/employee-details/${props.id}`, {
            state: {
                key: props.id,
                id: props.id,
                name: props.name,
                gender: props.gender,
                phone: props.phone,
                empid: props.empID,
                email: props.email,
                address: props.address,
                img: props.img,
            },
        });
    };

    return (
        <div
            key={props.id}
            className="flex flex-row py-2  w-full items-center px-3 border border-grey hover:bg-gray"
        >
            <div className="flex items-center grow">
                <img
                    src={props.img}
                    alt={props.name}
                    className="h-14 rounded-full bg-white border border-grey mr-3"
                />
                <div className=" flex flex-col">
                    <p className="font-bold text-lg"> {props.name} </p>
                    <p className="text-sm"> {props.empID} </p>
                </div>
            </div>
            <i
                key={props.id}
                className="fa-solid fa-square-up-right text-2xl"
                role="button"
                onClick={handleClick}
            />
        </div>
    );
}
