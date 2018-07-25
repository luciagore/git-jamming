'use strict';

describe('MidiStore',function(){
	var midistore;
	beforeEach(function(){
		midistore = new MidiStore("instrument", "mididata");
	});
  it('has an ID', function(){
    expect(midistore.getID()).toEqual(0)
  })

  it('stores an instrument', function(){
    expect(midistore.instrumentID()).toEqual("instrument")
  })

  it('stores a set of notes', function(){
    expect(midistore.mididata()).toEqual("mididata")
  })

});
