import React, { Component } from "react";
import { Media } from "reactstrap";
import { Card, CardImg, CardBody,CardText, CardTitle, CardImgOverlay} from "reactstrap";

class Menu extends Component {

    // 继承父类
    constructor(props){
        super(props);
        this.state = {
            selectedDish: null
        };
    }

    // 获取点击Card的Dish 数据
    OnDishSelect(dish){
        // 设置state.seleceDish 值为 所点击数据
        this.setState({selectedDish:dish})
        console.log(this.state.selectedDish)
    }

    //渲染点击Card
    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else{
            return(
                <div></div>
            )

        }
    }

    // 渲染
    render(){

        const menu = this.props.dishes.map((dish) =>{
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={()=>this.OnDishSelect(dish)} >

                        <CardImg width="100%" src={dish.image} alt={dish.name} />

                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })

        return(
            <div className="container">

                <div className="row">
                    {menu}
                </div>

                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>

            </div>
        );
    }
}

export default Menu;