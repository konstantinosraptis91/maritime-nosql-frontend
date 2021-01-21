import React from 'react';
import {FaGithub, FaFacebook} from 'react-icons/all';
import classes from './FooterContent.module.css';
import Button from '../../../UI/Button/Button';
import Logo from "../../../Logo/Logo";

const footerContent = props => {
    const container = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <div className={classes.FooterContent}>
            <Logo logoType="papeiLogo"/>
            <div style={container}>
                Ακολουθήστε μας:
                <a
                    href="https://github.com/users/konstantinosraptis91/projects/1"
                    target="_blank"
                    rel="noreferrer">
                    <FaGithub className={classes.Icon}/>
                </a>
                <a
                    href="https://www.facebook.com/groups/1435532373324124"
                    target="_blank"
                    rel="noreferrer">
                    <FaFacebook className={classes.Icon}/>
                </a>
            </div>
            <div>
                <Button clicked={props.clicked}
                        btnType="Link">
                    Πολιτική Απορρήτου
                </Button>
            </div>
        </div>
    );
}

export default footerContent;