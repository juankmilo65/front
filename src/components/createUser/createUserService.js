import {service} from '../../utilities/service'

const servicesApi = {
    createUser: ({user, language}) => 
        service()
        .post(`api/users?language=${language}`, user)
        .then(response => response.data)
        .catch(error => error)
}

export default servicesApi;