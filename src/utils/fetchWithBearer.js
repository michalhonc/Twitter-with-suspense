export const fetchWithBearer = (url) => {
    return fetch(url + '&apiKey=49619d09dc984c91bddbcbdf02c43c6e', {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TWITTER_BEARER_TOKEN}`,
        },
    });
};
