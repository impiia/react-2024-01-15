import classNames from "classnames";
import styles from "./styles.module.scss";

export const Loader = ({className}) => {
   return <div className={classNames(styles.root, className)}></div>;
};