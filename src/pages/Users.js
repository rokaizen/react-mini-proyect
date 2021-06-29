import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Pane } from "evergreen-ui";

function Users(props) {
  const history = useHistory();
  function handleClick() {
    history.push("/");
    // window.location.href = "/users";
  }
  return (
    <>
      <Pane>
        <div>Usuarios</div>
        <Button onClick={handleClick} marginRight={16} appearance="primary">
          Home
        </Button>
      </Pane>
    </>
  );
}

export default Users;
