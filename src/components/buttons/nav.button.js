import { Button } from '@chakra-ui/react';
import React from 'react';

export default function NavButton({
  title,
  onClick = () => {},
  variant = 'ghost',
  m = '',
  d = 'flex',
  icon = false,
  color = 'telegram',
}) {
  return (
    <Button
      m={m}
      d={d}
      size="sm"
      rounded="full"
      variant={variant}
      colorScheme={color}
      onClick={onClick}
      leftIcon={icon && icon}
    >
      {title}
    </Button>
  );
}
