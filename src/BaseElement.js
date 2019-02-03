export class BaseElement extends HTMLElement {
  static create(tagName, template, entity) {
    Object.defineProperty(entity.prototype, 'template', {
      value: template,
    })
    customElements.define(tagName, entity)
  }

  /*
    Class instance
    */
  constructor() {
    super()
    this.onBeforeCreated()
  }

  /**
   * Executed in the beginning of the creation lifecycle
   * Used to initialize template binding values
   * @protected
   */
  onBeforeCreated() {}
}
