import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { FaUser, FaChartLine, FaVideo, FaImage, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Dashboard = () => {
  const [activeCategory, setActiveCategory] = useState('overview');

  // Dummy data for charts
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Users',
        backgroundColor: 'rgba(153,102,255,0.4)',
        borderColor: 'rgba(153,102,255,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(153,102,255,0.6)',
        hoverBorderColor: 'rgba(153,102,255,1)',
        data: [30, 45, 60, 70, 80, 90, 100],
      },
    ],
  };

  const pieChartData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  // Dummy data for cards
  const cards = [
    { id: 1, title: 'Total Users', value: '1,234', icon: <FaUser /> },
    { id: 2, title: 'Total Sales', value: '$12,345', icon: <FaChartLine /> },
    { id: 3, title: 'Total Videos', value: '567', icon: <FaVideo /> },
    { id: 4, title: 'Total Photos', value: '890', icon: <FaImage /> },
  ];

  // Dummy data for videos and photos
  const videos = [
    { id: 1, title: 'Video 1', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 2, title: 'Video 2', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 3, title: 'Video 3', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  ];

  const photos = [
    { id: 1, title: 'Photo 1', url: 'https://via.placeholder.com/300' },
    { id: 2, title: 'Photo 2', url: 'https://via.placeholder.com/300' },
    { id: 3, title: 'Photo 3', url: 'https://via.placeholder.com/300' },
  ];

  return (
    <div className={styles.dashboard}>
      {/* Header */}
      <header className={styles.header}>
        <h1>Dashboard</h1>
        <div className={styles.userMenu}>
          <FaCog className={styles.icon} />
          <FaSignOutAlt className={styles.icon} />
        </div>
      </header>

      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <ul>
          <li
            className={activeCategory === 'overview' ? styles.active : ''}
            onClick={() => setActiveCategory('overview')}
          >
            Overview
          </li>
          <li
            className={activeCategory === 'analytics' ? styles.active : ''}
            onClick={() => setActiveCategory('analytics')}
          >
            Analytics
          </li>
          <li
            className={activeCategory === 'videos' ? styles.active : ''}
            onClick={() => setActiveCategory('videos')}
          >
            Videos
          </li>
          <li
            className={activeCategory === 'photos' ? styles.active : ''}
            onClick={() => setActiveCategory('photos')}
          >
            Photos
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Overview Section */}
        {activeCategory === 'overview' && (
          <>
            <div className={styles.cardGrid}>
              {cards.map((card) => (
                <div key={card.id} className={styles.card}>
                  <div className={styles.cardIcon}>{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.value}</p>
                </div>
              ))}
            </div>

            <div className={styles.chartGrid}>
              <div className={styles.chart}>
                <h3>Sales Chart</h3>
                <Bar data={barChartData} />
              </div>
              <div className={styles.chart}>
                <h3>Users Chart</h3>
                <Line data={lineChartData} />
              </div>
              <div className={styles.chart}>
                <h3>Pie Chart</h3>
                <Pie data={pieChartData} />
              </div>
            </div>
          </>
        )}

        {/* Analytics Section */}
        {activeCategory === 'analytics' && (
          <div className={styles.analytics}>
            <h2>Analytics</h2>
            <p>Detailed analytics will be displayed here.</p>
          </div>
        )}

        {/* Videos Section */}
        {activeCategory === 'videos' && (
          <div className={styles.videoGallery}>
            <h2>Videos</h2>
            <div className={styles.videoGrid}>
              {videos.map((video) => (
                <div key={video.id} className={styles.videoCard}>
                  <iframe
                    title={video.title}
                    src={video.url}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                  <h3>{video.title}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Photos Section */}
        {activeCategory === 'photos' && (
          <div className={styles.photoGallery}>
            <h2>Photos</h2>
            <div className={styles.photoGrid}>
              {photos.map((photo) => (
                <div key={photo.id} className={styles.photoCard}>
                  <img src={photo.url} alt={photo.title} />
                  <h3>{photo.title}</h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;