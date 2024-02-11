import './assets/app.css';
import './assets/navbar.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './state/store';
import { setTasks } from './state/task/taskSlice';
import Navbar from './components/navbar/Navbar';
import TasksView from './views/TasksView';
import SingleTask from './components/task/SingleTask';
import AddTask from './components/task/AddTask';
import AboutView from './views/AboutView';
import SettingsView from './views/SettingsView';

const App = () => {
    const isMenuCollapsed = useSelector((state: RootState) => state.status.isMenuCollapsed);
    const tasks = useSelector((state: RootState) => state.task.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        if(tasks && tasks.length == 0) {
            const getTasksOnLoad = async(): Promise<void> => {
                const response = await fetch('https://my-json-server.typicode.com/drewcauchi77/devboard-reactjs/tasks');
                const data = await response.json();

                dispatch(setTasks(data));
            }
    
            getTasksOnLoad();
        }
    }, []);

    return (
        <main>
            <Router>
                <Navbar />
                <div className={ `container${!isMenuCollapsed ? ' menu-open' : ''}` }>
                    <Routes>
                        <Route path="/" element={ <AboutView /> } />
                        <Route path="/tasks" element={ <TasksView /> } />
                        <Route path="/tasks/:id" element={ <SingleTask /> } />
                        <Route path="/add-task" element={ <AddTask /> } />
                        <Route path="/settings" element={ <SettingsView /> } />
                    </Routes>
                </div>
            </Router>
        </main>
    )
}

export default App;
