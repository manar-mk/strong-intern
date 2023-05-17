import { useState, useEffect } from "react";
import axios from "axios";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { requests } from "../../../requests";
import s from "./statistics.module.css";

Chart.register(...registerables);

export default function BarChart() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genrePercentages, setGenrePercentages] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const totalPages = 20;
      const promises = [];

      for (let page = 1; page <= totalPages; page++) {
        promises.push(
          axios.get(`${requests.topRatedForStatistics}?page=${page}`)
        );
      }

      const responses = await Promise.all(promises);
      const movies = responses.flatMap((response) => response.data.results);
      setMovies(movies);
    };

    const fetchGenres = async () => {
      const response = await axios.get(`${requests.genreMovies}`);
      setGenres(response.data.genres);
    };

    fetchMovies();
    fetchGenres();
  }, []);

  const genresData = movies.flatMap((movie) => movie.genre_ids);

  const genreCountMap = genresData.reduce((acc, genre) => {
    acc[genre] = (acc[genre] || 0) + 1;
    return acc;
  }, {});

  const genreCounts = Object.entries(genreCountMap).map(([genreId, count]) => ({
    genreId: Number(genreId),
    count,
  }));

  genreCounts.sort((a, b) => b.count - a.count);

  const totalGenres = genreCounts.reduce((sum, genre) => sum + genre.count, 0);

  const genrePopularity = genreCounts.map((genre) => ({
    ...genre,
    percentage: (genre.count / totalGenres) * 100,
  }));

  useEffect(() => {
    setGenrePercentages(genrePopularity);
  }, []);

  const genreMap = {};
  genres.forEach((genre) => {
    genreMap[genre.id] = genre.name;
  });

  const chartLabels = genrePopularity.map(
    (genre) => genreMap[genre.genreId] || "Unknown"
  );
  const chartData = genrePopularity.map((genre) => genre.percentage);
  const chartOptions = {
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: (value) => `${value}%`,
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Most Popular Genres",
        font: { size: 18 },
      },
    },
    tooltips: {
      callbacks: {
        label: (context) => {
          const genreName = chartLabels[context.dataIndex];
          return `${genreName}: ${context.parsed}%`;
        },
      },
    },
    backgroundColor: "white",
  };

  const chartData1 = {
    labels: chartLabels,
    datasets: [
      {
        label: "Popularity Percentage",
        data: chartData,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  return (
    <div className={s.statistics__container}>
      <div className={s.statistics__content}>
        <Bar data={chartData1} options={chartOptions} />
        <table>
          <thead>
            <tr>
              <th>Genre</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {genrePercentages.map((genre) => (
              <tr key={genre.genreId}>
                <td>{genreMap[genre.genreId] || "Unknown"}</td>
                <td>{genre.percentage.toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
