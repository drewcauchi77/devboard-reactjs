import { T_Tasks } from './types';

export interface I_TaskState {
    tasks: T_Tasks,
    filteredTasks: I_FilteredTasks,
};

export interface I_StatusState {
    isMenuCollapsed: boolean,
};

export interface I_Task {
    id: number,
    title: string,
    description: string,
    priority: number,
    status: string,
};

export interface I_TasksListProps {
    tasks: T_Tasks,
    taskStatus: string,
};

export interface I_TaskProps {
    task: I_Task,
};

export interface I_FilteredTasks {
    [key: string]: T_Tasks,
};