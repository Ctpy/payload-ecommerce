'use client';

import { createContext, SetStateAction, useContext, useState } from 'react';

interface IContextType {
  categoryFilters: string[];
  setCategoryFilters: React.Dispatch<SetStateAction<string[]>>;
  sort: string;
  setSort: React.Dispatch<SetStateAction<string>>;
}

export const INITIAL_FILTER_DATA = {
  categoryFilters: [],
  setCategoryFilters: () => [],
  sort: '',
  setSort: () => '',
};

const FilterContext = createContext<IContextType>(INITIAL_FILTER_DATA);

export const FilterProdivder = ({ children }: { children: React.ReactNode }) => {
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [sort, setSort] = useState('');
  return (
    <FilterContext.Provider value={{ categoryFilters, setCategoryFilters, sort, setSort }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
