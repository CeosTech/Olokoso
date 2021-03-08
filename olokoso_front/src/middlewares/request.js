import axios from "axios";

const URL = "http://localhost:8000/"

/**
 * global function to send http requests using fetch api
 * @param {method : GET, POST, DELETE, ... http method}
 * @param {url : string the url}
 * @param {data: formular to be sent to backend, can be null :> GET, DELETE}
 * @param {token: the token provided when the user logged in or subscribed, use AsyncStorage to retrieve with key: 'token'}
 */
export async function sendrequest(method, url, setDatasReceived, setDataLoadingProcess, data, token){
    return await axios({
        method: method,
        url: URL+url,
        data: data ? JSON.stringify(data) : '',
      })
    .then((response) => {
        // Success 🎉
        console.log('la réponse ::' + JSON.stringify(response));
        if (setDatasReceived) setDatasReceived(response.data)
        if (setDataLoadingProcess) setDataLoadingProcess(true)
        return response.data;
    })
    .catch((error) => {
        // Error 😨
        if (error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            /*
             * The request was made but no response was received, `error.request`
             * is an instance of XMLHttpRequest in the browser and an instance
             * of http.ClientRequest in Node.js
             */
            console.log(error.request);
        } else {
            // Something happened in setting up the request and triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    })
};