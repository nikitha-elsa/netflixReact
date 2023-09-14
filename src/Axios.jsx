 import  Axios  from 'axios';
 import { baseurl} from './constants/constant'
import axios from 'axios';
 const instance = axios.create({
    baseURL: baseurl,
   
  });
  export default instance