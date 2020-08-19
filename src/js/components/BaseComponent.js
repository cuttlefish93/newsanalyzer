import { call } from "file-loader";

export default class BaseComponent {
  constructor() {
    this._handlers = [];
  }

  setEvents = (handlersArr) => {
    this._handlers = handlersArr;
    this._handlers.forEach(handler => this._addHandler(handler));
  }

  _addHandler = ({selector, event, callback}) => {
    selector.addEventListener(event, callback);
  }

  _removeHandler = ({selector, event, callback}) => {
    selector.removeEventListener(event, callback);
  }

  removeEvents = () => {
    this._handlers.forEach(handler => this._removeHandler(handler));
  }
}
