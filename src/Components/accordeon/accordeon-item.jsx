import styles from "./accordeon.module.scss";

export const AccordeonItem = ({ children }) => {
    return (
        <div className={styles['accordeon-item']}>
            {children}
        </div>
    );
};