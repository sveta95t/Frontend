import React, { useState } from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { sortByValueAction, toggleDiscountFilterAction } from '../../../store/reducers/productsReducer';

// Импорты и начальное состояние

function ProductsFilter() {
    // Состояния для фильтрации
    const [filterByDiscount, setFilterByDiscount] = useState(false);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
  
    const dispatch = useDispatch();
  
    // Обработчик изменения сортировки
    const handleSortChange = (e) => {
      const { value } = e.target;
      dispatch(sortByValueAction(value));
    };
  
    // Обработчик изменения фильтрации по скидке
    const handleDiscountFilterChange = () => {
      const newFilterValue = !filterByDiscount;
      setFilterByDiscount(newFilterValue);
      dispatch(toggleDiscountFilterAction(newFilterValue));
    };
  
    // Обработчик изменения диапазона цен
    const handlePriceRangeChange = (e) => {
      const { name, value } = e.target;
      if (name === 'min') {
        setMinPrice(value);
      } else if (name === 'max') {
        setMaxPrice(value);
      }
    };
  
    return (
      <div className={styles.filtered_Products}>
        {/* Форма фильтрации */}
        <div>
          <label> Price</label>
          <input
            type="number"
            name="min"
            placeholder="from"
            value={minPrice}
            onChange={handlePriceRangeChange}
          />
        <input
          type="number"
          name="max"
          placeholder="to"
          value={maxPrice}
          onChange={handlePriceRangeChange}
          />
          </div>
        <div>
          <label>Discounted items </label>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={filterByDiscount}
            onChange={handleDiscountFilterChange}
          />
        </div>
        <label>Sorted</label>
        <select onChange={handleSortChange}>
          <option value="default">by default</option>
          <option value="newest">newest</option>
          <option value="price-high-low">price: high-low</option>
          <option value="price-low-high">price: low-high</option>
        </select>
      </div>
    );
  }
  
  export default ProductsFilter;
  