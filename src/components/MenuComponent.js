import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardImgOverlay} from "reactstrap";
import Dishdetail from "./DishdetailComponent";

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
    }

    // 渲染
    render(){

        const menu = this.props.dishes.map((dish) =>{
            return(
                <div key={dish.name} className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={()=>this.OnDishSelect(dish)} >

                        <CardImg width="100%" src={dish.image} alt={dish.name} />

                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });

        return(
            <div className="container">

                <div className="row">
                    {menu}
                </div>

                <Dishdetail dishSelect={this.state.selectedDish}></Dishdetail>


            </div>
        );
    }
}

export default Menu;