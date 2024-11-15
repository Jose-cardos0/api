import { Router, Request, Response } from "express";

const router = Router();

//exemplo http://localhost:3333/tarefas

router.get("/tarefas", (req: Request, res: Response) => {
  res.json({
    message: "Minha primeira api",
    aluno: "jose",
  });
});

export { router };
