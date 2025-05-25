"use client";
import { useDebounce } from "@/hooks/useDebounce";
import { useFactories, useFactorycategories } from "@/hooks/useFactory";
import { FactoryInterface } from "@/types/factory";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
// import SideBar from "../SideBar";
import Wrapper from "../Wrapper";
import FactoryDialog from "./dialog";
import Filters from "./Filters";
import Items, { ItemsSkeleton } from "./Items";
import Pagination from "./pagination";

const Factory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useFactorycategories();

  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<string | null>(null);
  const [product, setProduct] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const pageSize = 9;

  const debouncedSearch = useDebounce(search, 500);
  const { data, isLoading, isError } = useFactories(
    filter,
    pageSize,
    page,
    debouncedSearch,
    product
  );
  // DO NOT REMOVE DEBUGGING PURPOSE
  // useEffect(() => {
  //   console.log("filter:", filter);
  //   console.log("page:", page);
  //   console.log("search:", search);
  // }, [filter, page, search]);

  const [totalAlbums, setTotalAlbums] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    if (data?.pagination) {
      const { totalCount, totalPages: newTotalPages } = data.pagination;
      if (totalCount !== totalAlbums || newTotalPages !== totalPages) {
        setTotalAlbums(totalCount);
        setTotalPages(newTotalPages);
      }
    }
  }, [data, totalAlbums, totalPages]);

  useEffect(() => {
    setPage(1);
  }, [filter, search]);

  useEffect(() => {
    if (data?.data?.length === 0 && page !== 1) {
      setPage(1);
    }
  }, [data?.data, page]);

  useEffect(() => {
    setProduct(null);
  }, [filter]);

  return (
    <div className="min-h-screen">
      <FactoryDialog
        open={isOpen}
        setOpen={setIsOpen}
        categories={categories?.data}
        isCategoriesError={isCategoriesError}
        isCategoriesLoading={isCategoriesLoading}
      />
      {/* <SideBar
        categories={categories?.data}
        isCategoriesError={isCategoriesError}
        isCategoriesLoading={isCategoriesLoading}
        filter={filter}
        setFilter={setFilter}
      /> */}
      <div className="flex justify-center">
        <Wrapper className="max-w-[1440px] w-full">
          <div className="my-8">
            <div
              className={
                "relative max-w-96 w-full shadow-lg shadow-black/30 rounded-2xl mx-auto"
              }
            >
              <SearchIcon className="absolute top-1/2 -translate-y-1/2 left-4" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="w-full pl-12 py-3 outline-0"
                placeholder="Search"
              />
              <button className="px-4 transition-transform text-white cursor-pointer hover:scale-105 rounded-2xl font-light h-full absolute right-0 top-1/2 -translate-y-1/2 bg-primary">
                SEARCH
              </button>
            </div>
          </div>
          <Filters
            className="mb-8"
            filter={filter}
            setFilter={setFilter}
            product={product}
            setProduct={setProduct}
            categories={categories?.data}
            isCategoriesLoading={isCategoriesLoading}
            isCategoriesError={isCategoriesError}
            totalCount={data?.pagination?.totalCount}
            isCountLoading={isLoading}
            setIsOpen={setIsOpen}
          />

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-8">
            {isLoading ? (
              <>
                {[...Array(pageSize)].map((_, index) => (
                  <ItemsSkeleton key={index} />
                ))}
              </>
            ) : isError ? (
              <div className="font-medium text-center flex justify-center">
                Error fetching Factories
              </div>
            ) : data?.data?.length === 0 ? (
              <div className="text-center text-gray-500 col-span-full">
                No factories found.
              </div>
            ) : (
              <>
                {data?.data?.map((item: FactoryInterface, index: number) => (
                  <Items key={index} item={item} />
                ))}
              </>
            )}
          </div>

          <Pagination
            currentPage={page}
            setCurrentPage={setPage}
            totalAlbums={totalAlbums}
            albumsPerPage={pageSize}
          />
        </Wrapper>
      </div>
    </div>
  );
};

export default Factory;
