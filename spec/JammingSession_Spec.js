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
                        

                        if(action == 'add'){
                          console.log('vale in add', value[0])
                          listofusers_mock.push(value[0])
                         
                        }
                        else if(action == 'delete') {
                          console.log('vale in delete', value[0])
                          const index = listofusers_mock.indexOf(value[0]);
                          listofusers_mock.splice(index, 1);
                        }
                      }}}

                    };
  var fb_ref_double = {ref: function(Track){return push_double}};

  beforeEach(function(){

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
        expect(jamming_session.getUsers()).toEqual([]);
      });

      it("adds users", function(){
        action = 'add'
        console.log('add user test b4', jamming_session.getUsers())
        jamming_session.addUser(19)
        console.log('add user test', jamming_session.getUsers())
        expect(jamming_session.getUsers()).toEqual([19]);
      });

      xit("deletes users", function(){
        console.log('before add', listofusers_mock)
        action = 'add'
        jamming_session.addUser(1)
        jamming_session.addUser(2)
        console.log('after add', listofusers_mock)
        action = 'delete'
        jamming_session.deleteUser(1)

        console.log('after delete', listofusers_mock)
        expect(jamming_session.getUsers()).toEqual([2]);
      });

  });


  xdescribe('tracks from JammingSession', function(){

      it("has tracks", function(){
        expect(jamming_session.getTracks()).toEqual([]);
      });

      it("adds tracks", function(){
        jamming_session.addTrack(1)
        expect(jamming_session.getTracks()).toEqual([]);
      });

  });


 

  
  
})