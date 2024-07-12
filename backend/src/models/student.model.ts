import { IStudent } from '../interfaces/student.interface';

let students: IStudent[] = [];

export const findAll = (): IStudent[] => students;

export const findById = (id: number): IStudent | undefined => {
    return students.find(student => student.id === id);
};

export const create = (student: IStudent): IStudent => {
    students.push(student);
    return student;
};

export const update = (id: number, updatedStudent: IStudent): IStudent | null => {
    const index = students.findIndex(student => student.id === id);
    if (index === -1) return null;
    students[index] = updatedStudent;
    return updatedStudent;
};

export const remove = (id: number): boolean => {
    const index = students.findIndex(student => student.id === id);
    if (index === -1) return false;
    students.splice(index, 1);
    return true;
};
