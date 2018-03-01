import axios from 'axios';

export default {
    getVillians: function () {
        return axios.get('https://jdtorregrosasapi.herokuapp.com/enemies');
    }
};