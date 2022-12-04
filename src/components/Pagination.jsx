import React, { useEffect, useState } from "react";

export default function Pagination({
    cardsPerPage,
    totalCards,
    setCurrentPage,
}) {
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pages.push(i);
    }

    const [currentPageButton, setCurrentPageButton] = useState(1);

    useEffect(() => {
        setCurrentPage(currentPageButton);
    }, [currentPageButton, setCurrentPage]);

    return (
        <div className="flex mt-5 justify-evenly shadow-md">
            <button
                className="bg-blue text-white px-3 py-1"
                onClick={() => setCurrentPageButton(pages[0])}
            >
                <i className="fa-solid fa-angles-left"></i>
            </button>
            <button
                className="border border-blue text-blue px-3 py-1"
                onClick={() =>
                    setCurrentPageButton((prev) =>
                        prev === 1 ? prev : prev - 1
                    )
                }
            >
                <i className="fa-solid fa-angle-left"></i>
            </button>
            <button className="px-3 py-1 border border-blue">
                <span className="font-bold">{currentPageButton}</span> of{" "}
                {pages.length}
            </button>
            <button
                className="border border-blue text-blue px-3 py-1"
                onClick={() =>
                    setCurrentPageButton((next) =>
                        next === pages.length ? next : next + 1
                    )
                }
            >
                <i className="fa-solid fa-angle-right"></i>
            </button>
            <button
                className="bg-blue text-white px-3 py-1"
                onClick={() => setCurrentPageButton(pages[pages.length - 1])}
            >
                <i className="fa-solid fa-angles-right"></i>
            </button>
        </div>
    );
}
