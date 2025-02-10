import React from 'react';
import {
  BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill,
  BsFillCalendarEventFill, BsChatDots, BsFileEarmarkText, BsGraphUp
} from 'react-icons/bs';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line
} from 'recharts';

function Home() {
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <main className='main-container'>
      {/* Dashboard Title */}
      <div className='main-title'>
        <h3>ADMIN DASHBOARD</h3>
      </div>

      {/* Quick Stats Cards */}
      <div className='main-cards'>
        <div className='card1'>
          <div className='card-inner'>
            <h3>COURSES</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>12</h1>
        </div>
        <div className='card2'>
          <div className='card-inner'>
            <h3>STUDENTS</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>150</h1>
        </div>
        <div className='card3'>
          <div className='card-inner'>
            <h3>REVENUE</h3>
            <BsGraphUp className='card_icon' />
          </div>
          <h1>$2,500</h1>
        </div>
        <div className='card4'>
          <div className='card-inner'>
            <h3>MESSAGES</h3>
            <BsChatDots className='card_icon' />
          </div>
          <h1>5</h1>
        </div>
      </div>

      {/* Charts Section */}
      <div className='charts'>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Additional Dashboard Elements */}
      <div className='additional-sections'>
        {/* Upcoming Sessions */}
        <div className='section'>
          <h3><BsFillCalendarEventFill /> UPCOMING SESSIONS</h3>
          <ul>
            <li>Live Class: React Basics - 10/25/2023</li>
            <li>Webinar: Advanced JavaScript - 10/30/2023</li>
          </ul>
        </div>

        {/* Recent Feedback */}
        <div className='section'>
          <h3><BsFileEarmarkText /> RECENT FEEDBACK</h3>
          <ul>
            <li>"Great course! Very detailed." - Student A</li>
            <li>"The live sessions are helpful." - Student B</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Home;