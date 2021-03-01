import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';

export default function FormInput({
  title = '',
  icon = null,
  type = 'text',
  value = '',
  onChange = () => {},
  disabled = false,
}) {
  return (
    <InputGroup variant="outline">
      {icon && <InputLeftElement pointerEvents="none" children={icon} />}
      <Input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={title}
        disabled={disabled}
      />
    </InputGroup>
  );
}
