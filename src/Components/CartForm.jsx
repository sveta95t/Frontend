import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate вместо useHistory

function CartForm({ totalItems, cartTotal, emptyCart }) {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate(); // Используем useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Сброс ошибок, если поле изменено
    setFormErrors({
      ...formErrors,
      [name]: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Форма прошла валидацию - здесь можно отправить данные
      console.log('Form data:', formData);
      // Перенаправление на другую страницу
      emptyCart();
      navigate('/PaymentSuccess'); // Используем navigate для перенаправления
    } else {
      // Форма содержит ошибки
      setFormErrors(errors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    // Проверка на пустые поля
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!data.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }
    return errors;
  };

  return (
    <form className="cart-form" onSubmit={handleSubmit}>
      <h2 className="cart-form-title">Order details</h2>
      <h3 className="cart-form-itemsCount">{totalItems} items</h3>
      <h3 className="cart-form-cartTotal">Total: <span className="cart-form-totalPrice">${cartTotal}</span></h3>
      <input
        className="cart-input"
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      {formErrors.name && <p className="error-message">{formErrors.name}</p>}
      <input
        className="cart-input"
        type="number"
        name="phoneNumber"
        placeholder="Phone number"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      {formErrors.phoneNumber && <p className="error-message">{formErrors.phoneNumber}</p>}
      <input
        className="cart-input"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      {formErrors.email && <p className="error-message">{formErrors.email}</p>}
      <button type='submit' className="cart-btn">Order</button>
    </form>
  );
}

export default CartForm;
