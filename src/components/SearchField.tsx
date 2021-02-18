import styled from "styled-components";
import React from "react";

export type SearchFieldProps = {
  onChange: (input: string) => void;
};

const Input = styled.input`
  width: 100%;
`;

const SearchField = ({ onChange }: SearchFieldProps) => (
  <Input onChange={(e) => onChange(e.target.value)} />
);

export default SearchField;
