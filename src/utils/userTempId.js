import {v4 as uuidV4} from 'uuid';

export default function() {
  let userId = localStorage.getItem('userTempId');
  if(!userId) {
    userId = uuidV4();
    localStorage.setItem('userTempId', userId);
  }
  return userId;
}