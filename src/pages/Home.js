import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, SideSheet, Text, TextInput, Pane } from "evergreen-ui";
import UserInfo from "../components/UserInfo";

function Home(props) {
  const [formValues, setFormValues] = useState({
    name: "",
    lastName: "",
    age: "",
  });

  const [user, setUser] = useState(null);

  const history = useHistory();
  function handleClick() {
    history.push("/users");
    // window.location.href = "/users";
  }
  function onChangeValue(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }
  function onClear() {
    setFormValues({
      name: "",
      lastName: "",
      age: "",
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(formValues);
    setUser(formValues);
    onClear();
  }

  const [isShown, setIsShown] = useState(false);
  return (
    <>
      {/* <div>HOME</div>
      <Button onClick={handleClick} marginRight={16} appearance="primary">
        usuarios
      </Button> */}
      <Pane
        elevation={1}
        padding={15}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <form onSubmit={onSubmit}>
          <TextInput
            onChange={onChangeValue}
            value={formValues.name}
            required
            name="name"
            placeholder="Nombre"
            marginBottom={10}
          />
          <TextInput
            onChange={onChangeValue}
            value={formValues.lastName}
            required
            name="lastName"
            placeholder="Apellido"
            marginBottom={10}
          />
          <TextInput
            onChange={onChangeValue}
            value={formValues.age}
            required
            name="age"
            placeholder="Edad"
            type="number"
            marginBottom={10}
          />

          <Button type="submit">Guardar</Button>
        </form>
      </Pane>
      {user && (
        <>
          <SideSheet
            isShown={isShown}
            onCloseComplete={() => setIsShown(false)}
          >
            <UserInfo
              name={user.name}
              lastName={user.lastName}
              age={user.age}
            />
          </SideSheet>
          <Text
            onClick={() => setIsShown(true)}
          >{`${user.name} ${user.lastName}`}</Text>
          <Button onClick={() => setUser(null)}>Eliminar</Button>
        </>
      )}
    </>
  );
}

export default Home;
