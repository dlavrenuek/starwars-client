import { gql, useQuery } from "@apollo/client";
import Character, { CharacterBasics } from "./Character";
import React from "react";

const GET_CHARACTERS = gql`
  query {
    characters {
      id
      name
    }
  }
`;

const Characters = () => {
  const { loading, error, data } = useQuery<{ characters: CharacterBasics[] }>(
    GET_CHARACTERS
  );

  console.log(loading, error, data);

  return (
    <>
      <h1>Star Wars characters</h1>
      {loading && <div>Loading</div>}
      {data &&
        data.characters.map((character) => (
          <Character {...character} key={character.id} />
        ))}
    </>
  );
};

export default Characters;
