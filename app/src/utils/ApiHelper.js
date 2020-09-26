import {create} from 'apisauce';
import CONFIGURATION from './Configuration';
import Configuration from './Configuration';
// define the api
const api = create({
  baseURL: Configuration.BASE_URL,
  headers: {Accept: 'application/json'},
});

const APiHelper = {
  get: function (url) {
      console.log('url=>>>', CONFIGURATION.BASE_URL+url)
  return   api
      .get(url)
      .then((responseJson) => {
        console.log(responseJson);
        return responseJson;
      })
      .catch(error=>{
          console.log('error=>>>',error)
      })
   
  },
};

export default APiHelper;

