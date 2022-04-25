import {service} from '../../utilities/service'


const servicesApi = {
    login: (data) => 
        service()
        .post('api/security', data)
        .then(response => response.data)
        .catch(error => error),
    getUserDataByEmail: (email) => 
        service()
        .get(`api/contactInfo?email=${email}`)
        .then(response => response.data)
        .catch(error => error)
}

export default servicesApi;