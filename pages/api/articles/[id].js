import {articles} from '../../../data'


const handler=(req,res)=>{
    const {id} = req.query
    const getAriticleById=articles.filter(article=>article.id===id)
    if(getAriticleById.length>0){
        res.status(200).send(getAriticleById[0])
    }else{
        res.status(404).send({message: `article ${id} not found`})
    }
}

export default handler
