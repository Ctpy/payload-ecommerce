'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Media } from '../../../_components/Media';
import { Price } from '../../../_components/Price';

import classes from './index.module.scss';
import { RemoveFromCartButton } from '../../../_components/RemoveFromCartButton';

const CartItem = ({ product, title, metaImage, quantity, addItemToCart }) => {
  const [quantityState, setQuantityState] = useState(quantity);

  const decrementQuantity = () => {
    setQuantityState(quantityState - 1);
    addItemToCart(product, quantityState - 1);
  };

  const incrementQuantity = () => {
    setQuantityState(quantityState + 1);
    addItemToCart(product, quantityState + 1);
  };

  const enterQuantity = e => {
    const value = parseInt(e.target.value, 10);
    if (value < 1) {
      setQuantityState(1);
      addItemToCart(product, 1);
    } else {
      setQuantityState(value);
      addItemToCart(product, value);
    }
  };

  return (
    <li className={classes.item} key={title}>
      <Link href={`/products/${product.slug}`} className={classes.mediaWrapper}>
        {!metaImage && <span>No Image</span>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media imgClassName={classes.media} className={classes.media} resource={metaImage} fill />
        )}
      </Link>
      <div className={classes.itemDetails}>
        <div className={classes.titleWrapper}>
          <h6>{title}</h6>
          <Price product={product} button={false} />
        </div>
        <div className={classes.quantity}>
          <div className={classes.quantityBtn} onClick={decrementQuantity}>
            <Image
              src="/assets/icons/minus.svg"
              alt="minus"
              width={24}
              height={24}
              className={classes.qtnBtn}
            />
          </div>
          <input
            type="text"
            className={classes.quantityInput}
            value={quantityState}
            onChange={enterQuantity}
          />
          <div className={classes.quantityBtn} onClick={incrementQuantity}>
            <Image
              src="/assets/icons/plus.svg"
              alt="plus"
              width={24}
              height={24}
              className={classes.qtnBtn}
            />
          </div>
        </div>
      </div>
      <div className={classes.subtotalWrapper}>
        <Price product={product} button={false} quantity={quantityState} />
        <RemoveFromCartButton product={product} />
      </div>
    </li>
  );
};

export default CartItem;
