import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface Picture {
  id: number;
  url: string;
  factoryId: number;
}

interface PicturesFactoryIDProps {
  pictures: Picture[]; // Cleaned this up from the original type
}

const PicturesFactoryID = ({ pictures }: PicturesFactoryIDProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  if (pictures.length === 0) {
    return <div className="text-white text-center">No pictures available</div>;
  }

  return (
    <>
      <div className="aspect-[4/3] w-full bg-white flex items-center justify-center relative overflow-hidden rounded-lg">
        <Image
          src={pictures[currentIndex].url}
          alt={`Picture ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
        />
      </div>
      <div className="flex items-center gap-3 mt-4 justify-center">
        <ChevronLeft
          color="#fff"
          className="cursor-pointer"
          onClick={goToPrevious}
        />
        <div className="max-w-[140px] md:max-w-none flex flex-wrap gap-1 items-center">
          {pictures.map((_, index) => (
            <div
              key={index}
              onClick={() => goToIndex(index)}
              className={`text-center size-5 text-sm md:text-base md:size-9 rounded-full flex items-center justify-center cursor-pointer ${
                index === currentIndex
                  ? "bg-white text-black"
                  : "hover:bg-white hover:text-black text-white"
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <ChevronRight
          color="#fff"
          className="cursor-pointer"
          onClick={goToNext}
        />
      </div>
    </>
  );
};

export default PicturesFactoryID;
