import React, { useState } from 'react';
import { Footer } from '../components/Footer/Footer';
import { RegisterCard } from '../components/AuthCards/RegisterCard';
import {useDocumentTitle} from '../hooks/useEffectHooks';

export default function SignPage (){
  useDocumentTitle('Noted | Register');
  return (
    <>
      <RegisterCard />
      {/* <Footer /> */}
    </>
  );
}

