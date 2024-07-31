import { prisma } from "../database";

class StudentService {
  async createStudent(data: { name: string; email: string ; age: number}) {
    const { name, email , age } = data;
    const studentExist = await prisma.student.findUnique({
      where: { email },
    });

    if (studentExist) {
      throw new Error("Erro: Email já existe!");
    }

    const student = await prisma.student.create({
      data: { name, email , age},
    });

    return student;
  }

  async listStudentById(id: number) {
    const student = await prisma.student.findUnique({
      where: { id },
    });

    if (!student) {
      throw new Error("Error: Estudante não encontrado!");
    }

    return student;
  }

  async listStudents() {
    const students = await prisma.student.findMany();

    if (!students || students.length === 0) {
      throw new Error("Error: Nenhum estudante encontrado!");
    }

    return students;
  }

  async updateStudent(id: number, data: { name: string; email: string ; age: number}) {
    const { name, email,age } = data;

    const studentExist = await prisma.student.findUnique({
      where: { id },
    });

    if (!studentExist) {
      throw new Error("Error: Estudante não encontrado!");
    }

    const existingEmail = await prisma.student.findUnique({
      where: { email },
    });

    if (existingEmail && existingEmail.id !== id) {
      throw new Error("Erro: Email já existe!");
    }

    const updatedStudent = await prisma.student.update({
      where: { id },
      data: { name, email , age},
    });

    return updatedStudent;
  }

  async deleteStudent(id: number) {
    const studentExist = await prisma.student.findUnique({
      where: { id },
    });

    if (!studentExist) {
      throw new Error("Error: Estudante não encontrado!");
    }

    const deletedStudent = await prisma.student.delete({
      where: { id },
    });

    return deletedStudent;
  }
}

export default new StudentService();
