import '../assets/tasks.css';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import TasksList from '../components/Tasks/TasksList';

const HomeView = () => {
    const filteredTasks = useSelector((state: RootState) => state.task.filteredTasks);

    return (
        <div className="tasks-board">
            { filteredTasks && (
                Object.keys(filteredTasks).map((task, index) => (
                    <TasksList tasks={ filteredTasks[task] } taskStatus={ task } key={ index } />
                ))
            ) }
        </div>
    )
}

export default HomeView;