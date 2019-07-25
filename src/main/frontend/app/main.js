import React from "react";
import ReactDom from "react-dom";

import WidgetIndex from "./pages/WidgetIndex";
import WidgetShow from "./pages/WidgetShow";

const pageMap = {
  "widget-index": WidgetIndex,
  "widget-show": WidgetShow
}


for(const domId in pageMap) {
  if(document.getElementById(domId)) {
    const Component = pageMap[domId]
    ReactDom.render(<Component />,document.getElementById(domId))
  }
}


