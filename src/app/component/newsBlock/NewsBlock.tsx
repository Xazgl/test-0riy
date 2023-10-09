import { SideBar } from "./leftSideBar/SideBar";
import styles from "./news.module.css";
import { RightNewsBlock } from "./rightBlock/RightNewsBlock";


export function NewsBlock({ }) {


    return <section className={styles.background}>
        {/* Left side page */}
        <SideBar />
        {/* Right side page */}
        <RightNewsBlock />
    </section>

}