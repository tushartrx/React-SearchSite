import React from 'react';


const NewsItem = ({items}) => {
    return(
        <div className='news_item'>
            <h3>{items.title}</h3>
            <div>
                {items.feed}
            </div>
        </div>
    )
}


export default NewsItem;