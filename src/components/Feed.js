import React from 'react';
import './Feed.css';

import { wrapPromise } from '../utils/wrapPromise';
import { fetchWithBearer } from '../utils/fetchWithBearer';

const fetchFeed = async () => {
    const result = await fetchWithBearer('https://newsapi.org/v2/top-headlines?country=us').then(r => r.json());
    return result;
}

const resource = wrapPromise(fetchFeed);

const Feed = () => {
    const feed = resource.read();
    return (
        <div className="Feed">
            <h2>Feed</h2>
            {feed.articles.map((article) => (
                <div>
                    <img src={article.urlToImage} width="50" height="50" />
                    <h3>{article.author}</h3>
                    <span>{new Date() - new Date(article.publishedAt)}</span>
                    <p>{article.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Feed;
