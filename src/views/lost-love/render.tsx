import React from "react";
import { ServerStyleSheet } from "styled-components";
import { type BlargfData } from "../../data/data-service";
import ReactDOMServer from "react-dom/server";
import PageRoot from "./page-root/PageRoot";

function render(data: BlargfData): string {
  const sheet = new ServerStyleSheet();
  const html = ReactDOMServer.renderToStaticMarkup(sheet.collectStyles(<PageRoot data={data} />));

  return sheet.getStyleTags() + html;
}

export default render;
