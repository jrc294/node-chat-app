const {Users} = require('./users');
const expect = require('expect');

describe('Users', () => {

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    },{
      id: '2',
      name: 'Jen',
      room: 'React Course'
    },{
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }];
  });

  it('Should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Jonathan',
      room: 'The office fans'
    }
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('Should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('Should return names for react course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });

  it('should remove a user', () => {
    var userToRemove = users.users[1];
    var removedUser = users.removeUser(userToRemove.id);
    expect(removedUser.name).toBe('Jen');
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var id = 4;
    var removedUser = users.removeUser(4);
    expect(removedUser).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userToFind = users.users[1];
    var foundUser = users.getUser(userToFind.id);
    expect(foundUser.name).toBe('Jen');
  });

  it('should not find user', () => {
    var id = '4';
    var foundUser = users.getUser(id);
    expect(foundUser).toNotExist();
  });
})