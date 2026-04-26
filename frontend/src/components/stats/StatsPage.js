import { useEffect, useState } from "react";
import { getBooks } from "../../services/bookService";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./StatsPage.css";

ChartJS.register(ArcElement, Tooltip, Legend);

function StatsPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((res) => setBooks(res.data));
  }, []);

  const genreCounts = {};
  books.forEach((book) => {
    const genre = book.genre || "Unknown";
    genreCounts[genre] = (genreCounts[genre] || 0) + 1;
  });

  // Different shades of pink
  const pinkShades = [
    "#FFB6D9", // Light pink
    "#FF94C2", // Soft pink
    "#DE5D83", // Medium pink (matches your theme)
    "#C73869", // Dark pink
    "#FF69B4", // Hot pink
    "#E75480", // Deep pink
    "#F08FA0", // Dusty pink
    "#D8457E", // Rose pink
  ];

  const data = {
    labels: Object.keys(genreCounts),
    datasets: [
      {
        data: Object.values(genreCounts),
        backgroundColor: pinkShades.slice(0, Object.keys(genreCounts).length),
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="stats-container">
      <h2>Genre Statistics</h2>
      <div className="chart-wrapper">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default StatsPage;