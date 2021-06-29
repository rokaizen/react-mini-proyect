import React from "react";
import { Pane, Heading } from "evergreen-ui";

function Header() {
  return (
    <>
      <Pane display="flex" alignItems="center" marginY={24}>
        <Heading flex={1}> Test App</Heading>
      </Pane>
    </>
  );
}

export default Header;
