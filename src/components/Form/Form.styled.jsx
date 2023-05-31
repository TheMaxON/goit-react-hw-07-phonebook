import styled from '@emotion/styled';
import { IconButton } from 'rsuite';
import PlusIcon from '@rsuite/icons/Plus';

export const InputContainer = styled.form`
  margin: 15px auto;
`;

export const Label = styled.label`
  display: block;
  margin: 0 7px 17px 7px;
  font-size: 23px;
  font-weight: 700;
  color: var(--color-accent);
`;

export const InputStyle = styled.input`
  width: 97%;
  margin: 7px auto;
  padding: 7px 10px;
  border-radius: 5px;
  border: none;
  border-bottom: 2px solid var(--color-accent);
  outline: none;
  display: block;
  font-size: 18px;
  color: white;
  background-color: var(--color-secondary);

  :hover,
  :focus,
  :active {
    outline: 2px solid var(--color-accent);
  }
`;

export const Button = styled(IconButton)`
  margin: 10px 10px 0 15px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
`;
