import { I_Task } from './interfaces';

export type T_Tasks = I_Task[];

export type T_NavbarItemProps = {
    link: string,
    text: string,
    icon: any,
    isAction?: never,
    onClick?: never,
} | {
    link?: never,
    text: string,
    icon: any,
    isAction: boolean,
    onClick: any,
};

export type T_FilteredTasks = {
    [key: string]: T_Tasks,
};