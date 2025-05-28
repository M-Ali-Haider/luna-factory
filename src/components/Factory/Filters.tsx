"use client";
import { useProducts } from "@/hooks/useProduct";
// import { openSidebar } from "@/store/sidebar";
// import { AppDispatch } from "@/store/store";
import React, { SetStateAction } from "react";
// import { useDispatch } from "react-redux";
import FilterSelector, { SkeletonFilterSelector } from "./FilterSelector";

const skeletonCategories = [
  "Cloths",
  "Pens",
  "Car Parts",
  "Home Decor",
  "Cloths",
  "Pens",
  "Car Parts",
  "Home Decor",
];

export interface FiltersInterface {
  className?: string;
  categories: [{ id: string; name: string; factoryCount: number }];
  isCategoriesLoading: boolean;
  isCategoriesError: boolean;
  setFilter: React.Dispatch<SetStateAction<string | null>>;
  setProduct: React.Dispatch<SetStateAction<string | null>>;
  product: string | null;
  filter: string | null;
  totalCount: number;
  isCountLoading: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

export interface ProductsInterface {
  id: number;
  name: string;
  price: number;
}

const Filters = ({
  className,
  categories,
  isCategoriesLoading,
  isCategoriesError,
  filter,
  setFilter,
  totalCount,
  isCountLoading,
  product,
  setProduct,
  setIsOpen,
}: FiltersInterface) => {
  // const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, isError } = useProducts(filter);
  return (
    <div className={className}>
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h4 className="text-xl">
          Luna Verified Factories of All Categories {">"}
        </h4>
        <p>
          In Total&nbsp;
          <span
            className={`${
              isCountLoading
                ? "text-transparent bg-gray-200 animate-pulse rounded-full"
                : ""
            }`}
          >
            ({totalCount || 0})
          </span>
        </p>
      </div>
      <div className="px-4 py-2 bg-white justify-between rounded-2xl flex md:flex-nowrap flex-wrap gap-4">
        <div>
          <h3 className="font-semibold mb-2">Luna Verified Factories</h3>
          <p className="text-gray-500 text-sm mb-2">Categories</p>
          {isCategoriesError ? (
            <div className="text-red-500 text-sm mb-4">
              Failed to load categories. Please try again later.
            </div>
          ) : isCategoriesLoading ? (
            <div className="flex flex-wrap items-center gap-2">
              {skeletonCategories.map((category, index) => (
                <SkeletonFilterSelector key={index} title={category} />
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-2">
              <FilterSelector
                selected={filter === null}
                title="All"
                onClick={() => setFilter(null)}
              />
              {categories.map(({ name, id, factoryCount }, index) => (
                <FilterSelector
                  key={index}
                  selected={id === filter}
                  title={name}
                  onClick={() => setFilter(id)}
                  factoryCount={factoryCount}
                />
              ))}
            </div>
          )}

          <div className="mb-4" />
          {filter !== null && (
            <>
              <p className="text-gray-500 text-sm mb-2">Products</p>
              <div className="flex flex-wrap items-center gap-2">
                {isError ? (
                  <div className="text-red-500 text-sm mb-4">
                    Failed to load categorie&lsquo;s products. Please try again
                    later.
                  </div>
                ) : isLoading ? (
                  <>
                    {skeletonCategories.map((category, index) => (
                      <SkeletonFilterSelector key={index} title={category} />
                    ))}
                  </>
                ) : (
                  <>
                    <FilterSelector
                      selected={product === null}
                      title="All"
                      onClick={() => setProduct(null)}
                    />
                    {data?.data?.products?.map(
                      (item: ProductsInterface, index: number) => (
                        <FilterSelector
                          selected={item.name === product}
                          key={index}
                          title={item.name}
                          onClick={() => setProduct(item.name)}
                        />
                      )
                    )}
                  </>
                )}
              </div>
            </>
          )}
        </div>

        <div className="min-w-[193px] max-w-[193px] flex justify-end items-center">
          <button
            className="cursor-pointer bg-primary h-fit px-2 py-2 rounded-lg font-semibold text-sm"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <p>Cannot Find What You Want</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;

{
  /* <div className="flex items-center justify-between shadow-lg shadow-black/40 px-8 py-4 rounded-xl max-[1024px]:flex-col">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 max-[1024px]:flex-col">
            <p className="text-nowrap">Categories (Something): </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <FilterSelector key={index} selected={false} title={category} />
              ))}
            </div>
          </div>
          <div className="flex gap-2 max-[1024px]:flex-col">
            <p className="text-nowrap">Product Type (Something): </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <FilterSelector key={index} selected={false} title={category} />
              ))}
            </div>
          </div>
        </div>
        <FilterButton />
      </div> */
}
