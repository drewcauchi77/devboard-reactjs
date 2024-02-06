import '../assets/tasks.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { setTasks } from '../state/task/taskSlice';
import { T_FilteredTasks } from '../typings/types';
import { I_Task } from '../typings/interfaces';
import TasksList from '../components/Tasks/TasksList';

const HomeView = () => {
    const tasks = useSelector((state: RootState) => state.task.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        if(tasks && tasks.length == 0) {
            const getTasksOnLoad = async(): Promise<void> => {
                let filteredTasks: T_FilteredTasks = { "new": [], "active": [], "resolved": [], "onhold": [], "closed": [] };
                const response = await fetch('https://my-json-server.typicode.com/drewcauchi77/devboard-reactjs/tasks');
                const data = await response.json();

                data.map((task: I_Task) => {
                    filteredTasks[task.status].push(task)
                });
                
                dispatch(setTasks(filteredTasks));
            }
    
            getTasksOnLoad();
        }
    }, [])


    return (
        <div className="tasks-board">
            { tasks && (
                Object.keys(tasks).map((task, index) => (
                    <TasksList tasks={ tasks[task] } taskStatus={ task } key={ index } />
                ))
            ) }
        </div>
    )
}

export default HomeView;