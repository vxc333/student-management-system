import * as studentModel from '../models/student.model';
import { IStudent } from '../interfaces/student.interface';

export const getAllStudents = (): IStudent[] => {
    return studentModel.findAll();
};

export const getStudentById = (id: number): IStudent | undefined => {
    return studentModel.findById(id);
};

export const createStudent = (student: IStudent): IStudent => {
    return studentModel.create(student);
};

export const updateStudent = (id: number, student: IStudent): IStudent | null => {
    return studentModel.update(id, student);
};

export const deleteStudent = (id: number): boolean => {
    return studentModel.remove(id);
};
