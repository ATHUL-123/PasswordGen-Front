import { api } from "./Api";


export const apiCall = async (method, url, data) => {
  try {
    let response;
    
    switch (method) {
      case 'post':
        response = await api.post(url, data);
        break;
      case 'get':
        response = await api.get(url, { params: data });
        break;
      case 'patch':
        response = await api.patch(url, data);
        break;
      case 'delete':
        response = await api.delete(url, { data });
        break;
      case 'put':
        response = await api.put(url, data);
        break;
      default:
        throw new Error(`Unsupported method: ${method}`);
    }
    
    return response.data;
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      // Redirect to error page
      window.location.href = '/error';
    } else {
      // Handle other errors
      throw error;
    }
  }
};
