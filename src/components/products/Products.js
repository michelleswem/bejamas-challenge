import { Fragment } from 'react';

import { FeaturedProduct } from './featured/';
import { AvailableProducts } from './availableProducts';

export const Products = () => {
  return (
    <Fragment>
      <FeaturedProduct />
      <AvailableProducts />
    </Fragment>
  );
};
