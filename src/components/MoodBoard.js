// MoodBoard.js
import React from 'react';
import './MoodBoard.css';

const MoodBoard = () => {
  const moodData = [
    { time: "Today, 10:15 AM", mood: "Happy", description: "Voice analysis detected positive tone while talking about family visit." },
    { time: "Yesterday, 4:30 PM", mood: "Calm", description: "Relaxed tone detected during evening check-in." },
    { time: "Yesterday, 9:45 AM", mood: "Concerned", description: "Slight worry detected when discussing upcoming doctor's appointment." },
    { time: "2 days ago, 2:15 PM", mood: "Excited", description: "Enthusiasm detected when talking about upcoming visit from grandchildren." }
  ];

  const wellnessSuggestions = [
    { 
      title: "Calming Music", 
      description: "Classical piano pieces to help you relax and unwind. Perfect for evening listening.",
      action: "Listen Now"
    },
    { 
      title: "Guided Mindfulness", 
      description: "10-minute guided meditation focused on breathing and relaxation. No experience needed.",
      action: "Start Session"
    },
    { 
      title: "Nature Videos", 
      description: "Peaceful forest scenes with gentle sounds of birds and flowing water. Reduces stress.",
      action: "Watch Now"
    },
    { 
      title: "Chair Yoga", 
      description: "Gentle stretching exercises you can do while seated. Improves flexibility and mood.",
      action: "Try Exercises"
    }
  ];

  return (
    <div className="mood-board">
      <h1>Emotional Wellness</h1>
      
      <div className="mood-section">
        <h2>Today's Mood</h2>
        <div className="mood-options">
          <div className="mood-option">
            <span className="mood-emoji">😢</span>
            <span className="mood-label">Very Sad</span>
          </div>
          <div className="mood-option">
            <span className="mood-emoji">😞</span>
            <span className="mood-label">Sad</span>
          </div>
          <div className="mood-option">
            <span className="mood-emoji">😐</span>
            <span className="mood-label">Neutral</span>
          </div>
          <div className="mood-option">
            <span className="mood-emoji">😊</span>
            <span className="mood-label">Happy</span>
          </div>
          <div className="mood-option">
            <span className="mood-emoji">😁</span>
            <span className="mood-label">Very Happy</span>
          </div>
        </div>
      </div>

      <div className="mood-calendar">
        <h2>Mood Calendar</h2>
        <table>
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
            </tr>
            <tr>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
            </tr>
            <tr>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
            </tr>
            <tr>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="voice-emotion">
        <h2>Voice Emotion Recognition</h2>
        <div className="voice-recognition-list">
          {moodData.map((item, index) => (
            <div key={index} className="voice-recognition-item">
              <div className="voice-time">{item.time}</div>
              <div className="voice-mood">{item.mood}</div>
              <div className="voice-description">{item.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="wellness-suggestions">
        <h2>Wellness Suggestions</h2>
        <div className="suggestions-grid">
          {wellnessSuggestions.map((item, index) => (
            <div key={index} className="suggestion-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button className="suggestion-action">{item.action}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodBoard;