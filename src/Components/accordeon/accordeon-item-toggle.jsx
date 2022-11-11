import { useContext } from "react";
import { AccordeonItemContext } from "./accordeon-item-context";
import styles from "./accordeon.module.scss";

export const AccordeonItemToggle = () => {
    const { toggle } = useContext(AccordeonItemContext);
    return (
        <div className={`${styles['accordeon-item-toggle']} flex align-items-center`}>
            <div className="icon-s chevron-right-thin color-background-secondary right"
                onClick={toggle}></div>
        </div>
    );
};