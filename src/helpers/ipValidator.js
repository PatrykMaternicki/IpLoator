const ipRegex = require('ip-regex');

export default class IpValidator {
  static validIp(ip) {
    return ipRegex({exact: true}).test(ip);
  }
}