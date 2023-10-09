import dynamic from "next/dynamic";
import { ReadAlso } from "../../readAlsoBlock/ReadAslo";
import { Incidents } from "../../readMore/Incidents";
import { Advertisment } from "./advertisementWindow/Advertisement";
import { NewsFeed } from "./newsFeed/NewsFeed";

// const NewsFeed = dynamic(() => import('./newsFeed/NewsFeed'), { ssr: false });

export function RightNewsBlock({ }) {

    return <section className={'flex w-full lg:w-5/6 h-auto flex-col gap-3'}>
        <div className={'flex  flex-col  w-full h-auto  gap-3 lg:flex-row  '}>
            <NewsFeed />
            <Advertisment />
        </div>
        <div className={'flex w-full h-auto '}>
            <ReadAlso />
        </div>
        <div className={'flex w-full h-auto'}>
            <Incidents />
        </div>


    </section>

}