import Styles from './coustombutton.module.css'
const CoustomButton = (props) => {
  return (
    <>
      <button className={Styles.button} onClick={props.onClick}>{props.children}</button>
    </>
  )
};
export default CoustomButton;
