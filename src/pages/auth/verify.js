import React, { useEffect, useState } from 'react';
import FormInput from '../../components/inputs/form.input';
import AuthLayout from '../../components/layouts/auth.layout';
import { BsEnvelopeFill } from 'react-icons/bs';
import SolidButton from '../../components/buttons/solid.button';

export default function Verify() {
  // State managers
  const [code, setCode] = useState('');
  const [pin, setPin] = useState('');

  // Pass data to function
  const data = {
    PTN: parseFloat(pin),
    code: parseFloat(code),
  };

  return (
    <AuthLayout
      title="Steechit | Verify account"
      page="Verify"
      desc="Sign up to your account using email and password provided during registration."
    >
      <FormInput
        title="Verification code"
        icon={<BsEnvelopeFill />}
        type="number"
        value={code}
        onChange={e => setCode(e.target.value)}
      />
      <SolidButton size="md" wide={true} title="Continue" />
    </AuthLayout>
  );
}
