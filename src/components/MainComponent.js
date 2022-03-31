import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent'

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders,postFeedback } from '../redux/ActionCreators';
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from 'react-transition-group';




const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
const mapDispatchToProps = dispatch => ({
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedBackForm: () => {dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),

  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message)),

});



class Main extends Component {

  componentDidMount(){
    // 请求数据
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  render() {

    // Home
    const HomePage = () => {
      console.log(this.props.leaders)
      return(
        <Home 
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}

          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promoLoading={this.props.promotions.isLoading}
          promoErrMess={this.props.promotions.errMess}

          leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
          leaderLoading={this.props.leaders.isLoading}
          leaderErrMess={this.props.leaders.errMess}
        />
      );
    }
    // AboutUs
    const AboutPage = () => {
      return(
        <About 
        leaders={this.props.leaders.leaders}
        isLoading={this.props.leaders.isLoading}
        errMess={this.props.leaders.errMess}
        />
      );
    }
    // Contact
    const ContactPage = () => {
      return(
        <Contact 
        resetFeedBackForm={this.props.resetFeedBackForm}
        postFeedback={this.props.postFeedback}
        />
      );
    }
            
    const DishWithId = ({match}) => {
      return(
          <DishDetail 
            dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            commentsErrMess={this.props.comments.errMess}
            postComment={this.props.postComment}
          />
      );
    }
            
    return (
      <div>
        <Header />
        <div>
          <TransitionGroup>
              <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                <Switch location={this.props.location}>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/aboutus' component={AboutPage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/contactus' component={ContactPage} />} />
                    <Redirect to="/home" />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));