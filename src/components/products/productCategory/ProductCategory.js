import { Checkbox } from '../../ui/Checkbox/Checkbox';
import './ProductCategory.scss';

export const ProductCategory = () => {
  return (
    <div className="category-list">
      <h2 className="heading-secondary">Category</h2>
      <div className="category">
        <Checkbox label="People" />
        <Checkbox label="Premium" />
        <Checkbox label="Pets" />
        <Checkbox label="Food" />
        <Checkbox label="Landmarks" />
        <Checkbox label="Cities" />
        <Checkbox label="Nature" />
      </div>
      <div className="price-range">
        <h2 className="heading-secondary">Price range</h2>
        <Checkbox label="Lower than $20" />
        <Checkbox label="$20 - $100" />
        <Checkbox label="$100 - $200" />
        <Checkbox label="More than $200" />
      </div>
    </div>
  );
};
