import { useState, useEffect } from "react";
import { Card, Button, Select, Collapse, Tooltip } from "antd";
import Header from "./Header";
import CircularProgress from "./CircularProgress";
import Footer from "./Footer";
import { Link } from "react-router";
import NavPage from "./NavPage";

const { Meta } = Card;
const { Panel } = Collapse;
const { Option } = Select;

// Định nghĩa kiểu dữ liệu Movie
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export default function PopularMovie() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 8; // Số lượng phim trên mỗi trang

  // Fetch dữ liệu phim từ TMDB API
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.results) {
          setMovies(data.results);
        }
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  // Tính toán các phim sẽ hiển thị trên trang hiện tại
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Tính tổng số trang
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  // Hàm xử lý chuyển trang
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-gray-800 w-full p-0 m-0">
      {/* Header */}
      <div className="flex items-center justify-center sticky top-0 z-50 w-full bg-gray-800">
        <div className=" max-w-[1006px] flex flex-col flex-1">
          <Header />
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto flex py-8">
        {/* Navbar */}
        <NavPage />
        <aside className="w-1/4 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Popular Movies</h2>
          <Collapse defaultActiveKey={["1", "2", "3"]} expandIconPosition="end">
            {/* Sort */}
            <Panel header="Sort" key="1">
              <h3 className="text-sm font-semibold mb-2">Sort Results By</h3>
              <Select
                defaultValue="Release Date Descending"
                style={{ width: "100%" }}
              >
                <Option value="popularity">Popularity</Option>
                <Option value="release_date">Release Date Descending</Option>
                <Option value="rating">Rating</Option>
              </Select>
            </Panel>

            {/* Filters */}
            <Panel header="Filters" key="2">
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">Certification</h3>
                <Select
                  placeholder="Select Certification"
                  style={{ width: "100%" }}
                  allowClear
                >
                  <Option value="G">G</Option>
                  <Option value="PG">PG</Option>
                  <Option value="PG-13">PG-13</Option>
                  <Option value="R">R</Option>
                </Select>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">Language</h3>
                <Tooltip title="Select the language of the movies">
                  <Select
                    placeholder="None Selected"
                    style={{ width: "100%" }}
                    allowClear
                  >
                    <Option value="en">English</Option>
                    <Option value="vi">Vietnamese</Option>
                    <Option value="fr">French</Option>
                    <Option value="es">Spanish</Option>
                  </Select>
                </Tooltip>
              </div>
            </Panel>
          </Collapse>
          <Button
            type="primary"
            block
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white"
          >
            Search
          </Button>
        </aside>

        {/* Main Content */}
        <main className="w-3/4 pl-6">
          <div className="grid grid-cols-4 gap-6">
            {currentMovies.map((movie) => (
              <div key={movie.id} className="relative">
                <Link to={`/movies/${movie.id}`} key={movie.id}>
                  <Card
                    hoverable
                    cover={
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="h-full object-cover"
                      />
                    }
                    className="rounded-lg shadow-md"
                  >
                    <div className="absolute bottom-[80px] left-4">
                      <CircularProgress
                        percentage={Math.round(movie.vote_average * 10)}
                      />
                    </div>
                    <Meta
                      title={movie.title}
                      description={new Date(movie.release_date).toDateString()}
                    />
                  </Card>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-center space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <Button
                key={index}
                type={index + 1 === currentPage ? "primary" : "default"}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
