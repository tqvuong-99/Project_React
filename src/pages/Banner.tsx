
import { CiPlay1 } from "react-icons/ci";
export default function Banner() {
  return (
    <div >
      {/* Banner */}
      <div className="relative rounded-lg overflow-hidden p-6 max-w-[1006px] h-[470px] ">
        <img
          src="https://movie-site-delta.vercel.app/img/home-background.png"
          alt="Hitman's Wife's Bodyguard"
          className="absolute inset-0 w-[1026px] h-full object-cover"
        />

        <div className="relative z-10 text-white">
          <h2 className="text-3xl font-bold mt-[120px]">
            Hitman's Wife's <br /> Bodyguard
          </h2>
          <p className="text-yellow-500 mb-4 text-lg">Releasing 23 July</p>
          <div className="flex items-center space-x-3">
            <button className="flex items-center justify-center w-10 h-10 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300">
              <CiPlay1 className="text-lg" />
            </button>
            <span className="text-white text-lg">Watch the trailer</span>
          </div>
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
    </div>
  )
}
