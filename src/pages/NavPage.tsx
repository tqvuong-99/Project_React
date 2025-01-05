import React from "react";
import { Link } from "react-router";
type TNav = {
  icon: React.ReactNode;
  label: string;
};
function Nav({ icon, label }: TNav) {
  return (
    <>
      <div className="flex flex-col items-center py-4">
        {icon} {label}
      </div>
    </>
  );
}
import { House, Flame, Compass, Tv, Heart } from "lucide-react";

export default function NavPage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[100vh] w-20 text-gray-400 text-xs fixed top-[250px] left-0  h-auto text-gray-500">
        <Link to="/home">
          <Nav icon={<House />} label="Home" />
        </Link>
        <Link to="/popular">
          <Nav icon={<Flame />} label="Trending" />
        </Link>
        <Link to="/home">
          <Nav icon={<Compass />} label="Explore" />
        </Link>
        <Link to="/home">
          <Nav icon={<Tv />} label="Movies" />
        </Link>
        <Link to="/home">
          <Nav icon={<Heart />} label="Favorite" />
        </Link>
      </div>
    </div>
  );
}
