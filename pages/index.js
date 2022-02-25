
import axios from 'axios'
import ArticleList from "../components/ArticleList";
import {server} from '../config'

export default function Home({articles}) {
  return (
    <div>
        <ArticleList articles={articles} />
    </div>
  )
}


// export const getStaticProps= async (context)=>{
//     const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//     const articles=res.data
//     return {
//         props: {
//             articles
//         }
//     }
// }

export const getStaticProps= async (context)=>{
    const res = await axios.get(`${server}/api/articles`)
    const articles=res.data
    return {
        props: {
            articles
        }
    }
}
