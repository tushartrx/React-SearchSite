import React,{Component} from 'react';

class Header extends Component{

    constructor(props){
        super(props);

        this.state = {
            keyword: ''
        }

    }


    inputChnage(event){
        this.setState({keyword:event.target.value})
        this.props.newsSearch(event.target.value)


    }

    render(){
        return(
            <header>
                <div className='logo' onClick={() => console.log('clicked')}>Search Here</div>
                <input onChange={this.inputChnage.bind(this)}/>
            </header>
        )
    }
}


export default Header;