export default class keyGenerator {
  static BUILD_KEY_TEMPLATES = (uuid) => `IP_LOCATOR_${uuid}`
  static BUILD_VALUES_TEMPLATES = (data) => JSON.stringify(data)

  constructor(uuid, data) {
    this.keyTemplates = keyGenerator.BUILD_KEY_TEMPLATES(uuid)
    this.valuesTemplates = keyGenerator.BUILD_VALUES_TEMPLATES(data)
  }

  getKey() {
    return this.keyTemplates
  }

  getValues() {
    return this.valuesTemplates
  }
}