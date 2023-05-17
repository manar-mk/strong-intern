import { useState, useEffect } from "react";
import axios from "axios";
import { Chart, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";
import { requests } from "../../../requests";
import s from "./statistics.module.css";

Chart.register(...registerables);

export default function PieChart() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(`${requests.topRatedForStatistics}?page=1`);
      const movies = response.data.results.slice(0, 10); // Limit to top 10 movies
      setMovies(movies);
    };

    fetchMovies();
  }, []);

  const chartData = {
    labels: movies.map((movie) => movie.title),
    datasets: [
      {
        label: "Top 10 Movies",
        data: movies.map((movie) => movie.vote_count),
        backgroundColor: movies.map(() => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.6)`),
      },
    ],
  };

  const chartOptions = {
    plugins: {
      title: {
        display: true,
        text: "Top 10 Movies by Vote Count",
        font: { size: 18 },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const movie = movies[context.dataIndex];
            return `${movie.title}: ${movie.vote_count}`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className={s.statistics__container}>
      <div className={s.statistics__content}>
        <Pie data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
