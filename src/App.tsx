// import { House, Flame, Compass, Tv, Heart } from "lucide-react";
// import "./App.css";
// import Header from "./components/Header";
// import Nav from "./components/Nav";
// import { useEffect, useState  } from "react";
// import MovieList from "./pages/MvieList";
// import HomePage from "./pages/HomePage";
// interface Categogy {
//   id:number,
//   name:string,
// }
// function App() {
//   // const [movies, setMovies] = useState<Movie[]>([]);
//   // const [swiperInstance, setSwiperInstance] = useState<any>(null);
//     return (
//     <div className="flex bg-gray-800 w-full h-full p-0 m-0">
//       <div className="flex flex-col items-center justify-center h-[100vh] w-20 text-gray-400 text-xs">
//       <Nav icon={<House />} label="Home" />
//       <Nav icon={<Flame />} label="Trending" />
//       <Nav icon={<Compass />} label="Explore" />
//       <Nav icon={<Tv />} label="Movies" />
//       <Nav icon={<Heart />} label="Favorite" />
//       </div>
//       <div className=" w-11/12 h-[100px] px-28">
//         <Header />
        
//       </div>

//       <div>
         
//          <HomePage/>
//       </div>
//     </div>
//   );
// }

// export default App;


import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import PopularMovie from "./pages/PopularMovie";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="/popular" element={<PopularMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
