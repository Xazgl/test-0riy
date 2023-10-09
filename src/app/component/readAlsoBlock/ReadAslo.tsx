import styles from "./readAlso.module.css";


export function ReadAlso({ }) {


    const ReadAlsoNewsArr = [
        {
            title: 'Синоптик спрогнозировал срок наступления бабьего лета',
            createdAt: '1.01.2023, 13:53',
            newsType: 'Политика',
            like: 23,
            angry: 23,
            dislike: 23,
            comment: 7,
            favoriteAdd: 14

        },
        {
            title: 'Дмитрий Медведев проголосовал онлайн на выборах мэра Москвы',
            createdAt: '1.01.2023, 13:53',
            newsType: 'Политика',
            like: 23,
            angry: 23,
            dislike: 23,
            comment: 7,
            favoriteAdd: 14

        },
        {
            title: 'Раскрыты последствия уничтожения беспилотника в небе над Подмосковьем',
            createdAt: '1.01.2023, 13:53',
            newsType: 'Политика',
            like: 23,
            angry: 23,
            dislike: 23,
            comment: 7,
            favoriteAdd: 14
        },
        {
            title: 'Невролог назвала основные способы лечения мигрени',
            createdAt: '14:59',
            newsType: 'Политика',
            like: 23,
            angry: 23,
            dislike: 23,
            comment: 7,
            favoriteAdd: 14
        }
    ]

    return <section className={styles.background}>
        <div className={styles.title}>
            <h3>Читайте также </h3>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 17.5L15 12.5L10 7.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
        <div className={styles.cards}>
            {ReadAlsoNewsArr.map((item, index) => (
                <div className={styles.card} key={index}>
                    <div className={styles.cardHeader}>
                        <button className={styles.newsType}> {item.newsType} </button>
                        <p className={styles.newsDate}>{item.createdAt}</p>
                    </div>
                    <div className={styles.cardTitle}>
                        {item.title}
                    </div>

                    <div className={styles.reaction}>
                        <div className={styles.emotion}> <div/>
                            😍{item.like}
                        </div>
                        <div className={styles.emotion}> <div/>
                            😡{item.angry}
                        </div>
                        <div className={styles.emotion}> <div/>
                            💩{item.dislike}
                        </div>
                        <div className={styles.interactions}> <div/>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00016 13.4004C11.3145 13.4004 14 11.1618 14 8.40039C14 5.63903 11.3145 3.40039 8.00016 3.40039C4.68582 3.40039 2.00032 5.63903 2.00032 8.40039C2.00032 9.49698 2.42434 10.5112 3.14259 11.3379C3.04163 11.6049 2.89164 11.8407 2.73299 12.0396C2.59453 12.2157 2.45319 12.3521 2.34934 12.4458C2.29742 12.4913 2.25416 12.5282 2.22531 12.551C2.21089 12.5623 2.19935 12.5708 2.19358 12.5737L2.18781 12.5794C2.02916 12.6958 1.95993 12.9004 2.02339 13.085C2.08685 13.2697 2.26281 13.4004 2.46184 13.4004C3.09067 13.4004 3.72527 13.2413 4.25314 13.0453C4.51852 12.9458 4.76659 12.835 4.98293 12.7214C5.86848 13.1532 6.89826 13.4004 8.00016 13.4004Z" fill="#848484" />
                            </svg>
                            {item.comment}
                        </div>
                        <div className={styles.interactions}> <div/>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.33398 14V3.33333C3.33398 2.96667 3.46465 2.65267 3.72598 2.39133C3.98732 2.13 4.3011 1.99956 4.66732 2H11.334C11.7007 2 12.0147 2.13067 12.276 2.392C12.5373 2.65333 12.6678 2.96711 12.6673 3.33333V14L8.00065 12L3.33398 14Z" fill="#848484" />
                            </svg>
                            {item.favoriteAdd}
                        </div>
                    </div>
                </div>

            ))}
        </div>

    </section>

}