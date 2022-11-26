function NewsArticleList({ articles }) {
    // console.log(articles);
    return (
        <>
            <h1>List of News Articles</h1>
            {articles.length === 0 ? (
                <div>loading</div>
            ) : (
                articles.map(article => (
                    <div key={article.id}>
                        <p>
                            {article.id} {article.title} | {article.category}
                        </p>
                    </div>
                ))
            )}
        </>
    )
}

export default NewsArticleList

export async function getServerSideProps() {
    const response = await fetch('http://localhost:3000/api/test');
    const data = await response.json();

    return {
        props: {
            articles: data,
        }
    }
}