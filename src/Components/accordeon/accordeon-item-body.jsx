import { useContext } from "react";
import { AccordeonItemContext } from "./accordeon-item-context";
import styles from "./accordeon.module.scss";

export const AccordeonItemBody = ({ children }) => {
    const { collapsed } = useContext(AccordeonItemContext);
    return (
        <div className={`${styles['accordeon-item-body']} ${collapsed ? styles['collapsed'] : "spacer-v--s"}`}>
            {children}
        </div>
    );
};