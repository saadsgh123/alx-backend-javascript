export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name
    this._length = length
    if (Array.isArray(students)) {
      this._students = students
    } else {
      this._students = []
    }
  }

  get name() {
    return this._name
  }

  set name(value) {
    if (typeof value === 'string'){
      this._name = value
    } else {
      throw new Error("TypeError: Name must be a string")
    }
  }

  get length() {
    return this._length
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value
    } else {
      throw new Error("TypeError: Name must be a number")
    }
  }

  get students() {
    return this._students
  }

  set students(value) {
    if(Array.isArray(value)){
      this._students = value
    } else {
      throw new Error("TypeError: Name must be an array")
    }
  }
}
