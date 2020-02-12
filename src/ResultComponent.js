import React,{Component} from 'react';
import { Media } from 'reactstrap';
import Gallery from 'react-grid-gallery';
import './Result.css';


class Result extends Component{
    RenderImage(url,title,id){
        //console.log(url);
        return(
            <div key={id}>
                <div>
                    <Media object src={url} alt={title}/>
                </div>
            </div>
        )   
    }
    render(){
        let images = [];
        if(this.props.data!=null)
        {
            images = this.props.data;
        }
        let resultArray = [];
        images.map(image =>{
            let object = {src:image.images.original.url, thumbnail:image.images.original.url, thumbnailWidth:"200px",caption:image.title, 
            id:image.id}
            resultArray = [ ...resultArray, object ];
        });
        //console.log(resultArray);
        return(
            <div>
                GIF's
                <Gallery images={resultArray}/>
            </div>
        )
    }
}
export default Result;