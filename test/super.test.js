'use strict';

var should = require('chai').should(),
    expect = require('chai').expect,
    test = require('supertest'),
    api = test('http://localhost:3000');

describe('All tests', function(){

  var user = (Math.floor(Math.random() * (100 - 0)) + 0).toString(),
      url = (Math.floor(Math.random() * (1000 - 101)) + 101).toString();

  it('should return a 404 response', function(done){
    api.get('/other-url')
      .set('Accept', 'application/json')
      .expect(404, done);
  });

  it('Add User: should 201', function(done){
    api.post('/users')
      .send({ id: user })
      .set('Accept', 'application/json')
      .expect(201, done);
  });

  it('Add User: should 409', function(done){
    api.post('/users')
      .send({ id: user })
      .set('Accept', 'application/json')
      .expect(409, done);
  });

  it('Add Url: should 201', function(done){
    api.post('/users/' + user + '/urls')
      .send({ url: url })
      .set('Accept', 'application/json')
      .expect(201, done);
  });

  it('Add Other Url: should 201', function(done){
    api.post('/users/' + user + '/urls')
      .send({ url: url })
      .set('Accept', 'application/json')
      .expect(201, done);
  });

  it('Add Invalid User Url: should 404', function(done){
    api.post('/users/' + 404 + '/urls')
      .send({ url: url })
      .set('Accept', 'application/json')
      .expect(404, done);
  });

  it('Search Stats: should 200', function(done){
    api.get('/stats')
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('Search User Stats: should 200', function(done){
    api.get('/users/' + user + '/stats')
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('Search Invalid User Stats: should 404', function(done){
    api.get('/users/' + 404 + '/stats')
      .set('Accept', 'application/json')
      .expect(404, done);
  });

  it('Delete User: should 204', function(done){
    api.delete('/users/' + user)
      .set('Accept', 'application/json')
      .expect(204, done);
  });

  it('Delete Invalid User: should 404', function(done){
    api.delete('/users/' + 404)
      .set('Accept', 'application/json')
      .expect(404, done);
  });
});