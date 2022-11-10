import styles from "./accordeon.module.scss";

export const AccordeonItemBody = ({ children }) => {
    return (
        <div className={styles['accordeon-item-body']}>
            {children}
        </div>
    );
};