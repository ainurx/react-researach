// Lib
import {
  BrowserRouter,
  Routes, 
  Route
} from 'react-router-dom'

// Commmon
import Constants from './common/Constants' 

// Components
import MainNavigation from './components/MainNavigation';

// Pages
import Main from './pages/Main/Main'

function App() {
  return (
    <BrowserRouter>  
      <MainNavigation />
      <Routes>
        <Route exact path={Constants.Url.Main} element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
