import {articles} from '../../../data'

const handler=(req,res)=>{
    res.status(200).send(articles)
}

export default handler
