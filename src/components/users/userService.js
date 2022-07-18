import {service} from '../../utilities/service'

const servicesApi = {
  getUserChildrenByFatherId: async (paremeters) =>{
    try {
      const { fatherId, current, pageSize, name, lastName, status, createdAt } = paremeters
      const response = await service()
        .get(`api/userMembers?fatherId=${fatherId}&page=${current}&size=${pageSize}&name=${name}&lastName=${lastName}&status=${status}&createdAt=${createdAt}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default servicesApi;