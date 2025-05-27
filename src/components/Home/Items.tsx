import Image from "next/image";

const Item = () => {
  return (
    <div className="group rounded-2xl h-fit overflow-hidden shadow-lg shadow-black/30 cursor-pointer hover:shadow-xl transition-all duration-300 ease-in-out">
      <div className="relative h-[200px] min-w-[250px] overflow-hidden">
        {/* Zoom wrapper */}
        <div className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110">
          <Image
            src={"/background.jpg"}
            alt={"Image"}
            fill
            style={{ objectFit: "cover" }}
            loading="eager"
          />
        </div>
      </div>
      <div className="bg-primary px-4 py-2 gap-4 flex justify-between items-center">
        <div>
          <p className="text-white font-semibold">Title</p>
          <div className="text-sm font-semibold">
            <p>Summary: xxxxxxxxxxx</p>
            <p>xxxxxxxxxxxxxxxxxxxxx</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-white size-8 mb-1 rounded-full" />
          <p className="text-white text-xs">ID: xxxx</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
