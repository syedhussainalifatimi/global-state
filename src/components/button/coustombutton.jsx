import Styles from './coustombutton.module.css'
const CoustomButton = ({ children }) => {
  return (
    <>
      <button className={Styles.button}>{children}</button>
    </>
  )
};
export default CoustomButton;
