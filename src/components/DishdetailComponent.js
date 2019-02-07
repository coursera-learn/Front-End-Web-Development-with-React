import React, { Component } from "react";
import { Card, CardImg, CardBody,CardText, CardTitle} from "reactstrap";

class Dishdetail extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    // formatDate({ date }) {
    //     return new Date(date).toLocaleDateString("en-US", {
    //       year: "numeric",
    //       month: "short",
    //       day: "numeric"
    //     });
    //   }

    //渲染点击Card
    renderDish(dish) {
        // console.log(dish)
        if (dish != null) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    renderComments(comment){
        // console.log(comments)
        if (comment != null) {

            let list = comment.map((comment)=>{

                return(
                    <li key={comment.id} >
                        <div>
                            <p>{comment.comment}</p>
                            <p>--{comment.author},
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </div>
                    </li>

                )
            })

            return(
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {list}
                        </ul>
                    </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    render(){

        // console.log(this.props.dishSelect)
        const {dish} = this.props;
        console.log(this.props);

        return dish?(
            <div className="container">
                <div className="row">
                        {this.renderDish(dish)}
                        {this.renderComments(dish.comments)}
                </div>
            </div>
        ):(
            <div></div>
        )
    }

}

export default Dishdetail