import './App.css';
import { ThemeProvider} from '@mui/material';
import { theme } from './Theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingUI from "./Components/Pages/LandingUI";
import FindPage from './Components/Pages/FindPage';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingUI />} />
          <Route path="/home/:location" element={<FindPage  />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;