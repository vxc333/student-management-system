import { Request, Response } from 'express';
import * as studentService from '../services/student.service';
import { IStudent } from '../interfaces/student.interface';

export const getAllStudents = (req: Request, res: Response): void => {
    const students = studentService.getAllStudents();
    res.status(200).json(students);
};

export const getStudentById = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    const student = studentService.getStudentById(id);
    if (!student) {
        res.status(404).send('Student not found');
    } else {
        res.status(200).json(student);
    }
};

export const createStudent = (req: Request, res: Response): void => {
    const newStudent: IStudent = req.body;
    const student = studentService.createStudent(newStudent);
    res.status(201).json(student);
};

export const updateStudent = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    const updatedStudent: IStudent = req.body;
    const student = studentService.updateStudent(id, updatedStudent);
    if (!student) {
        res.status(404).send('Student not found');
    } else {
        res.status(200).json(student);
    }
};

export const deleteStudent = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    const success = studentService.deleteStudent(id);
    if (!success) {
        res.status(404).send('Student not found');
    } else {
        res.status(204).send();
    }
};
