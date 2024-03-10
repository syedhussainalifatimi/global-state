import Styles from './input.module.css';

const Input = ({ children, textarea, handleChange, value }) => {
  return (
    <>
      {textarea ? (
        <textarea placeholder={children} className={Styles.textarea} onChange={handleChange} value={value}></textarea>
      ) : (
        <input type="text" placeholder={children} className={Styles.inputbox} onChange={handleChange} value={value} />
      )}
    </>
  );
};

export default Input;


