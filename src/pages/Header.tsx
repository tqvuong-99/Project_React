import { Search } from "lucide-react";
export default function Header() {
  return (
    <div className='max-w-[1006px] sticky top-0 z-50'>
      <div className="flex justify-between items-center bg-gray-800 ">
        <div>
          <span className="font-bold text-3xl">MOVIE</span>
          <span className="font-bold text-3xl text-yellow-500 ">VENNIE</span>
        </div>
        <div className="flex items-center w-[400px] justify-between">
          <div className="flex items-center bg-gray-700 p-2 rounded-3xl">
            <input
              placeholder="Search Movie"
              className="bg-gray-700 border-0 text-white"
            ></input>
            {<Search className="text-white" />}
          </div>
          <img className="w-[150px]" src="./user.png" />
        </div>
      </div>
    </div>
  );
}
