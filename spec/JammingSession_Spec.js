/*
user stories
create a jammingsession with no tracks and users

hold users
hold tracks

add users
delete user

add tracks
delete tracks

*/
'use strict';

describe('mapping JammingSession to an object', function(){
  var action = ''
  var jamming_session;
  var listofusers_mock = []
  var listoftracks_mock = []
  var push_double = {push: function(midi_ids){return {key: 'SOME_RANDOM_FB_KEY'}},
                      on: function(value){},
                      set: function(value){},
                      child: function(name){return {set: function(value){
                        

                        // if(action == 'add'){
                        //   console.log('vale in add', value[0])
                        //   //listofusers_mock.push(value[0])
                         
                        // }
                        // else if(action == 'delete') {
                        //   console.log('vale in delete', value[0])
                        //   const index = listofusers_mock.indexOf(value[0]);
                        //   listofusers_mock.splice(index, 1);
                        // }
                      }}}

                    };
  var fb_ref_double = {ref: function(Track){return push_double}};

  beforeEach(function(){

    listofusers_mock = []
    listoftracks_mock = []

    jamming_session = new JammingSession(fb_ref_double);

    spyOn(jamming_session, 'getUsers').and.returnValue(listofusers_mock);
    spyOn(jamming_session, 'getTracks').and.returnValue(listoftracks_mock);
  
    spyOn(window, 'getValues').and.callFake(function(ref, key, child_key) {
      var array;
      switch (child_key) {
        case 'users':
          array = listofusers_mock
          break;
        case 'tracks':
          array = listoftracks_mock
          break;  
        default:
          // statements_def
          break;
      }
      return array;
    });

    
  });

  it("has an ID", function(){
    expect(jamming_session.getKey()).toEqual("SOME_RANDOM_FB_KEY");
  });

  describe('users in JammingSession', function(){

      it("has users", function(){
        console.log('has user test', jamming_session.getUsers())
        expect(jamming_session.getUsers()).toEqual([]);
      });

      it("adds users", function(){
        //action = 'add'
        console.log('add user test b4', jamming_session.getUsers())
        jamming_session.addUser(19)
        //console.log('add user test', jamming_session.getUsers())
        expect(jamming_session.getUsers()).toEqual([19]);
      });

      it("deletes users", function(){
        //console.log('before add', jamming_session.getUsers())
        //action = 'add'
        jamming_session.addUser(1)
        jamming_session.addUser(23)
        //console.log('after add', jamming_session.getUsers())
       //action = 'delete'
        jamming_session.deleteUser(1)

        //console.log('after delete', jamming_session.getUsers())
        expect(jamming_session.getUsers()).toEqual([23]);
      });

  });


  describe('tracks from JammingSession', function(){

      it("has tracks", function(){
        expect(jamming_session.getTracks()).toEqual([]);
      });

      it("adds tracks", function(){
        jamming_session.addTrack(1)
        expect(jamming_session.getTracks()).toEqual([1]);
      });

      it("deletes tracks", function(){
        console.log('before add', jamming_session.getTracks())
        //action = 'add'
        jamming_session.addTrack(1)
        jamming_session.addTrack(23)
        console.log('after add', jamming_session.getTracks())
       //action = 'delete'
        jamming_session.deleteTrack(1)

        console.log('after delete', jamming_session.getTracks())
        expect(jamming_session.getTracks()).toEqual([23]);
      });

  });


 

  
  
})