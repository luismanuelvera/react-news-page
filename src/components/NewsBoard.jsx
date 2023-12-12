import { useEffect } from "react";
import { useState } from "react"
import NewsItem from "./NewsItem";

export const newsboard = ({ category, region, searchQuery }) => {

  const [articles, setArticles] = useState([])

  const regions = [
    { code: 'us', name: 'United States' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'ca', name: 'Canada' },
    { code: 'mx', name: 'Mexico' },
    { code: 'cn', name: 'China' },
    { code: 'jp', name: 'Japan' },
    { code: 'de', name: 'Germany' },
    { code: 'fr', name: 'France' },
    { code: 'br', name: 'Brazil' },
    { code: 'ar', name: 'Argentina' },
  ];

  function getRegion(code) {
    var region = regions.find(e => e.code === code)
    if (region != undefined)
      return region.name;
    return undefined
  }

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${region}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
    if (searchQuery == "")
      fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
  }, [category, region])

  useEffect(() => {
    let url = `https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-11-12&sortBy=popularity&apiKey=${import.meta.env.VITE_API_KEY}`
    if (searchQuery != null)
      fetch(url).then(response => response.json()).then(data => setArticles(data.articles))
  }, [searchQuery])

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span> on {getRegion(region)}</h2>
      <h2 className="text-center">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      {articles.map((news, index) => {
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}></NewsItem>
      })}
    </div>
  )
}

export default newsboard;