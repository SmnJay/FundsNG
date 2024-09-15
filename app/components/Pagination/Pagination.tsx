import useUpdateParams from "@/app/utils/hooks/useUpdateParams";
import React from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

type Props = {
    totalPages: number;
    currentPage: number; // Current page number from CampaignDashboard
    setCurrentPage: (page: number) => void; // Function to update the current page
};

const Pagination = ({ totalPages, currentPage, setCurrentPage }: Props) => {
    const { updateParams } = useUpdateParams();

    const maxPagesToShow = 5;

    const renderPagination = () => {
        const pages = [];
        const maxPages = Math.min(totalPages, maxPagesToShow);
        const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        const endPage = Math.min(totalPages, startPage + maxPages - 1);

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    onClick={() => setCurrentPage(i)}
                    key={i}
                    className={`${i === currentPage ? "bg-primary text-white" : "border"} px-4 py-1 text-sm rounded cursor-pointer hover:border-primary`}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div className="flex items-center justify-end py-5">
            <section className="flex items-center gap-2 font-light">
                <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className={`border px-2 py-1 text-xl rounded cursor-pointer hover:border-primary ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    <IoMdArrowDropleft />
                </button>
                {renderPagination()}
                <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className={`border px-2 py-1 text-xl rounded cursor-pointer hover:border-primary ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    <IoMdArrowDropright />
                </button>
            </section>
        </div>
    );
};

export default Pagination;
