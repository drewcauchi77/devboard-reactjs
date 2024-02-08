import { Link } from 'react-router-dom';
import { I_TaskProps } from '../../typings/interfaces';

const Task = (props: I_TaskProps) => {
    const { task } = props;

    return (
        <div className="task" key={ task.id }>
            <Link to={ `/tasks/${task.id}` } className="task-link">
                <div className="task-upper">
                    <span className="task-title">{ task.title }</span>
                    <div className={ `task-color ${ task.status }` }></div>
                </div>
                <div className="task-details">
                    <span>Priority: {task.priority}</span>
                </div>
            </Link>
        </div>
    )
};

export default Task;