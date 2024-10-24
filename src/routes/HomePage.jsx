import React, { useState } from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { Hero } from '../components/Hero/Hero';
import {useDocumentTitle} from '../hooks/useEffectHooks';

export default function HomePage() {
  useDocumentTitle('Noted | mcsLabs');
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}

