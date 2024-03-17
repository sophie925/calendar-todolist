import { selector } from "recoil";
import { todoListState } from "../atoms/todos";

export const todoSortState = selector({
    key: 'todoSortState',
    get: ({ get }) => {
        const data = get(todoListState);
        const result = data.filter((v) => v.done !== true);
        return result;
    }
});