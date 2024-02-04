import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';

const App = () => {
    return (
        <main>
            <Router>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Routes>
                    <Route path="/" element={ <HomeView /> } />
                    <Route path="/about" element={ <AboutView /> } />
                </Routes>
            </Router>
        </main>
    )
}

export default App;
