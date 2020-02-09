import React, { Component } from 'react';
import Result from './ResultComponent';


class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            search: '',
            images: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState(
            {search: event.target.value}
        )
    }
    async handleSubmit(event) {
        let keyword = this.state.search;
        let GIPHY_KEY = '1bHTrKJ3Yt6q67hfuuog4YrwJOpQRoOB';
        event.preventDefault();
        this.setState({images:await fetch(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${GIPHY_KEY}&limit=21`).then (response => response.json())})
        //console.log(this.state.images);
    }
   
    render(){
        return(
            <div>
                <h1>GIPHY Search</h1>
                <form id="searchform" onSubmit={this.handleSubmit}>
                    <label>
                        Search:
                        <input type="search" id="searchgif" value={this.state.search} onChange={this.handleChange}/>
                    </label>
                    <label>
                        <input type="submit" id="searchbutton" value="submit" />
                    </label>
                </form>
                <Result images={this.state.images.data}/>
            </div>
        )
    }
}

export default Main;