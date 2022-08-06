import React from 'react'
import './article.css'

function Article({ imgUrl,date,title }) {
  return (
    <div className='gpt3-blog-container-article'>
        <div className='gpt3-blog-container-article-image'>
            <img src={imgUrl} alt='blogImage' />
        </div>
        <div className='gpt3-blog-container-article-content'>
            <div>
              <p>{date}</p>
              <h3>{title}</h3>
            </div>
            <p>Read Full Article</p>
        </div>
    </div>
  )
}

export default Article