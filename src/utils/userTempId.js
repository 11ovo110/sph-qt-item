import { v4 as uuidV4 } from 'uuid';

export default function() {
  let userId = localStorage.getItem('tourist');
  if(!userId) {
    userId = uuidV4();
    localStorage.setItem('tourist', userId);
  }
  return userId;
}
