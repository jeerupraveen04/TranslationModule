import express, { Request, Response } from "express";
import cors from "cors";

const startServer = () => {
  const PORT = process.env.PORT || 3000;

  const app = express();
  app.disable("x-powered-by");

  app.use(express.json());
  app.use(cors());

  app.get("/", (req: Request, res: Response) => {
    res.send("Hello from Express + TypeScript + CORS 🚀");
  });

  app.get("/translate", (req: Request, res: Response) => {
    res.json({ status: "ok", message: "Server is healthy ✅" });
  });

  app.listen(PORT, () => {
    console.log(`CAPS-BE Server running at PORT: ${PORT}`);
  });
};

export { startServer };

