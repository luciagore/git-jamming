'use strict';

describe('MidiStore',function(){
	var midistore;
	beforeEach(function(){
		midistore = new MidiStore();
	});
  it('has an ID', function(){
    expect(midistore.getID()).toEqual("MIDI id")
  })

  it('stores an instrument', function(){
    expect(midistore.getID()).toEqual("some instrument")
  })

  it('stores a single note', function(){
    expect(midistore.getNotes()[0]).toEqual("one note in JSON obj or MIDI obj")
  })

  it('stores a multi notes', function(){
    expect(midistore.getNotes()[0]).toEqual("list of MIDI notes")
  })

});
