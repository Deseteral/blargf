import { performance } from "perf_hooks";
import signale from "signale";
import getData, { type BlargfData } from "../data/data-service";
import renderLostLove from "../views/lost-love/render";
import type { BunRequest } from "bun";

const RENDERERS: { [key: string]: (data: BlargfData) => string } = {
  "lost-love": renderLostLove,
};
const DEFAULT_RENDERER = renderLostLove;

function viewsEndpoint(req: BunRequest<"/views/:viewName">) {
  const viewName = req.params.viewName;

  const timeStart = performance.now();
  const data = getData();
  const html = (RENDERERS[viewName] || DEFAULT_RENDERER)(data);
  const renderTime = performance.now() - timeStart;

  signale.info(`Render took ${renderTime} ms`);

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Server-Timing": `render;dur=${renderTime};desc="Render"`,
    },
  });
}

export { viewsEndpoint };
