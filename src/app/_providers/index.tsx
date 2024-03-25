'use client';

import React from 'react';

import { AuthProvider } from '../_providers/Auth';
import { CartProvider } from '../_providers/Cart';
import { FilterProdivder } from './Filter';
import { ThemeProvider } from './Theme';

export const Providers: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <FilterProdivder>
          <CartProvider>{children}</CartProvider>
        </FilterProdivder>
      </AuthProvider>
    </ThemeProvider>
  );
};
