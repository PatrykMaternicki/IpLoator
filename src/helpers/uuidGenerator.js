import { v4 as uuidv4 } from 'uuid';

export default class uuidGenerator {
   static generate() {
      return uuidv4()
   }
}