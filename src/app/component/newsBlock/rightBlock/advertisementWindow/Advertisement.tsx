import styles from "./advertisment.module.css";


export function Advertisment({ }) {

    return <aside className={styles.background}>
        {/* <div className={styles.background}> */}
        <div className={styles.header}>
            <p className={styles.titleHref}>
                Ссылка на сайт
            </p>
            <p className={styles.titleAdv}>
                РЕКЛАМА
            </p>
        </div>
        <div className={styles.windows}></div>
        <p className={styles.desc}>
            Текст длинного рекламного объявления
        </p>
    </aside>
    {/* </div> */ }


}