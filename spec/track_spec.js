'use strict';

xdescribe('Track', function(){
  var track;

  beforeEach(function(){
    track = new Track()
  });

  it("will hold midi_id's", function(){
    expect(track.midi_id()).toEqual([])
  });

  it("adds hold midi_id's", function(){
    track.add_midi(1);
    expect(track.midi_id()).toEqual([1])
  });



});

describe('mapping Track to an object', function(){
  var fb_ref = firebase.database();
  var listofMidis_mock = [];

  var push_double = {push: function(midi_ids){return {key: 'SOME_RANDOM_FB_KEY'}}};
  var fb_ref_double = {ref: function(Track){return push_double}};





  for (var i = 0; i < 10; i++){
    listofMidis_mock.push(i);
  }

  var midi_ids = {'midi_ids': listofMidis_mock}

  //var fb_key = fb_ref.child("Track").push(midi_ids).key;

  firebase.database().ref('Track').on('value', function(snapshot) {console.log(snapshot.val())};;

  var track;

  beforeEach(function(){
    track = new Track(fb_ref_double);
  });

  it("has an ID", function(){
    expect(track.getID()).toEqual("SOME_RANDOM_FB_KEY");
  });

  it("will hold midi_id's", function(){
    expect(track.midi_ids()).toEqual([])
  });

  xit("adds hold midi_id's", function(){
    track.add_midi(1);
    expect(track.midi_id()).toEqual([1])
  });


  
})
