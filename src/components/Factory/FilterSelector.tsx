import React from "react";

const FilterSelector = ({
  selected = false,
  title,
  onClick,
}: {
  selected?: boolean;
  title?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <button
      onClick={onClick}
      className={`${
        selected ? "bg-primary" : "bg-gray"
      } px-2 py-1 rounded-lg hover:bg-primary cursor-pointer text-sm`}
    >
      {title}
    </button>
  );
};
export default FilterSelector;

export const SkeletonFilterSelector = ({ title }: { title?: string }) => {
  return (
    <button
      className="px-2 py-1 rounded-lg hover:bg-primary cursor-pointer font-semibold text-sm 
      text-transparent bg-gray-200 animate-pulse"
    >
      {title}
    </button>
  );
};

export const ProductUI = ({
  title,
  onClick,
}: {
  title?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gray px-2 py-1 rounded-lg cursor-pointer font-semibold text-sm`}
    >
      {title}
    </button>
  );
};
