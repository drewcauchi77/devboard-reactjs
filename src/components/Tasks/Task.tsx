import { I_TaskProps } from '../../typings/interfaces';

const Task = (props: I_TaskProps) => {
    const { task } = props;

    return (
        <div className="task">
            <div className="task-upper">
                <span className="task-title">{ task.title }</span>
                <div className={ `task-color ${ task.status }` }></div>
            </div>
            <div className="task-details">
                <span>Priority: {task.priority}</span>
            </div>
        </div>
    )
};

export default Task;