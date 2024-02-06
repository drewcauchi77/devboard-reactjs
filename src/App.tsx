import './assets/app.css';
import './assets/navbar.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './state/store';
import Navbar from './components/Navbar/Navbar';
import TasksView from './views/TasksView';
import AboutView from './views/AboutView';
import SettingsView from './views/SettingsView';

const App = () => {
    const isMenuCollapsed = useSelector((state: RootState) => state.status.isMenuCollapsed);

    return (
        <main>
            <Router>
                <Navbar />
                <div className={ `container${!isMenuCollapsed ? ' menu-open' : ''}` }>
                    <Routes>
                        <Route path="/" element={ <TasksView /> } />
                        <Route path="/about" element={ <AboutView /> } />
                        <Route path="/settings" element={ <SettingsView /> } />
                    </Routes>
                </div>
            </Router>
        </main>
    )
}

export default App;
