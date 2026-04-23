import express from "express";
import { executeSaga } from "./engine";
import { getSaga } from "./store";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());

app.post("/saga/start", async (req, res) => {
  const saga = {
    id: uuidv4(),
    steps: req.body.steps,
    currentStep: 0,
    status: "pending",
    data: req.body.data
  };

  executeSaga(saga);
  res.json({ sagaId: saga.id });
});

app.get("/saga/:id", async (req, res) => {
  const saga = await getSaga(req.params.id);
  res.json(saga);
});

app.listen(3000, () => console.log("Orchestrator running"));
