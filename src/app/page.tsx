import { Footer } from "./component/footer/Footer";
import { Bar } from "./component/mainBar/Bar";
import { NewsBlock } from "./component/newsBlock/NewsBlock";
import styles from "./page.module.css";
import "server-only"

export default async function Home() {
  // const user = await db.users.find()

  // const user = await (await fetch('/find')).json()
  return (
    <>
          <Bar />
          <NewsBlock />
          <Footer />
    </>
  )
}

