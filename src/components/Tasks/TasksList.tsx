import { I_TasksListProps } from '../../typings/interfaces';
import Task from './Task';

const TasksList = (props: I_TasksListProps) => {
    const { tasks, taskStatus } = props;

    return (
        <div className="task-list">
            <div className="task-status">{ taskStatus }</div>
            {tasks && tasks.length > 0 ? (
                tasks.map((task, index) => (
                    <Task key={ index } task={ task } />
                )
            )) : (
                <span className="empty-tasks">No Tasks Yet</span>
            )}
        </div>
    )
}

export default TasksList;