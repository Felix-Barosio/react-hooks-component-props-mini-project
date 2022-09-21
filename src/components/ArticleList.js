import React from 'react';
import Article from './Article';

function ArticleList({ posts }) {
    const myArticle = posts.map((eachPost) => (
        <Article key={eachPost.id} title={eachPost.title} date={eachPost.date} />
    ));

    return <main>{myArticle}</main>
}


export default ArticleList;