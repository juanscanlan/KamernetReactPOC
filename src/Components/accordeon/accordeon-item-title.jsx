import styles from "./accordeon.module.scss";

export const AccordeonItemTitle = ({ children }) => {
    return (
        <div className={styles['accordeon-item-title']}>
            {children}
        </div>
    );
};