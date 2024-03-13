import styles from "./styles.module.css"
import Img from "../../assets/img/disc.png"
// import styled from "styled-components";
import {useForm} from "react-hook-form"
import { useState } from "react";

const Discount = () => {
  const onSubmit = (data) => {
    setSubmitted(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitted, setSubmitted] = useState(false);

  return (
    <div className={styles.div_discount}>
      <p className={styles.p_title}>5% off on the first order</p>
      <div className={styles.div_img_form}>
        <img className={styles.image} src={Img} alt="img" />
        <div className={styles.div_Form}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Name"
              {...register("name", {
                required: "This field is required",
                minLength: {
                  value: 3,
                  message: "Minimum length is 3 symbols!",
                },
                maxLength: {
                  value: 10,
                  message: "Maximum length is 10 symbols!",
                },
              })}
            />
            <p className={styles.error}>
              {errors.name && <p>{errors.name.message}</p>}
            </p>
            <input
              type="text"
              placeholder="Phone number"
              {...register("phone_number", {
                required: "This field is required.",
                minLength: {
                  value: 6,
                  message: "Minimum length is 6",
                },
                maxLength: {
                  value: 10,
                  message: "Maximum 8 numbers",
                },
              })}
            />
            <p className={styles.error}>
              {errors.phone_number && <p>{errors.phone_number.message}</p>}
            </p>

            <input
              type="text"
              placeholder="Email"
              {...register("email", {
                required: "This field is required",
                minLength: {
                  value: 7,
                  message: "Minimum length is 7",
                },
                maxLength: {
                  value: 8,
                  message: "Maximum is 8",
                },
              })}
            />
            <p className={styles.error}>
              {errors.email && <p>{errors.email.message}</p>}
            </p>
            <button>Get a discount</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Discount;

//как работает errors - это обект с ключами 
//где каждый ключ это элеиент из формы 