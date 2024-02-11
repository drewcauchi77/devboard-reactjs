import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { I_Task } from '../../typings/interfaces';
import { T_Tasks } from '../../typings/types';
import Task from './Task';

const SingleTask = () => {
    const { id } = useParams<string>();
    const tasks = useSelector((state: RootState) => state.task.tasks);
    const [singleTask, setSingleTask] = useState<I_Task>();
    
    useEffect(() => {
        if(!singleTask || singleTask.id !== Number(id)) {
            const task: T_Tasks = tasks.filter((task) => task.id === Number(id));
            setSingleTask(task[0]);
        }
    }, [tasks, id, singleTask])

    return (
        <div className="single-task-page">
            { singleTask && (
                <>
                    <div className="single-task-details">
                        <h2>{ singleTask.title }</h2>
                        <div className="task-minor-details">
                            <span>Priority: { singleTask.priority }</span>
                            <span>Status: { singleTask.status.toUpperCase() }</span>
                        </div>
                        <div className="task-description">
                            <em>Description</em>
                            <p dangerouslySetInnerHTML={{ __html: singleTask.description }}></p>
                        </div>
                    </div>
                    <div className="other-tasks">
                        <h3>Go To Other Tasks</h3>
                        { tasks.slice(0, 5).length > 0 ? (
                            <>
                                { tasks.slice(0, 5).map((task) => (
                                    task.id !== singleTask.id && (
                                        <Task key={task.id} task={task} />
                                    )
                                )) }
                            </>
                        ) : (
                            <span className="no-tasks">No Other Tasks available</span>
                        ) }
                    </div>
                </>
            ) }
        </div>
    )
};

export default SingleTask;