import React from "react";
import { Pane } from "evergreen-ui";
import Header from "../components/Header";

function DefaultLayout(props) {
  return (
    <>
      <Pane width={500} margin="auto">
        <Header />

        <div>{props.children}</div>
      </Pane>
    </>
  );
}

export default DefaultLayout;
