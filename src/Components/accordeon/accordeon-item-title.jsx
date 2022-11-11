import { useContext } from "react";
import { AccordeonItemContext } from "./accordeon-item-context";
import styles from "./accordeon.module.scss";

export const AccordeonItemTitle = ({ children }) => {
    const { toggle } = useContext(AccordeonItemContext);
    return (
        <div className={styles['accordeon-item-title']} onClick={toggle}>
            {children}
        </div>
    );
};