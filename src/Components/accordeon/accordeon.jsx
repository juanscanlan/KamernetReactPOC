import styles from "./accordeon.module.scss";

export const Accordeon = ({ children }) => {
    return (
        <div className={styles['accordeon']}>
            {children}
        </div>
    );
};