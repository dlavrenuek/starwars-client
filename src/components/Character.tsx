import React, { useState } from "react";
import styled from "styled-components";
import Friends from "./Friends";

export type CharacterBasics = {
  id: string;
  name: string;
};

const Container = styled.div`
  border: 1px solid #999;
  padding: 10px;
  margin-bottom: 1em;
`;

const Header = styled.h2`
  margin: 0;
`;

const FriendsHeader = styled.button`
  width: 100%;
  box-sizing: content-box;
  display: block;
  border: 0;
  border-radius: 0;
  padding: 10px 10px;
  margin: 5px -10px;
  text-align: left;
`;

const Character = ({ id, name }: CharacterBasics) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Header>
        {name} <small>(#{id})</small>
      </Header>
      <FriendsHeader onClick={() => setOpen(!open)}>
        Friends [{open ? "-" : "+"}]
      </FriendsHeader>
      {open && <Friends id={id} />}
    </Container>
  );
};

export default Character;
