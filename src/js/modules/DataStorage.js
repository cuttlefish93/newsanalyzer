export default class DataStorage {
  _dataToJSON = (data) => {
    const dataToJSON = JSON.stringify(data);
    return dataToJSON;
  }

  _dataFromJSON = (data) => {
    const dataFromJSON = JSON.parse(data);
    return dataFromJSON;
  }

  clearStorage = () => {
    localStorage.clear();
  }

  getItem = (key) => {
    return this._dataFromJSON(localStorage.getItem(key));
  }

  setItem = (key, value) => {
    localStorage.setItem(key, this._dataToJSON(value));
  }
}
