import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'

const DATA = [
  { id: "todo-0", name: "Flunk a React tutorial", completed: true },
  { id: "todo-1", name: "Add random photos of dogs", completed: true },
  { id: "todo-2", name: "Give Ollie a snack", completed: false },
  { id: "todo-3", name: "Try making Minesweeper using React", completed: false },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
)
