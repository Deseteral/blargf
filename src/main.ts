import signale from "signale";

signale.config({ displayTimestamp: true });

import { getConfig } from "./config";
import { viewsEndpoint } from "./endpoints/views";

const server = Bun.serve({
  port: getConfig().server.port,
  routes: {
    "/code.js": () => new Response(Bun.file("./dist/code.js")),
    "/views/:viewName": viewsEndpoint,
  },
});

signale.start(`blargf server started on port ${server.port}`);
