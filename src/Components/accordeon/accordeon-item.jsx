import { useState } from "react";
import { AccordeonItemContext } from "./accordeon-item-context";
import { AccordeonItemToggle } from "./accordeon-item-toggle";
import styles from "./accordeon.module.scss";

export const AccordeonItem = ({ children, className }) => {
    const toggle = () => {
        setAccordeonItemState(pre => ({ ...pre, collapsed: !pre.collapsed }));
    };
    const [accordeonItemState, setAccordeonItemState] = useState({
        collapsed: true,
        toggle
    });
    return (
        <AccordeonItemContext.Provider value={accordeonItemState}>
            <div className={`${styles['accordeon-item']} ${className}`}>
                <AccordeonItemToggle />
                {children}
            </div>
        </AccordeonItemContext.Provider>
    );
};