import { atom } from "recoil";

export interface dateType {
    currDate: Date;
    selectDate: Date;
}

export const setDate = (d: Date): Date => {
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    const newDate = `${year} ${month} ${date}`

    return new Date(newDate);
}

export const dateState = atom<dateType>({
    key: 'dateState',
    default: {
        currDate: setDate(new Date()),
        selectDate: setDate(new Date()),
    }
});
