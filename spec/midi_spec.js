'use strict';

describe('MidiStore',function(){
	var midistore;
	var mididata = [{ note:1, delay:2 },
									{ note:1, delay:2 },
									{ note:1, delay:2 },
									{ note:1, delay:2 }
								]
	//firebase.database().ref().child("midistore").push(mididata)

	var push_double = {push: function(midi_ids){return {key: 'SOME_RANDOM_FB_KEY'}},
                      on: function(value){},
                      set: function(value){},
                      child: function(name){return {set: function(value){}}}

                    };
  var fb_ref_double = {ref: function(MidiStore){return push_double}};




	beforeEach(function(){
		midistore = new MidiStore(fb_ref_double, "piano", 'lucy', mididata);

	});
  it('has an ID', function(){
    expect(midistore.getKey()).toEqual("SOME_RANDOM_FB_KEY")
  })

  it('stores an instrument', function(){
    expect(midistore.getInstrument()).toEqual("piano")
  })

  it('stores a set of notes', function(){
    spyOn(window, 'getValues_m').and.returnValue(mididata);
    expect(midistore.getMididata()).toEqual(mididata)
  })

  it('holds a user', function(){
    expect(midistore.getUser()).toEqual('lucy')
  })

  it('holds time', function(){
    //spyOn(window, 'getValues_m').and.returnValue(0);
    var time = midistore.getLength().then(function(data){
      expect(data).toEqual(0)
    });

    
  })

	it('updates midi', function(){
    spyOn(window, 'getValues_m.then').and.returnValue(mididata);
		var addition = { note:1, delay: 21 };
		midistore.updateMidi(addition);
		mididata[4] = addition
		var new_mididata = mididata;
		expect(midistore.getMididata()).toEqual(new_mididata)
	})
});
