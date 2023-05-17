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
    const fetchData = async () => {
      const [moviesResponse, genresResponse] = await Promise.all([
        axios.get(`${requests.topRatedForStatistics}?page=1`),
        axios.get(`${requests.genreMovies}`),
      ]);

      const movies = moviesResponse.data.results;
      const genres = genresResponse.data.genres;

      setMovies(movies);
      setGenres(genres);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (movies.length === 0 || genres.length === 0) {
      return;
    }

    const genresData = movies.flatMap((movie) => movie.genre_ids);
    const genreCountMap = {};

    for (let genreId of genresData) {
      genreCountMap[genreId] = (genreCountMap[genreId] || 0) + 1;
    }

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

    setGenrePercentages(genrePopularity);
  }, [movies, genres]);

  const genreMap = {};
  genres.forEach((genre) => {
    genreMap[genre.id] = genre.name;
  });

  const chartLabels = genrePercentages.map(
    (genre) => genreMap[genre.genreId] || "Unknown"
  );
  const chartData = genrePercentages.map((genre) => genre.percentage);
  const chartOptions = {
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        stepSize: 25,
        min: 0,
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
    barThickness: 20,
    height: 400,
    borderRadius: 4,
    barPercentage: 0.5,
    backgroundColor: "white",
  };

  const chartData1 = {
    labels: chartLabels,
    datasets: [
      {
        label: "Popularity Percentage %",
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
                <div style={{ marginRight: "5rem", display: "flex", justifyContent: "flex-start"}}>
                  <td>{genreMap[genre.genreId] || "Unknown"}</td>
                </div>

                <td>{genre.percentage.toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
