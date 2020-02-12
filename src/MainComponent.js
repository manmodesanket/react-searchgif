import React, { Component } from 'react';
import Result from './ResultComponent';
import {GIPHY_KEY} from './GiphyKey';
import { Form, Label, Input} from 'reactstrap';

/*function RenderImages({images}){
    if(images != null){
        images.forEach((image)=>{
            return(
                <div>
                   Hello
                </div>
            )
        });
    }
    else{
        return(
            <div></div>
        )
    }
}*/


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
        let KEY = GIPHY_KEY;
        event.preventDefault();
        this.setState({images:await fetch(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${KEY}&limit=21`).then (response => response.json())})
        //console.log(this.state.images);
    }
   
    render(){
        return(
            <div className="col-12">
                <h1>GIPHY Search</h1>
                <Form id="searchform" onSubmit={this.handleSubmit}>
                    <Label>
                        Search:
                        <Input type="search" id="searchgif" placeholder="Serach" value={this.state.search} onChange={this.handleChange}/>
                    </Label>
                    <Label>
                        <Input type="submit" id="searchbutton" value="submit" />
                    </Label>
                    <Result data={this.state.images.data}/>
                </Form>
            </div>
        )
    }
}

export default Main;