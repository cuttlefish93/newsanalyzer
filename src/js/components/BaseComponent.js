export default class BaseComponent {
  constructor(handlers = {}) {
    this.handlers = handlers;
  }

  setHandlers(node, event, callback) {
    node.addEventListener(event, callback);
  }

  removeHandlers(node, event, callback) {
    node.removeEventListener(event, callback);
  }
}
