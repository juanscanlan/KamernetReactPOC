import { useContext } from "react";
import { AccordeonItemContext } from "./accordeon-item-context";
import styles from "./accordeon.module.scss";

export const AccordeonItemToggle = () => {
    const { toggle, collapsed } = useContext(AccordeonItemContext);
    return (
        <div className={`${styles['accordeon-item-toggle']} flex align-items-center`}>
            <div className={`${collapsed ? '' : styles['accordeon-item-toggle-turn-90']} icon-s chevron-right-thin color-background-secondary right`}
                onClick={toggle}></div>
        </div>
    );
};