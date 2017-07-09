/**
 * Created by Peter Hoang Nguyen on 4/5/2017.
 */
import Store from 'store';

class CommonURL {

  options = () => {
    const userInfo = Store.getState().user.info || {};
    const { domain } = Store.getState().domainInfo;
    return {
      _sand_ajax: 1,
      _sand_platform: 1,
      submit: 1,
      _sand_readmin: 1,
      _sand_token: (userInfo) ? userInfo.token : '',
      _sand_uiid: (userInfo) ? userInfo.iid : '',
      _sand_uid: (userInfo) ? userInfo.id : '',
      _sand_domain: domain || '',
    };
  };

  appendObjectToURL(url, params) {
    if (!params) {
      return url;
    }

    const urlObj = new URL(url);
    Object.keys(params).forEach((key) => urlObj.searchParams.append(key, params[key]));
    return urlObj;
  }

  getURL(url, params, headers) {
    let localUrl = url;
    let localParams = params;
    let localHeaders = headers;
    // console.log('Store', Store.getState());
    localParams = localParams || {};
    if (Object.prototype.hasOwnProperty.call(localParams, 'domainUrl') || Object.prototype.hasOwnProperty.call(localParams, 'domain-url')) {
      localUrl = localParams.domainUrl + localUrl.startsWith('/') ? localUrl : `/${localUrl}`;
      delete localParams.domainUrl;
    } else if (!localUrl.startsWith('http') && !localUrl.startsWith('https')) {
      localUrl = process.env.REACT_APP_SERVER_API_URL + (localUrl.startsWith('/') ? localUrl : `/${localUrl}`);
    }
    localParams = Object.assign({}, localParams, this.options());

    if (!localHeaders) {
      localHeaders = {};
    }

    const myHeaders = new Headers();
    Object.keys(localHeaders).forEach((key) => {
      myHeaders.append(key, localHeaders[key]);
    });
    return {
      urlProcess: localUrl,
      allParams: localParams,
      headersData: myHeaders,
    };
  }

  createFrom(params, form) {
    let localForm = form;
    if (!localForm) {
      localForm = new FormData();
    }
    if (!params) {
      return localForm;
    }
    Object.keys(params).forEach((key) => {
      this.simplifyParams(localForm, key, params[key]);
    });
    return localForm;
  }

  simplifyParams(form, key, param) {
    // console.log(key, param);
    if (typeof param === 'undefined' || param === null)
      return;

    // console.log('param: ', param, typeof param);
    if (typeof param !== 'object' || param instanceof File) {
      form.append(key, param);
      // console.log('appending', key, param);
      return;
    }

    if (Array.isArray(param)) {
      param.forEach((value, i) => {
        this.simplifyParams(form, `${key}[${i}]`, value);
      });
    } else {
      Object.keys(param).forEach((subKey) => {
        this.simplifyParams(form, `${key}[${subKey}]`, param[subKey]);
      });
    }
  }
}

export default new CommonURL();
