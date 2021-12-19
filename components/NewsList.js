import React from 'react'
import NewsItem from './NewsItem'


function NewsList({newsResults}) {
 
    return (
        <div className='bg-gray-700 max-w-6xl mx-auto mt-10 rounded-lg'>
           {newsResults.data[0].screen_data.news.map(result=>(
               <NewsItem key={result.news_ID} {...result}/>
           ))}
        </div>
    )
}

export default NewsList
