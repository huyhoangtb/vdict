/**
 * Created by Peter Hoang Nguyen on 4/2/2017.
 */
import axios from 'axios';
import common from './Common';

axios.interceptors.request.use((config) =>
  // console.log("before request: success", config);
   config, (error) =>
  // console.log("before request: not success");
   Promise.reject(error));

// Add a response interceptor
axios.interceptors.response.use((response) =>
  // Do something with response data
  // console.log("response: success");
   response, (error) =>
  // Do something with response error
  // console.log("response: not success");
   Promise.reject(error));

class Request {


  get(url, params) {
    const { urlProcess, allParams } = common.getURL(url, params);

    return axios.get(urlProcess, {
      params: allParams,
    }).then((response) => response.data);
  }

  post(url, params, config) {
    const { urlProcess, allParams } = common.getURL(url, params);
    const formPost = common.createFrom(allParams);

    return axios.post(urlProcess, formPost, config).then((response) => response.data);
  }
}

export default new Request();
