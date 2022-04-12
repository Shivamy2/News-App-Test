import React, { useState, useEffect } from "react";
import NewsCards from "./NewsCards";
import axios from "axios";

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [loadMore, setLoadMore] = useState(4);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=e1dddccd2050482d8b766badbef18689"
      );
      setLoading(false);

      //start
      console.log(response.data);
      setArticles(response.data?.articles);
      //end
    };

    //start
    getArticles();
    //end
  }, []);

  return loading ? (
    <div className="text-center mt-10 text-2xl font-bold">Loading...</div>
  ) : (
    // start
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center pt-10">
        {articles?.slice(0, loadMore)?.map((item, index) => {
          return (
            <div key={index}>
              <NewsCards data={item} />
            </div>
          );
        })}
      </div>
      {articles.length > 4 && articles.length !== loadMore && (
        <div
          className="cursor-pointer bg-red-600 px-4 py-2 rounded-full font-bold text-white text-sm max-w-max mx-auto my-8"
          onClick={() => setLoadMore((prev) => prev + 4)}
        >
          Load More
        </div>
      )}
    </div>
    // end
  );
};

export default NewsList;
