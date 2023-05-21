import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './filimo/styles/style.css'
import {seriesList , seriesInfo} from './filimo/data'
import SeriesList from './filimo/components/seriesList'
import SeriesInfo from './filimo/components/seriesInfo'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <div className="popular-section">
        <div className="heading">
            <div className="title">محبوب‌ترین‌های فیلیمو</div>
            <div className="switch-button">
                <button id="seriesButton">سریال</button>
                <button id="moiveButton">فیلم</button>
            </div>
        </div>
        <div className="items-list">
            <ul>
                <SeriesList data={seriesList}></SeriesList>
            </ul>
        </div>
        <div className="information">
            <ul>
                <SeriesInfo data={seriesInfo}></SeriesInfo>
            </ul>
        </div>
    </div>
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
