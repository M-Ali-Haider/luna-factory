import React from "react";
import { Heading } from ".";
import { useInterestedFactories } from "@/hooks/useMe";
import Image from "next/image";
import Link from "next/link";

interface FactoryItem {
  id: string;
  mainImage: string;
}

const InterestedFactories = () => {
  const { data, isLoading, isError } = useInterestedFactories();
  const list = data?.data || [];

  return (
    <>
      <Heading text="Factories I am Interested ( 用户感兴趣的工厂总览 )" />
      {isLoading ? (
        <div className="py-8 flex flex-wrap items-center gap-4">
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="w-[200px] aspect-square rounded-md bg-gray-200"
            />
          ))}
        </div>
      ) : isError ? (
        <div className="py-8 text-red-500 text-lg">
          Failed to load interested factories. Please try again later.
        </div>
      ) : list.length === 0 ? (
        <div className="py-8 text-gray-500 text-lg">
          You have not marked any factories as interested yet.
        </div>
      ) : (
        <div className="py-8 flex flex-wrap items-center gap-4">
          {list.map((item: FactoryItem, index: number) => (
            <Link
              href={`/factory/${item.id}`}
              key={index}
              className="relative w-[200px] aspect-square rounded-md overflow-hidden shadow bg-primary"
            >
              <Image
                src={item.mainImage}
                alt=""
                fill
                className="object-cover"
              />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default InterestedFactories;
