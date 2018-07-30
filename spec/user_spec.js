'use strict';

describe('mapping User to an object', function(){
  var listofMidis_mock = [];

  var push_double = {push: function(midi_ids){return {key: 'SOME_RANDOM_FB_KEY'}},
                      on: function(value){},
                      set: function(value){},
                      child: function(name){return {set: function(value){listofMidis_mock.push(1)}}}

                    };
  var fb_ref_double = {ref: function(Track){return push_double}};

  var user;

  beforeEach(function(){
    user = new User(fb_ref_double, "new_user");
    spyOn(user, 'getKey').and.returnValue("SOME_RANDOM_KEY");
    spyOn(user, 'getName').and.returnValue("new_user");
  });

  it("has an ID", function(){
    expect(user.getKey()).toEqual("SOME_RANDOM_KEY");
  });

  it("has a name", function(){
    expect(user.getName()).toEqual("new_user");
  });
  
})