import React from "react";
import { Heading, Paragraph, Card, Pane } from "evergreen-ui";

function UserInfo(props) {
  return (
    <>
      <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
        <Pane padding={16} borderBottom="muted">
          <Heading size={600}>{props.name}</Heading>
          <Paragraph size={400} color="muted">
            Optional description or sub title
          </Paragraph>
        </Pane>
      </Pane>
      <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
        <Card
          backgroundColor="white"
          elevation={0}
          height={240}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Heading>Some content</Heading>
        </Card>
      </Pane>
    </>
  );
}

export default UserInfo;
