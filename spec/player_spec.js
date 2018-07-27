'use strict';

describe('mapping PLayer to an object', function(){
  var listofUsers_mock = [];

  var push_double = {push: function(user_ids){return {key: 'SOME_RANDOM_FB_KEY'}},
                      on: function(value){},
                      set: function(value){},
                      child: function(name){return {set: function(value){listofUsers_mock.push(1)}}}

                    };
  var fb_ref_double = {ref: function(Player){return push_double}};

  var player;

  beforeEach(function(){
    player = new Player(fb_ref_double);
  });

  it("has an ID", function(){
    expect(player.getKey()).toEqual("SOME_RANDOM_FB_KEY");
  });

  it("will hold user_id's", function(){
   
    expect(player.user_ids()).toEqual([])
  });

  it("adds user_id's", function(){
    player.add_user(1);
    expect(listofUsers_mock).toEqual([1])
  });
  
})