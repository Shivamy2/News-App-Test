import React, {useState, useEffect} from 'react'
import axios from 'axios'

const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () =>{
            const response = axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=e1dddccd2050482d8b766badbef18689')
            console.log(response)
        }
        
    }, []);

  return (
    <div></div>
  )
}

export default NewsList