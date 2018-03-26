[{
}];

// addUser(id, name, room)

// removeUser(id)

// getUser(id)

// getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser (id) {
    var userBeingRemoved = this.getUser(id);
    if (userBeingRemoved) {
      this.users = this.users.filter((user) => user.id !== id);
    }
    return userBeingRemoved;
  }

  getUser (id) {
    return this.users.filter((user) => user.id === id)[0];
  }

  getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);
    return namesArray;
  }
}

module.exports = {Users};

// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//
//   getUserDescription () {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }
//
// var me = new Person('Jonathan', 47);
// var description = me.getUserDescription();
// console.log(description);
// console.log('this.name', me.name);
// console.log('this.age', me.age);