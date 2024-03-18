import { atom } from "recoil";

export interface dateType {
    currDate: Date;
    selectDate: Date;
}

export const dateState = atom<dateType>({
    key: 'dateState',
    default: {
        currDate: new Date(),
        selectDate: new Date(),
    }
});