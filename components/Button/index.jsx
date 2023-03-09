const Button = ({ title, type, classname, onclick, style }) => {
    return (
      <button type={type} className={classname} style={style} onClick={onclick}>
        {title}
      </button>
    );
  };
  
  export default Button;