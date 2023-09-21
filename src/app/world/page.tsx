import { getNewsSearch } from "@/api"
import Article from "@/components/Article"
import { removeDuplicateData } from "@/utils"

const World = async () => { 
    const newsWorld = await getNewsSearch("world")
    const filterArticles = removeDuplicateData(newsWorld)

    return ( 
        <div className="w-[700px]">
          {filterArticles.map((articles, idx) => ( 
            <div key={`${articles?.title}-${idx}`}>
                <Article data={articles} />
            </div>
          ))}
        </div>
    )
}

export default World