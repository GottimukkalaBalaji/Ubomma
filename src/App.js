import './App.css';
import HomePage from './pages/homePage'
import EnterPage from './pages/EnterPage'
import OpenPage from './pages/openPage'
import SearchPage from './pages/SearchPage';
import Headers from './pages/Header'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';


function App() {
  return (
    <>  
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<EnterPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/open" element={<OpenPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
</BrowserRouter></>

    // <>
    // <EnterPage />
    // <HomePage />
    // <OpenPage />
    // <SearchPage/>
    // </>
  );
}

export default App;
