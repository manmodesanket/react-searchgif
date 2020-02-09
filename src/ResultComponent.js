import React,{Component} from 'react';


/*function appendImage(img){
    let gifs = document.getElementById("result");
    let div = document.createElement('div');
    div.className = "img-wrapper";
    let div1 = document.createElement('div');
    div1.className = "inner";
    div1.appendChild(img);
    div.appendChild(div1);
    gifs.appendChild(div);
}*/

/*function resultfun(images){
    //result.
    /*for(let i=0;i<images.length;i++)
    {
        let img = new Image();
        img.src = images[i].url;
        console.log(img)
    }
    //console.log(images.length);
    console.log(images);
}*/



function result(images){
    
    if(images!=null)
    {
        images.forEach((image) => {
            let img = new Image();
            img.src = image.url;
            img.alt = image.title
            console.log(img)
        });
    }
    //console.log(images);
}

class Result extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                GIF's
                <div className="container col-12">{result(this.props.images)}</div>
            </div>
        )
    }
}
export default Result;