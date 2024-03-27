'use client';
import React from 'react';
import { set } from 'react-hook-form';

import { Category } from '../../../../payload/payload-types';
import { Checkbox } from '../../../_components/Checkbox';
import { HR } from '../../../_components/HR';
import { RadioButton } from '../../../_components/RadioButton';
import { useFilterContext } from '../../../_providers/Filter';

import classes from './index.module.scss';

const Filters = ({ categories }: { categories: Category[] }) => {
  const { categoryFilters, sort, setCategoryFilters, setSort } = useFilterContext();
  const handleCategories = (category: string) => {
    if (categoryFilters.includes(category)) {
      setCategoryFilters(categoryFilters.filter(item => item !== category));
      return;
    } else {
      setCategoryFilters([...categoryFilters, category]);
    }
  };
  const handleSort = (value: string) => {
    setSort(value);
  };
  return (
    <div className={classes.filters}>
      <div>
        <h6 className={classes.title}>Product Categories</h6>
        <div className={classes.categories}>
          {categories.map(category => {
            const isSelected = categoryFilters.includes(category.id);
            return (
              <Checkbox
                key={category.id}
                label={category.title}
                value={category.id}
                isSelected={isSelected}
                onClickHandler={handleCategories}
              />
            );
          })}
        </div>
        <HR className={classes.hr} />
        <h6 className={classes.title}>Sort By</h6>
        <div className={classes.categories}>
          <RadioButton
            label="latest"
            value="-createdAt"
            isSelected={sort === '-createdAt'}
            onRadioChange={handleSort}
            groupName="sort"
          />
          <RadioButton
            label="oldest"
            value="createdAt"
            isSelected={sort === 'createdAt'}
            onRadioChange={handleSort}
            groupName="sort"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
