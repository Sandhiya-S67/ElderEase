import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MoodBoard from './MoodBoard';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedFeeling, setSelectedFeeling] = useState('Okay');
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const handleLogout = () => {
    navigate('/');
  };

  const handleEmergency = () => {
    alert('Emergency alert sent to caregivers!');
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const feelings = [
    { label: 'Sad', emoji: '😢' },
    { label: 'Okay', emoji: '😐' },
    { label: 'Good', emoji: '🙂' },
    { label: 'Happy', emoji: '😊' },
    { label: 'Excellent', emoji: '😁' }
  ];

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>ElderEase</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li 
              className={activeTab === 'dashboard' ? 'active' : ''}
              onClick={() => handleTabChange('dashboard')}
            >
              <i className="fas fa-home"></i> Dashboard
            </li>
            <li 
              className={activeTab === 'health' ? 'active' : ''}
              onClick={() => handleTabChange('health')}
            >
              <i className="fas fa-heartbeat"></i> Health
            </li>
            <li 
              className={activeTab === 'mood' ? 'active' : ''}
              onClick={() => handleTabChange('mood')}
            >
              <i className="fas fa-smile"></i> Mood Board
            </li>
            <li 
              className={activeTab === 'reminders' ? 'active' : ''}
              onClick={() => handleTabChange('reminders')}
            >
              <i className="fas fa-bell"></i> Reminders
            </li>
            <li 
              className={activeTab === 'activity' ? 'active' : ''}
              onClick={() => handleTabChange('activity')}
            >
              <i className="fas fa-chart-line"></i> Activity
            </li>
            <li 
              className={activeTab === 'messages' ? 'active' : ''}
              onClick={() => handleTabChange('messages')}
            >
              <i className="fas fa-comments"></i> Messages
            </li>
            <li 
              className={activeTab === 'settings' ? 'active' : ''}
              onClick={() => handleTabChange('settings')}
            >
              <i className="fas fa-cog"></i> Settings
            </li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <button onClick={handleLogout} className="logout-btn">
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      </div>

      <div className="main-content">
        <header className="dashboard-header">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search..." />
          </div>
          <div className="user-profile">
            <span>Margaret</span>
            <div className="avatar">M</div>
          </div>
        </header>

        <div className="dashboard-content">
          {activeTab === 'dashboard' && (
            <>
              <div className="greeting-section">
                <h1>Good morning, Margaret</h1>
                <p>Tuesday, June 20, 2023</p>
              </div>

              <div className="health-stats">
                <div className="health-section">
                  <h2>Heart Rate</h2>
                  <div className="stat-value">72</div>
                  <div className="stat-unit">beats per minute</div>
                  <div className="stat-status normal">Normal</div>
                </div>
                <div className="health-section">
                  <h2>Blood Pressure</h2>
                  <div className="stat-value">128/82</div>
                  <div className="stat-unit">mmHg</div>
                  <div className="stat-status elevated">Slightly Elevated</div>
                </div>
                <div className="health-section">
                  <h2>Oxygen Saturation</h2>
                  <div className="stat-value">97%</div>
                  <div className="stat-unit">SpO2</div>
                  <div className="stat-status normal">Normal</div>
                </div>
              </div>

              <button className="emergency-btn" onClick={handleEmergency}>
                <span className="emergency-icon">🆘</span> SOS EMERGENCY ALERT
              </button>

              <div className="reminders-section">
                <h2>Today's Reminders</h2>
                <div className="reminders-list">
                  <div className="reminder-item">
                    <div className="reminder-content">
                      <strong>Blood Pressure Medication</strong>
                      <span>10:00 AM - 1 tablet with water</span>
                    </div>
                  </div>
                  <div className="reminder-item">
                    <div className="reminder-content">
                      <strong>Doctor's Appointment</strong>
                      <span>2:30 PM - Dr. Johnson</span>
                    </div>
                  </div>
                  <div className="reminder-item">
                    <div className="reminder-content">
                      <strong>Afternoon Tea</strong>
                      <span>3:00 PM - Stay hydrated</span>
                    </div>
                  </div>
                  <div className="reminder-item">
                    <div className="reminder-content">
                      <strong>Light Exercise</strong>
                      <span>4:30 PM - 15 min gentle stretching</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="feeling-section">
                <h2>How are you feeling today?</h2>
                <div className="feeling-options">
                  {feelings.map((feeling) => (
                    <div 
                      key={feeling.label}
                      className={`feeling-option ${selectedFeeling === feeling.label ? 'selected' : ''}`}
                      onClick={() => setSelectedFeeling(feeling.label)}
                    >
                      <span className="feeling-emoji">{feeling.emoji}</span>
                      <span className="feeling-label">{feeling.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'mood' && <MoodBoard />}
          
          {/* Add other tabs here as needed */}
          {activeTab === 'health' && (
            <div className="tab-content">
              <h2>Health Dashboard</h2>
              <p>Health metrics and charts will appear here.</p>
            </div>
          )}
          
          {activeTab === 'reminders' && (
            <div className="tab-content">
              <h2>Reminders Management</h2>
              <p>Manage your reminders and medications here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;