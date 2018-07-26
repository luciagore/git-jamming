'use strict';

describe('Track', function(){
  var track;

  beforeEach(function(){
    track = new Track()
  });

  it("has an ID", function(){
    expect(track.getID()).toEqual(0)
  });

  it("will hold midi_id's", function(){
    expect(track.midi_id()).toEqual([])
  });

  it("adds hold midi_id's", function(){
    track.add_midi(1);
    expect(track.midi_id()).toEqual([1])
  });

})
