function MidiStore(fb_ref, instrument, user_id, mididata) {
  this._instrument = instrument;
  this._fb_ref = fb_ref;
  this._mididata = mididata
  this._user_id = user_id
  this._key = fb_ref.ref('MidiStore').push({"instrument": instrument, "user_id": user_id, "mididata": mididata}).key;
}

MidiStore.prototype.getKey = function () {
  return this._key;
};

MidiStore.prototype.getInstrument = function () {
  return this._instrument;
};

MidiStore.prototype.getMididata = function () {
  return this._mididata
};

MidiStore.prototype.getUser = function () {
  return this._user_id
};

MidiStore.prototype.updateMidi = function (newdata) {
 	var old_data = getValues(this._fb_ref, this._key, 'mididata');

 	for (var i = 0; i < newdata.length; i++){
 		old_data.push(newdata[i]);
 	}

 	this._fb_ref.ref('MidiStore').child(this._key+'/mididata').set(old_data);

};


function getValues(ref, key, child_key){
	data = []
	ref.ref('MidiStore').on('value', 
		function(snapshot) {
			var temp_values = snapshot.val()
			data = temp_values[key][child_key]
	});

	return data;
}