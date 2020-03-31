import React, { Component } from 'react';
import Result from './ResultComponent';
import {GIPHY_KEY} from './key/GiphyKey';
import { Navbar, NavbarBrand, Form, Input, Label, Button } from 'reactstrap';


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
            images: {},
            isNavOpen: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
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
        this.setState({images:await fetch(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${KEY}&limit=20`).then (response => response.json())})
        //console.log(this.state.images);
    }
    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
    }   
    render(){
        return(
            <div className="col-12">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">GIPHY Search</NavbarBrand>
                        <Form id="searchform" onSubmit={this.handleSubmit} inline>
                            <Label>
                                <Input type="search" id="searchgif" placeholder="Search" value={this.state.search} onChange={this.handleChange}/>
                            </Label>
                            <Label>
                                <Button>Submit</Button>
                            </Label>
                        </Form>
                    </div>
                </Navbar>
                <Result data={this.state.images.data}/>
            </div>
        )
    }
}

export default Main;