'use client';

import React from 'react';
import Link from 'next/link';

import { Category, Media } from '../../../../payload/payload-types';
import { useFilterContext } from '../../../_providers/Filter';

import classes from './index.module.scss';

const CategoryCard = ({ category }: { category: Category }) => {
  const media = category.media as Media;
  const { setCategoryFilters } = useFilterContext();
  return (
    <Link
      href="/products"
      className={classes.card}
      style={{ backgroundImage: `url(${media.url})` }}
      onClick={() => setCategoryFilters([category.id])}
    >
      <p className={classes.title}>{category.title}</p>
    </Link>
  );
};

export default CategoryCard;
