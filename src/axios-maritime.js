import axios from 'axios';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 28/12/2020.
 */

const apiURL = '/msc/ais/maritime/api';

const instance = axios.create({
    //  using localhost for internal development
    // baseURL: `http://localhost:9001${apiURL}`,
    //  using msc-ais for production
    baseURL: `https://maritime.msc-ais.site${apiURL}`,
    headers: {
        'limit': 40,
    }
});

export default instance;