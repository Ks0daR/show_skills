import { useState } from "react";
import styles from "./InputForm.module.css";

const InputForm = () => {
  const [value, setValue] = useState("");

  const handleInput = ({ target: { value } }) => {
    setValue(value);
  };
  return (
    <div className={styles.inputContainer}>
      <input className={styles.input} value={value} onChange={handleInput} />
    </div>
  );
};

export default InputForm;
