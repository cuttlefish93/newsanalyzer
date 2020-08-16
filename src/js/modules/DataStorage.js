export default class DataStorage {

  dataToJSON = (data) => {
    const dataToJSON = JSON.stringify(data);
    return dataToJSON;
  }

  dataFromJSON = (data) => {
    const dataFromJSON = JSON.parse(data);
    return dataFromJSON;
  }
}
