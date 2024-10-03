export default class ClassRoom {
  constructor(_maxStudentsSize) {
    this._maxStudentsSize = _maxStudentsSize;
  }

  initializeRooms(){
    return [
        new ClassRoom(19),
        new ClassRoom(20),
        new ClassRoom(34),
    ]
  }
}
