import { useRoutes } from 'react-router-dom'

// import './App.css';

import Home from './pages/Home'
import PageWrapper from './components/PageWrapper'

function App() {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '*', element: <PageWrapper /> },
  ])
}

export default App;
