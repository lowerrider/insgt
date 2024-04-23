import classNames from "classnames";
import cn from "./Insight.module.scss";

export const Insight = ({ style }) => {
  return (
    <h2
      class={classNames(cn.hero, cn.glitch, cn.layers)}
      dataText="INSIGHT"
      style={style}>
      INSIGHT
    </h2>
  );
};
