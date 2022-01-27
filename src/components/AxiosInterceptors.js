import axios from 'axios';

export const alertBackend = async (message) => {
  axios.post(
    `https://chat.googleapis.com/v1/spaces/AAAAPSgl27I/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=sei_fGardCrekUuB1TUIOiXHyP8CnCC8MGQpGM5rcxc%3D`,
    {
      text: message,
    }
  );
};

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log('response', response);
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    let newError = JSON.stringify({
      name: error.toJSON().name,
      message: error.toJSON().message,
    });
    let errors = JSON.parse(localStorage.getItem('errors')) || [];
    if (errors.includes(newError)) {
      console.log('error already exists');
      return;
    }
    // alertBackend(JSON.parse(newError).message);
    errors.push(newError);
    console.log('error', errors);
    localStorage.setItem('errors', JSON.stringify(errors));
    return error.message;
  }
);

export { axios as modifiedAxios };
