import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//components
import Header from './components/header';
import NewsList from './components/news_list';

//import db json
import JSON from './db';
class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            news : JSON,
            filtered : JSON
        }
    }

    filterNews(keyword){
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keyword) > -1;
        })

        this.setState({filtered})
    }


    render(){
        return(
            <div>
                <Header newsSearch={keyword=>this.filterNews(keyword)}/>
                <NewsList news={this.state.filtered}/>
            </div>
        )
    }
}


ReactDOM.render(<App/>,document.querySelector('#root'));