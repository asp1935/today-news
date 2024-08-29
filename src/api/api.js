const apiKey = '1dd8c20de21c4cc0ae56a966cffdc6e4';
// console.log(apiKey);

const fetchNews = async (page,searchQ,category) => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${searchQ}&language=en&category=${category}&pageSize=16&page=${page}&apiKey=${apiKey}`);
    const data = await response.json();
    // console.log(data);
    return data;
};

export { fetchNews };
