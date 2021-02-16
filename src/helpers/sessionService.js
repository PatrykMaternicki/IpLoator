export default class sessionService {
  static setValue(key, data) {
    window.sessionStorage.setItem(key, data)
  }

  static getValues() {
    const arr = Object.keys(window.sessionStorage).map((value) => {
      return JSON.parse(window.sessionStorage.getItem(value))
    })
    return arr
  }
}