import React from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
import Link from 'next/link'
import {server} from '../../../config'
import Meta from "../../../components/Meta";

const article = ({article}) => {
    // const router = useRouter()
    // const {id}=router.query

    return (
        <>
            <Meta title={article.title} description={article.excerpt} />
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br/>
            <Link href='/'>Go Back</Link>
        </>
    );
};

// export const getStaticProps= async (context)=>{
//     const res=await axios.get(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//
//     const article=res.data
//
//     return {
//         props: {
//             article
//         }
//     }
// }

export const getStaticProps= async (context)=>{
    const res=await axios.get(`${server}/api/articles/${context.params.id}`)

    const article=res.data

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async ()=>{
    const res=await axios.get(`${server}/api/articles`)

    const articles=res.data
    const ids = articles.map(article=>article.id)
    const paths=ids.map(id => ({params: {id:id.toString()}}))

    return {
        paths,
        fallback: false
    }
}

export default article;
