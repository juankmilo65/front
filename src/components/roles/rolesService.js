import {service} from '../../utilities/service'

const servicesApi = {
  getRoles: async (paremeters) =>{
    try {
      const { current, pageSize } = paremeters
      const response = await service()
        .get(`api/roles?&page=${current}&size=${pageSize}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default servicesApi;