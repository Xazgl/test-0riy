
import { SideBarElArr } from "../newsBlock/leftSideBar/el"
import styles from "./coruselNews.module.css";
import Link from 'next/link'



export function CarouselNews({ }) {


    return (

        <nav className={styles.background}>
            <ul
                className={styles.slides}
            >
                {SideBarElArr.map((item, index) => (
                    <Link href="/" key={index}>
                        <li className={styles.slide} key={index}>
                            {item.title}
                        </li>
                    </Link>
                ))}

            </ul>
        </nav>
    )
}