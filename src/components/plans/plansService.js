import {service} from '../../utilities/service'

const servicesApi = {
    getAllPlans: () => 
        service()
        .get('api/plans')
        .then(response => response.data)
        .catch(error => error)
}

export default servicesApi;