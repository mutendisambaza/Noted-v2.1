import React, { useState } from 'react';
import { Footer } from '../components/Footer/Footer';
import { SignInCard } from '../components/AuthCards/SignInCard';
import {useDocumentTitle} from '../hooks/useEffectHooks';

export default function SignPage (){
  useDocumentTitle('Noted | Sign In');
  return (
    <>
      <SignInCard />
      {/* <Footer /> */}
    </>
  );
}

