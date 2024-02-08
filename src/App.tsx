import './assets/app.css';
import './assets/navbar.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './state/store';
import { setTasks, setFilteredTasksByStatus } from './state/task/taskSlice';
import { I_FilteredTasks, I_Task } from './typings/interfaces';
import Navbar from './components/Navbar/Navbar';
import TasksView from './views/TasksView';
import AboutView from './views/AboutView';
import SettingsView from './views/SettingsView';
import SingleTask from './components/Tasks/SingleTask';

const App = () => {
    const isMenuCollapsed = useSelector((state: RootState) => state.status.isMenuCollapsed);
    const tasks = useSelector((state: RootState) => state.task.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        if(tasks && tasks.length == 0) {
            const getTasksOnLoad = async(): Promise<void> => {
                let getFilteredTasks: I_FilteredTasks = { new: [], active: [], resolved: [], onhold: [], closed: [] };
                const response = await fetch('https://my-json-server.typicode.com/drewcauchi77/devboard-reactjs/tasks');
                const data = await response.json();
                dispatch(setTasks(data));

                data.map((task: I_Task) => {
                    getFilteredTasks[task.status].push(task)
                });
                dispatch(setFilteredTasksByStatus(getFilteredTasks));
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
                        <Route path="/settings" element={ <SettingsView /> } />
                        <Route path="/tasks/:id" element={ <SingleTask /> } />
                    </Routes>
                </div>
            </Router>
        </main>
    )
}

export default App;
