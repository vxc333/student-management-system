import { Router } from 'express';
import * as studentController from '/home/hipolito/restful-api-node-typescript/src/controllers/ClientController';

const router = Router();

router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);
router.post('/', studentController.createStudent);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);

export default router;
