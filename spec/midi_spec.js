'use strict';

describe('MidiStore',function(){
	var midistore;
	beforeEach(function(){
		midistore = new MidiStore();
	});
  it('can create a midi', function(){
    expect(midistore.getInstrument()).toEqual("acoustic_grand_piano")
  })

});
