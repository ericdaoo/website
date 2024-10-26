import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// import reportWebVitals from './reportWebVitals';
// import HanyiSentyBubbleTea from "./fonts/HanyiSentyBubbleTea Regular.ttf";
 
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);