import {v4 as uuidV4} from 'uuid';

export default function() {
  let userId = localStorage.getItem('userTempId');
  if(!userId) {
    userId = localStorage.setItem('userTempId', uuidV4());
  }
  return userId;
}