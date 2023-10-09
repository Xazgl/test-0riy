
import { SideBarElArr } from "./el";
import styles from "./sidebar.module.css";
import React from 'react';
import { CarouselNews } from "../../coruselNews/CoruselNews";
import Link from 'next/link'

export function SideBar({ }) {




    return <>
        <nav className={styles.background} id={styles.desktop}>
            <ul>
                <Link href="/" >
                    <li className={styles.headerSideBar}>
                        <div className={styles.iconElDiv}>
                            <div className="width: 16px; height: 28.42px; left: 8px; top: 2.37px; position: absolute; background: #FF6B00">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2224 30.7902L13.5337 17.3631L8 16.7805L9.7522 2.36914L21.7717 3.43313L18.5366 11.3716L24 12.3406L12.2224 30.7902Z" fill="#FF6B00" />
                                </svg>
                            </div>
                        </div>
                        <div className="color: white; font-size: 18px; font-family:var(--font-roboto); font-weight: 400; word-wrap: break-word">Лента</div>
                    </li>
                </Link>

                {/* sidebar elemets */}
                {SideBarElArr.map((item, index) => (
                    <Link href="/" key={index}>
                        <li className={styles.sideBarEl} key={index}>
                            <div className={styles.iconElDiv} dangerouslySetInnerHTML={{ __html: item.svg }} />
                            <div className={styles.elTitle}>{item.title}</div>
                        </li>
                    </Link>
                ))}

            </ul>
        </nav>


        <CarouselNews />
    </>
}