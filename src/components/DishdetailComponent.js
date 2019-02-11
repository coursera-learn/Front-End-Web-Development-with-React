import React from "react";
import { Card, CardImg, CardBody,CardText, CardTitle} from "reactstrap";

    // formatDate({ date }) {
    //     return new Date(date).toLocaleDateString("en-US", {
    //       year: "numeric",
    //       month: "short",
    //       day: "numeric"
    //     });
    //   }

    //渲染点击Card
    function RenderDish({dish}) {
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

    function RenderComments({comments}){
        // console.log(comments)
        if (comments != null) {

            let list = comments.map((comments)=>{

                return(
                    <li key={comments.id} >
                        <div>
                            <p>{comments.comment}</p>
                            <p>--{comments.author},
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
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

    const DishDetail = (props) => {

        // console.log(props);

        // return props.dish?(
        //     <div className="container">
        //         <div className="row">
        //                 <RenderDish dish={props.dish} />
        //                 <RenderComments comments={props.dish.comments} />
        //         </div>
        //     </div>
        // ):(
        //     <div></div>
        // )
        if (props.dish != null) {
            return(
                <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
            )
        }else{
            return(
                <div></div>
            )
        }

    }



export default DishDetail