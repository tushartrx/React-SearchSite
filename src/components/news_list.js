import React from 'react';

//components
import NewsItem from './news_list_item';

const NewsList = (props) => {

    const items = props.news.map((item) => {
        return(

                <NewsItem key={item.id} items={item}/>

        )
    })

    return(
        <div>
            {items}
        </div>
    )
}


export default NewsList;