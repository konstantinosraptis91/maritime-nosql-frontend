import axios from 'axios';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 28/12/2020.
 */

const instance = axios.create({
    baseURL: 'http://localhost:9000/'
});

export default instance;