import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import MovieCard from "./MovieCard";
import { Link } from "react-router";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  genre: string;
}

const MoviesAndShowsSection: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/now_playing", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8",
      },
    })
      .then((res) => res.json())
      .then((data) =>
        setMovies(
          data.results.map((movie: any) => ({
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            genre: "Action/Adventure",
          }))
        )
      )
      .catch((err) => console.error(err));
  }, []);

  const handlePageClick = (pageIndex: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(pageIndex); // Chuyển đến trang cụ thể
    }
  };
  return (
    <div className="bg-gray-800 max-w-[1006px] relative">
      <h2 className="text-2xl font-medium mb-6 text-white bg-gray-900 p-2 border border-gray-700 my-10">
        Movies and Shows
      </h2>
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 1,
          fill: "row",
        }}
        spaceBetween={20}
        navigation={true}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        modules={[Grid, Navigation]}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              <MovieCard
                title={movie.title}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                genre="Action/Adventure" // Thể loại mẫu, bạn có thể sửa theo API
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <br/>
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 1,
          fill: "row",
        }}
        spaceBetween={20}
        navigation={true}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        modules={[Grid, Navigation]}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              <MovieCard
                title={movie.title}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                genre="Action/Adventure" // Thể loại mẫu, bạn có thể sửa theo API
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-4 flex justify-center space-x-2">
        {Array.from({ length: Math.ceil(movies.length / 4) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index)} // Chuyển trang khi click
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mb-8"
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default MoviesAndShowsSection;
