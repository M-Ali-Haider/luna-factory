"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalAlbums: number;
  albumsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  totalAlbums,
  albumsPerPage,
}) => {
  const totalPages = Math.ceil(totalAlbums / albumsPerPage);

  // if (totalAlbums === 0 || totalPages <= 1) return null;

  const disabled = totalAlbums === 0 || totalPages <= 1;
  const prev = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  const next = () => {
    setCurrentPage(Math.min(currentPage + 1, totalPages));
  };

  const getVisiblePages = () => {
    const range = 5;
    let start = Math.max(currentPage - range, 1);
    let end = Math.min(currentPage + range, totalPages);

    if (end - start < 10) {
      if (start === 1) {
        end = Math.min(11, totalPages);
      } else if (end === totalPages) {
        start = Math.max(totalPages - 10 + 1, 1);
      }
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div className="flex justify-center gap-2 pb-8">
      <button
        onClick={prev}
        disabled={disabled}
        className="cursor-pointer px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        <ChevronLeft />
      </button>
      {getVisiblePages().map((item) => (
        <button
          key={item}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setCurrentPage(item);
          }}
          className={`cursor-pointer px-3 py-1 rounded ${
            item === currentPage ? "bg-yellow-500" : "bg-gray-200"
          }`}
        >
          {item}
        </button>
      ))}
      <button
        disabled={disabled}
        className="cursor-pointer px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        onClick={next}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
