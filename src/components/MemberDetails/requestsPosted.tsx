import { useRequestPost } from "@/hooks/useMe";
import { Heading } from ".";

interface RequestPostItem {
  message: string;
  category: string;
  productName: string;
}

const RequestsPosted = () => {
  const { data, isLoading, isError } = useRequestPost();
  const list = data?.data || [];

  return (
    <>
      <Heading text="Requests I have Posted" />
      {isLoading ? (
        <div className="py-8 flex flex-wrap items-center gap-4">
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="w-full rounded-md overflow-hidden shadow bg-gray-200
                flex items-center gap-4 p-3"
            >
              <div className="text-ellipsis w-[100px] bg-gray-300 animate-pulse rounded-full text-transparent">
                bruhmius
              </div>
              <div className="text-ellipsis w-[150px] bg-gray-300 animate-pulse rounded-full text-transparent">
                bruhmius
              </div>
              <div className="text-ellipsis flex-1 bg-gray-300 animate-pulse rounded-full text-transparent">
                bruhmius
              </div>
            </div>
          ))}
        </div>
      ) : isError ? (
        <div className="py-8 text-red-500 text-lg">
          Failed to load posts. Please try again later.
        </div>
      ) : list.length === 0 ? (
        <div className="py-8 text-gray-500 text-lg">
          You have not added any posts.
        </div>
      ) : (
        <div className="py-8 flex flex-wrap items-center gap-1 text-sm">
          <div className="w-full p-3 flex items-center gap-4 font-medium">
            <div className="text-ellipsis w-[100px]">Name</div>
            <div className="text-ellipsis w-[150px]">Category</div>
            <div className="text-ellipsis flex-1">Message</div>
          </div>
          {list.map((item: RequestPostItem, index: number) => (
            <div
              key={index}
              className="w-full rounded-md overflow-hidden shadow bg-primary
              flex items-center gap-4 p-3"
            >
              <div className="text-ellipsis w-[100px]">{item.productName}</div>
              <div className="text-ellipsis w-[150px]">{item.category}</div>
              <div className="text-ellipsis flex-1">{item.message}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default RequestsPosted;
