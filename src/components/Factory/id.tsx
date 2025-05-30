"use client";
import { useCheckInterested, useFactory } from "@/hooks/useFactory";
import Image from "next/image";
import YouTube from "react-youtube";
import PicturesFactoryID from "./id-pictures";
import Interested, { InterestedDisabled } from "./interested";
import { AccessDeniedError } from "@/actions/factory/action";
import Link from "next/link";
import { useSession } from "next-auth/react";

const FactoryIDPage = ({ id }: { id: string }) => {
  const { data: session } = useSession();
  const { data, isLoading, isError, error } = useFactory(id);
  const {
    data: checkInterestData,
    isFetching: checkInterestLoading,
    isError: checkInterestError,
  } = useCheckInterested(id);

  if (isLoading) return <Skeleton />;
  if (error instanceof AccessDeniedError) {
    return (
      <div className="min-h-screen flex justify-center px-4 py-10">
        <div className="max-w-[1440px] w-full">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 aspect-square md:aspect-auto min-w-0 bg-primary flex items-center justify-center rounded-md relative">
              <Image
                src={error?.data.mainImage || "/background.jpg"}
                fill
                alt="工厂图片"
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0 text-sm">
              <div className="flex gap-4">
                <h1 className="mb-4 font-medium text-3xl break-words uppercase">
                  {error?.data.name}
                </h1>
                <InterestedDisabled />
              </div>
              <p>标签(一级类目): {error?.data.category?.name}</p>
              <div className="relative">
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center">
                  <p className="text-lg font-semibold text-gray-800 mb-2">
                    {session?.user
                      ? "Buy our paid plan to continue reading"
                      : "Login to continue reading"}
                  </p>
                  {session?.user ? (
                    <div className="px-8 py-3 bg-primary text-white rounded-full transition">
                      Paid Membership
                    </div>
                  ) : (
                    <Link
                      href={"/login"}
                      className="px-8 py-3 bg-primary text-white rounded-full transition"
                    >
                      Login
                    </Link>
                  )}
                </div>
                <p>
                  标签(二级类目即主营产品): Licensed Bamboo Chicken | Electronic
                  Aluminum Pizza | Gorgeous Ceramic Salad | Licensed Silk Towels
                  | 123 | gfsgdsffsd | asdasdasdadsdsa
                </p>
                <p className="mt-6 mb-4 break-words">
                  工厂简介: Acceptus acquiro suffoco amplexus sumo tabesco
                  vociferor demonstro rerum. Adsidue vulariter supellex communis
                  centum delicate sonitus unde vel succedo. Considero curia
                  accedo taedium tabgo eaque allatus. Assumenda spiritus veritas
                  tabernus. Cotidie apto decet terminatio tempus demitto
                  officia. Articulus tricesimus inventore utor molestiae
                  dignissimos deserunt viscus adulescens.
                </p>
                <p>工厂地址: 556 Doyle Fork Apt. 221</p>
                <p className="my-4">联系方式: 1-522-789-7753 x66423</p>
                <p>e-mail: Cicero6@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center" />
            <div
              className="mt-20 bg-primary p-6 rounded-md
              flex flex-col md:flex-row gap-8"
            >
              <div className="bg-white aspect-[21/9] flex-1"></div>
              <div className="flex-1 flex flex-col items-center">
                <div className="text-center mb-4">推荐理由</div>
                <div className="text-center mt-10 mb-8">
                  Flexible MOQ and payment terms
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError) return <ErrorUI />;

  return (
    <div className="min-h-screen flex justify-center px-4 py-10">
      <div className="max-w-[1440px] w-full">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 aspect-square md:aspect-auto min-w-0 bg-primary flex items-center justify-center rounded-md relative">
            <Image
              src={data?.data.mainImage || "/background.jpg"}
              fill
              alt="工厂图片"
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0 text-sm">
            <div className="flex gap-4">
              <h1 className="mb-4 font-medium text-3xl break-words uppercase">
                {data?.data.name}
              </h1>
              <Interested
                id={id}
                isInterested={checkInterestData?.data.isInterested}
                isLoading={checkInterestLoading}
                isError={checkInterestError}
              />
            </div>
            <p>标签(一级类目): {data?.data.category?.name}</p>
            <p>
              标签(二级类目即主营产品):{" "}
              {data?.data.products.map((item) => item.name).join(" | ")}
            </p>
            <p className="mt-6 mb-4 break-words">
              工厂简介: {data?.data.description}
            </p>
            <p>工厂地址: {data?.data.address}</p>
            <p className="my-4">联系方式: {data?.data.phone} </p>
            <p>e-mail: {data?.data.email}</p>
          </div>
        </div>
        <div
          className="mt-20 bg-primary p-6 rounded-md
          flex flex-col md:flex-row gap-8"
        >
          <div className="bg-white aspect-[3/4] flex-1">
            {data?.data?.videoLink && (
              <YouTube
                videoId={
                  new URLSearchParams(new URL(data.data.videoLink).search).get(
                    "v"
                  ) || ""
                }
                className="w-full h-full"
                iframeClassName="w-full h-full rounded-md"
                opts={{
                  width: "100%",
                  height: "100%",
                  playerVars: {
                    autoplay: 0,
                  },
                }}
              />
            )}
          </div>

          <div className="flex-1 flex flex-col items-center justify-between">
            <div className="text-center mb-4">推荐理由</div>
            <div className="text-center mb-8">
              {data?.data.recommendedReason}
            </div>
            <PicturesFactoryID pictures={data?.data?.pictures || []} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactoryIDPage;

export const Skeleton = () => (
  <div className="min-h-screen flex justify-center px-4 py-10 animate-pulse">
    <div className="max-w-[1440px] w-full">
      <div className="flex gap-6">
        <div className="flex-1 min-w-0 bg-gray-200 h-[300px] rounded-md" />
        <div className="flex-1 min-w-0 space-y-4 text-transparent">
          <div className="bg-gray-200 rounded-full h-8 w-3/4" />
          <div className="bg-gray-200 rounded-full h-4 w-1/2" />
          <div className="bg-gray-200 rounded-full h-4 w-5/6" />
          <div className="bg-gray-200 rounded-full h-4 w-full" />
          <div className="bg-gray-200 rounded-full h-4 w-2/3" />
          <div className="bg-gray-200 rounded-full h-4 w-1/3" />
        </div>
      </div>

      <div className="mt-20 bg-primary p-6 rounded-md flex gap-8">
        <div className="aspect-[3/4] flex-1 bg-gray-200 animate-pulse rounded-md" />
        <div className="flex-1 flex flex-col items-center justify-between text-transparent space-y-4">
          <div className="bg-gray-200 rounded-full h-6 w-32" />
          <div className="bg-gray-200 rounded-full h-20 w-3/4" />
          <div className="aspect-[4/3] w-full bg-gray-200 animate-pulse rounded-lg" />
          <div className="flex items-center gap-3 mt-4 justify-center">
            <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse" />
            <div className="flex gap-1 items-center">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div
                  key={idx}
                  className="w-[36px] h-[36px] rounded-full bg-gray-200 animate-pulse"
                />
              ))}
            </div>
            <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ErrorUI = () => (
  <>
    <div className="min-h-screen flex justify-center px-4 py-10">
      <div className="max-w-[1440px] w-full text-center text-red-600">
        <h2 className="text-2xl font-semibold mb-4">加载失败</h2>
        <p className="mb-2">无法获取工厂信息，请稍后再试。</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
        >
          重新加载
        </button>
      </div>
    </div>
  </>
);
