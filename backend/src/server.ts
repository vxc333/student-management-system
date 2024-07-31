import Express from "express";
import StudentController from "./controllers/StudentController";
const cors = require("cors");

const app = Express();
app.use(Express.json());
const PORT = 3333;
app.use(cors());
app.post("/estudantes", StudentController.createStudent);

app.get("/estudantes/:id", StudentController.listStudentById);

app.get("/estudantes", StudentController.listStudents);

app.put("/estudantes/:id", StudentController.updateStudent);

app.delete("/estudantes/:id", StudentController.deleteStudent);

app.listen(PORT, () => {
  console.log(`Servidor rodando! ${PORT}`);
});
