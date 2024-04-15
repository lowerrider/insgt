import cn from "./Button.module.scss";

export const Button = ({ text, onClick }) => {
  return (
    <div>
      <button className={cn.cybrBtn} onClick={onClick}>
        <span>{text}</span>
        <span className={cn.cybrBtn__glitch}>{text}</span>
        {/* <span aria-hidden className={cn.cybrBtn__tag}>
          R25
        </span> */}
      </button>
      {/* <button className={cn.cybrBtn}>
        <span>Документы</span>
        <span className={cn.cybrBtn__glitch}>Документы</span>
      </button> */}
    </div>
  );
};
