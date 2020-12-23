import React, {Component} from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Navigation/Footer/Footer';
import Modal from '../../components/UI/Modal/Modal';

import classes from './Layout.module.css';
import PrivacyPolicy from "../../components/Navigation/Footer/PrivacyPolicy/PrivacyPolicy";

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 22/12/2020.
 */

class Layout extends Component {

    state = {
        showSideDrawer: false,
        showPrivacy: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    //  clean way to use this.state in setState
    sideDrawerToggleHandler = () => {
        this.setState(prevState => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    privacyHandler = () => {
        this.setState({showPrivacy: true});
    }

    privacyCancelHandler = () => {
        this.setState({showPrivacy: false});
    }


    render() {

        return (
            <Auxiliary>
                <Modal show={this.state.showPrivacy}
                       closeModal={this.privacyCancelHandler}>
                    <PrivacyPolicy />
                </Modal>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <Footer showPrivacy={this.privacyHandler}/>
            </Auxiliary>
        );
    }
}

export default Layout;