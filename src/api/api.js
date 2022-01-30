import { modifiedAxios } from '../components/AxiosInterceptors';
export const api = 'http://localhost:5002';

export const addPost = async (
  post_type,
  company_name,
  eligibility,
  position,
  joining,
  deadline,
  content,
  status
) => {
  try {
    const response = await fetch(`${api}/admin/post/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      body: JSON.stringify({
        company_name: company_name,
        content: content,
        deadline: deadline,
        eligibility: eligibility,
        joining: joining,
        position: position,
        post_type: post_type,
        status: status,
      }),
    });
    if (response.ok) {
      const result = await response.json();
      if (result) {
        return result;
      }
    }
  } catch (err) {
    throw err;
  }
};

// axios.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     console.log('request', config);
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// Add a response interceptor
// axios.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     // console.log('response', response);
//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     let newError = JSON.stringify({
//       name: error.toJSON().name,
//       message: error.toJSON().message,
//     });
//     let errors = JSON.parse(localStorage.getItem('errors')) || [];
//     if (errors.includes(newError)) {
//       console.log('error already exists');
//       return;
//     }
//     alertBackend(JSON.parse(newError).message);
//     errors.push(newError);
//     console.log('error', errors);
//     localStorage.setItem('errors', JSON.stringify(errors));
//     return error.message;
//   }
// );

export const getAllVacancyPosts = async (pageNumber, pageSize) => {
  try {
    const response = await modifiedAxios.get(`${api}/post/vacancy`, {
      params: {
        page: pageNumber,
        page_size: pageSize,
      },
    });

    if (response.status === 200) {
      if (response.data.success) {
        // reset session storage value
        return response.data;
      }
    } else {
      return {
        success: false,
        message: 'Something went wrong',
      };
    }
  } catch (err) {
    console.log(err.message);
    // alertBackend(err.message);
    // store in session storage that message sent
    throw err;
  }
};

export const getAllNoticePosts = async (pageNumber, pageSize) => {
  try {
    const response = await fetch(
      `${api}/post/notice?page=${pageNumber}&page_size=${pageSize}`,
      {
        method: 'GET',
      }
    );

    if (response.ok) {
      const result = await response.json();
      if (result) {
        return result;
      }
    }
  } catch (err) {
    throw err;
  }
};

export const getAllBlogPosts = async (pageNumber, pageSize) => {
  try {
    const response = await fetch(
      `${api}/post/blog?page=${pageNumber}&page_size=${pageSize}`,
      {
        method: 'GET',
      }
    );
    if (response.ok) {
      const result = await response.json();
      if (result) {
        return result;
      }
    }
  } catch (err) {
    throw err;
  }
};

export const adminLogin = async (username, password) => {
  try {
    const response = await fetch(`${api}/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      if (result) {
        return result;
      }
    }
  } catch (err) {
    throw err;
  }
};

export const getSinglePost = async (id) => {
  try {
    const response = await modifiedAxios.get(`${api}/post/get_post/${id}`);
    if (response.status === 200) {
      if (response.data.success) {
        const result = await response.data;
        if (result) {
          return result;
        }
      }
    }
  } catch (err) {
    throw err;
  }
};

export const deletePost = async (id) => {
  try {
    const response = await modifiedAxios.delete(`${api}/admin/post/delete`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      },
      data: {
        _id: id,
      },
    });
    if (response.status === 200) {
      if (response.data.success) {
        const result = await response.data;
        if (result) {
          return result;
        }
      }
    }
  } catch (err) {
    throw err;
  }
};

export const getCurrentTheme = async () => {
  try {
    const response = await modifiedAxios.get(`${api}/customize/get_theme`);
    if (response.status === 200) {
      if (response.data.success) {
        const result = await response.data;
        if (result) {
          return result;
        }
      }
    }
  } catch (err) {
    throw err;
  }
};

export const setCurrentTheme = async (theme) => {
  try {
    const response = await modifiedAxios.post(
      `${api}/customize/set_theme`,
      {
        current_theme: theme,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }
    );
    if (response.status === 200) {
      if (response.data.success) {
        const result = await response.data;
        if (result) {
          return result;
        }
      }
    }
  } catch (err) {
    throw err;
  }
};
