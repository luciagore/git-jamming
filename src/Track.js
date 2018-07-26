function Track(fb_ref){
	this._fb_ref = fb_ref;
  	this._key = fb_ref.ref('Track').push({'midi_ids': [0]}).key;
}

Track.prototype.getKey = function () {
  return this._key
};

Track.prototype.add_midi = function (midi_id) {
	var old_midi_ids = getValues(this._fb_ref, this._key);
	
	old_midi_ids.push(midi_id)

  	this._fb_ref.ref('Track').child(this._key+'/midi_ids').set(old_midi_ids);
};

Track.prototype.midi_ids = function () {
	return getValues(this._fb_ref, this._key);
};

function getValues(ref, key){
	midi_ids = []
	ref.ref('Track').on('value', 
		function(snapshot) {
			var temp_values = snapshot.val()
			midi_ids = temp_values[key]['midi_ids']
	});

	return midi_ids;
}