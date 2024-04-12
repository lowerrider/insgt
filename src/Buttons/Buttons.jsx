import cn from "./Buttons.module.scss";

export const Buttons = () => {
  return (
    <div>
      <button className={cn.cybrBtn}>
        <span className={cn.spaner}>О нас</span>
        <span className={cn.cybrBtn__glitch}>О нас</span>
        {/* <span aria-hidden className={cn.cybrBtn__tag}>
          R25
        </span> */}
      </button>
      <button className={cn.cybrBtn}>
        <span>Документы</span>
        <span className={cn.cybrBtn__glitch}>Документы</span>
        {/* <span className={cn.cybrBtn__tag}>R25</span> */}
      </button>
    </div>
  );
};
