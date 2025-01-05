import Header from "./Header";
import NavPage from "./NavPage";
import Banner from "./Banner";
import MovieList from "./MvieList";
import MoviesAndShowsSection from "./MoviesAndShow";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="flex bg-gray-800 w-full h-full p-0 m-0">
      <NavPage />
      <div className="w-[1800px] flex flex-col items-center justify-center content-center ">
        <div className=" max-w-[1006px]">
          <Header />
          <Banner />
          <div className=" bg-gray-800">
            <MovieList />
            <MoviesAndShowsSection />
          </div>
          <div>
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
}
