import { atom } from "recoil";

export interface ITodo {
    id: number;
    done: boolean;
    text: string;
}

export const todoListState = atom<ITodo[]>({
    key: 'todoListState',
    default: []
});