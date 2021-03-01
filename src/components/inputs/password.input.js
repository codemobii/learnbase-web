import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsEyeFill, BsEyeSlashFill, BsLock } from 'react-icons/bs';

export default function PasswordInput({
  title = 'Password',
  value = '',
  onChange = () => {},
}) {
  const [show, setShow] = useState(false);

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={<BsLock />} />
      <Input
        value={value}
        onChange={onChange}
        type={show ? 'text' : 'password'}
        placeholder={title}
      />
      <InputRightElement
        onClick={() => setShow(!show)}
        children={show ? <BsEyeSlashFill /> : <BsEyeFill />}
      />
    </InputGroup>
  );
}
