import React, {useState, useEffect} from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 28/12/2020.
 */

const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
        const [errorState, setErrorState] = useState({error: null});

        const errorClearHandler = () => {
            setErrorState({error: null});
        }

        const errorRaiseHandler = (error) => {
            setErrorState({error: error});
        }

        useEffect(() => {
            //  creating interceptors initially when the page loads
            const reqInterceptor = axios.interceptors.request.use(response => {
                errorClearHandler();
                return response;
            });
            const resInterceptor = axios.interceptors.response.use(response => response,
                error => {
                    errorRaiseHandler(error);
                });
            //  ejecting the interceptors after the components unmount
            return () => {
                console.log(`Component is about to unmount. Interceptors killed: ${reqInterceptor} and ${resInterceptor}`);
                axios.interceptors.request.eject(reqInterceptor);
                axios.interceptors.request.eject(resInterceptor);
            };
        }, []);

        return (
            <Auxiliary>
                <Modal show={errorState.error}
                       closeModal={errorClearHandler}>
                    {errorState.error ? errorState.error.message : null}
                </Modal>
                <WrappedComponent {...props}/>
            </Auxiliary>
        );
    }

};

export default withErrorHandler;