'use strict';

describe('mapping Track to an object', function(){
  var listofMidis_mock = [];

  var push_double = {push: function(midi_ids){return {key: 'SOME_RANDOM_FB_KEY'}},
                      on: function(value){},
                      set: function(value){},
                      child: function(name){return {set: function(value){listofMidis_mock.push(1)}}}

                    };
  var fb_ref_double = {ref: function(Track){return push_double}};

  var track;

  beforeEach(function(){
    track = new Track(fb_ref_double);
  });

  it("has an ID", function(){
    expect(track.getKey()).toEqual("SOME_RANDOM_FB_KEY");
  });

  it("will hold midi_id's", function(){
   
    expect(track.midi_ids()).toEqual([])
  });

  it("adds midi_id's", function(){
    track.add_midi(1);
    expect(listofMidis_mock).toEqual([1])
  });
  
})

