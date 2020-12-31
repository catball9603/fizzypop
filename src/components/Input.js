import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const TextInputBox = styled.TextInput`
  background-color: #fff;
  padding: 10px 20px;
  margin: 0 30px;
  border-radius: 25px;
`;

function Input({ placeholder, value, onChange, onSubmit }) {
  return (
    <TextInputBox
      value={value}
      onChangeText={onChange}
      onSubmitEditing={onSubmit}
      placeholder={placeholder}
      returnKeyType={'search'}
    ></TextInputBox>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Input;
