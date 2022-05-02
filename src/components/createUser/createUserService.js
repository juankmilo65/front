import {service} from '../../utilities/service'

const servicesApi = {
    createUser: (data) => 
        service()
        .post('api/users', data)
        .then(response => response.data)
        .catch(error => error)
}

export default servicesApi;