import Article from "./Article";

function ArticleList (){
    const articles = [

        {title:"Matematica discreta", content: "Principio di induzione"},
        {title:"Algoritmi", content: "Big O notation"},
        {title:"Algoritmi", content: "Bubble sort"}

    ]
    return (
        <>
        <h1>Articoli:</h1>
        {articles.map((article,index)=>(
            <Article key ={index} title={article.title} content={article.content}/>
        ))}
        </>
    ) 
}

export default ArticleList