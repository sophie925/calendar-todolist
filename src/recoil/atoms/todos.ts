import { atom } from "recoil";

export interface TodoType {
    id: number;
    done: boolean;
    text: string;
}

export const todoListState = atom<TodoType[]>({
    key: 'todoListState',
    default: []
});