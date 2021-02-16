const urlRegex = require('url-regex');

export default class urlValidator {
   static validUrl(url) {
    return urlRegex({exact: true, strict: false}).test(url);
   }
}