import React,{Component} from 'react';
import { Media, Container, Row, Col  } from 'reactstrap';
import './Result.css';


class Result extends Component{
    RenderImage(url,title,id){
        //console.log(url);
        return(
            <div key={id}>
                <Col>
                    <Media object src={url} alt={title} className="image"/>
                </Col>
            </div>
        )   
    }
    render(){
        let images = [];
        if(this.props.data!=null)
        {
            images = this.props.data;
        }
        return(
            <div>
                GIF's
                <Container>
                    {images.map(image => this.RenderImage(image.images.original.url,image.title,image.id))}
                </Container>
            </div>
        )
    }
}
export default Result;