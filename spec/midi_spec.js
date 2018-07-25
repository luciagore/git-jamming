'use strict';

describe('MidiStore',function(){
	var midistore;
	var mididata = {0: { note:1, veloctiy:2, delay:2 },
									1: { note:1, veloctiy:2, delay:2 },
									2: { note:1, veloctiy:2, delay:2 },
									3: { note:1, veloctiy:2, delay:2 }
								}
	beforeEach(function(){
		midistore = new MidiStore("instrument", mididata);
	});
  it('has an ID', function(){
    expect(midistore.getID()).toEqual(0)
  })

  it('stores an instrument', function(){
    expect(midistore.instrumentID()).toEqual("instrument")
  })

  it('stores a set of notes', function(){
    expect(midistore.mididata()).toEqual(mididata)
  })

});
