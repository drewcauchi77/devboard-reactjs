import '../assets/tasks.css';
import { useSelector } from 'react-redux';
import { getFilteredTasksByStatus } from '../state/task/taskSlice';
import TasksList from '../components/task/TasksList';

const HomeView = () => {
    const filteredTasksByStatus = useSelector(getFilteredTasksByStatus);

    return (
        <div className="tasks-board">
            { filteredTasksByStatus && (
                Object.keys(filteredTasksByStatus).map((task, index) => (
                    <TasksList tasks={ filteredTasksByStatus[task] } taskStatus={ task } key={ index } />
                ))
            ) }
        </div>
    )
}

export default HomeView;