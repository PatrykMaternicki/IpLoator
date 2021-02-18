export default class Client {
  static BASE_URL = 'http://ip-api.com/json/'

  static async getCurrentLocation() {
    const response = await fetch(Client.BASE_URL)
    return await response.json()
  }
  
  static async getLocationWithQuery(query) {
    const response = await fetch(`${Client.BASE_URL}/${query}`)
    return await response.json()
  } 
}