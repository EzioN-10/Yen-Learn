import React from 'react';
import {
  FaUser,
  FaChartBar,
  FaTasks,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaGoogleDrive,
  FaGoogle,
  FaFacebook,
  FaGithub,
  FaYoutube,
  FaTimes,
} from 'react-icons/fa';
import './App.css';

const Tutor = () => {
  const jobs = [
    { icon: 'google-drive', title: 'UX Designer', company: 'Google Drive - Junior Post', salary: '$6.7 - $12.5k /yr', time: '1 day ago' },
    { icon: 'google', title: 'JavaScript Developer', company: 'Google - Senior Post', salary: '$8.7 - $13.2k /yr', time: '2 days ago' },
    { icon: 'facebook', title: 'Product Developer', company: 'Facebook - Manager Post', salary: '$11 - $18.5k /yr', time: '2 days ago' },
    { icon: 'github', title: 'Programmer', company: 'Github - Junior Post', salary: '$6 - $11.5k /yr', time: '3 days ago' },
    { icon: 'youtube', title: 'React.js Expert', company: 'Youtube - VIP', salary: '$12.5 - $25.5k /yr', time: '4 days ago' },
  ];

  const tags = ['Programming', 'Design', 'PHP', 'JavaScript'];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'google-drive':
        return <FaGoogleDrive />;
      case 'google':
        return <FaGoogle />;
      case 'facebook':
        return <FaFacebook />;
      case 'github':
        return <FaGithub />;
      case 'youtube':
        return <FaYoutube />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav>
        <div className="navbar">
          <div className="logo">
            <img src="/src/assets/logo.jpg" alt="logo" />
            <h1>jobs</h1>
          </div>
          <ul>
            <li>
              <a href="#">
                <FaUser className="icon" />
                <span className="nav-item">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FaChartBar className="icon" />
                <span className="nav-item">Analytics</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FaTasks className="icon" />
                <span className="nav-item">Jobs Board</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FaCog className="icon" />
                <span className="nav-item">Setting</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FaQuestionCircle className="icon" />
                <span className="nav-item">Help</span>
              </a>
            </li>
            <li>
              <a href="#" className="logout">
                <FaSignOutAlt className="icon" />
                <span className="nav-item">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <section className="main">
        <div className="main-top">
          <p>Explore the universe!</p>
        </div>
        <div className="main-body">
          <h1>Recent Jobs</h1>

          {/* Search Bar */}
          <div className="search_bar">
            <input type="search" placeholder="Search job here..." />
            <select name="category" id="category">
              <option value="">Category</option>
              <option value="web-design">Web Design</option>
              <option value="app-design">App Design</option>
              <option value="app-development">App Development</option>
            </select>
            <select className="filter">
              <option value="">Filter</option>
            </select>
          </div>

          {/* Tags Bar */}
          <div className="tags_bar">
            {tags.map((tag, index) => (
              <div className="tag" key={index}>
                <FaTimes className="icon" />
                <span>{tag}</span>
              </div>
            ))}
          </div>

          {/* Job Count */}
          <div className="row">
            <p>There are more than <span>400</span> Jobs</p>
            <a href="#">See all</a>
          </div>

          {/* Job Cards */}
          {jobs.map((job, index) => (
            <div className="job_card" key={index}>
              <div className="job_details">
                <div className="img">{getIcon(job.icon)}</div>
                <div className="text">
                  <h2>{job.title}</h2>
                  <span>{job.company}</span>
                </div>
              </div>
              <div className="job_salary">
                <h4>{job.salary}</h4>
                <span>{job.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tutor;