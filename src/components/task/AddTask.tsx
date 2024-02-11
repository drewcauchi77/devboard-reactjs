import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { addTask } from '../../state/task/taskSlice';

const AddTask = () => {
    const tasks = useSelector((state: RootState) => state.task.tasks);
    const dispatch = useDispatch();
    const [title, setTitle] = useState<string>('');
    const [isTitleError, setIsTitleError] = useState<boolean>(false);
    const [description, setDescription] = useState<string>('');
    const [isDescriptionError, setIsDescriptionError] = useState<boolean>(false);
    const [priority, setPriority] = useState<number>(1);

    const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        
        if(!title || !description) {
            if(!title) setIsTitleError(true);
            if(!description) setIsDescriptionError(true);
            return;
        }

        dispatch(addTask({
            id: tasks[tasks.length - 1].id + 1,
            title: title,
            description: description,
            priority: priority,
            status: "new"
        }));
        
        resetState();
    };

    const resetState = (): void => {
        setTitle('');
        setIsTitleError(false);
        setDescription('');
        setIsDescriptionError(false);
        setPriority(1);
    };

    return (
        <div className="add-task">
            <h2>Add a New Task</h2>
            <form onSubmit={ (event) => onSubmit(event) }>
                <div className="form-control">
                    <label>Task Title <strong>*</strong></label>
                    <input type="text" placeholder="Add Task Title" value={ title } onChange={ (event) => setTitle(event.target.value) } />
                    { isTitleError && (<span className="error-message">Title is required!</span>) }
                </div>
                <div className="form-control">
                    <label>Task Description <strong>*</strong></label>
                    <textarea cols={ 5 } rows={ 10 } placeholder="Add Task Description" value={ description } onChange={ (event) => setDescription(event.target.value) } />
                    { isDescriptionError && (<span className="error-message">Description is required!</span>) }
                </div>
                <div className="form-control">
                    <label>Priority</label>
                    <select value={ priority } onChange={ (event) => setPriority(Number(event.target.value)) }>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <input type="submit" value="Submit" className="btn" />
            </form>
        </div>
        
    )
};

export default AddTask;