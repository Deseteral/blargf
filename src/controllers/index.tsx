import express from "express";
import { performance } from "perf_hooks";
import signale from "signale";
import getData, { BlargfData } from "../data/data-service";
import renderLostLove from "../views/lost-love/render";

const indexController = express.Router();

const renderers: { [key: string]: (data: BlargfData) => string } = {
  "lost-love": renderLostLove,
};

indexController.get("/", (req, res) => {
  const viewParam = req.query.view as string;
  const render = renderers[viewParam] || renderLostLove;

  const timeStart = performance.now();
  const data = getData();
  const html = render(data);
  const renderTime = performance.now() - timeStart;

  res.set("Server-Timing", `render;dur=${renderTime};desc="Render"`);
  res.send(html);

  signale.info(`Render took ${renderTime} ms`);
});

export default indexController;
