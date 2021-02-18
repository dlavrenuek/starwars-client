import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import Character from "./Character";

export type FriendsProps = {
  id: string;
};

const GET_FRIENDS = gql`
  query($id: ID!) {
    character(id: $id) {
      friends {
        id
        name
      }
    }
  }
`;

type Friend = {
  id: string;
  name: string;
};

type GetFriendsResponse = {
  character: {
    friends: Friend[];
  };
};

const Wrapper = styled.div`
  padding: 10px;
`;

const Friends = ({ id }: FriendsProps) => {
  const { loading, error, data } = useQuery<GetFriendsResponse>(GET_FRIENDS, {
    variables: {
      id,
    },
  });

  console.log(loading, error, data);

  if (loading) return <span>Loading</span>;

  if (!data) return <span>No friends</span>;

  return (
    <Wrapper>
      {data?.character.friends.map((friend) => (
        <Character {...friend} />
      ))}
    </Wrapper>
  );
};

export default Friends;
