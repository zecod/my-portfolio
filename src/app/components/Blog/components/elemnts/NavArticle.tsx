import { HiMiniArrowSmallLeft } from "react-icons/hi2";

export const NavArticle = () => {
  return (
    <div className="jersey-10-regular py-4 flex justify-between items-center border-b ">
      <button
        className="flex gap-2 items-center justify-start text-lg transition-all duration-200 hover:text-blue-500 cursor-pointer"
        onClick={() => window.location.assign("/blog")}
      >
        <HiMiniArrowSmallLeft />
        Back
      </button>
    </div>
  );
};
