import {service} from '../../utilities/service'

const servicesApi = {
  getUserChildrenByFatherId: async (fatherId) =>{
    try {
      const response = await service()
        .get(`api/userMembers?fatherId=${fatherId}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default servicesApi;