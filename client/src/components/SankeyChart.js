import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "6978708c94a4f1d2";

function Notebook() {
  const viewofLinkColorRef = useRef();
  const chartRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "viewof linkColor") return new Inspector(viewofLinkColorRef.current);
      if (name === "chart") return new Inspector(chartRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={viewofLinkColorRef} />
      <div ref={chartRef} />
      <p className="credit-tag">Credit: <a href="https://observablehq.com/d/6978708c94a4f1d2@707">Sankey Types to Intermediaries by Lucas&#039;s Workspace</a></p>
    </>
  );
}

export default Notebook;