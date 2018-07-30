function MidiStore(fb_ref, instrument, user_id, mididata) {
  this._instrument = instrument;
  this._fb_ref = fb_ref;
  this._mididata = mididata
  this._user_id = user_id
  this._key = fb_ref.ref('MidiStore').push({"instrument": instrument, "user_id": user_id, "mididata": mididata, 'length': 0}).key;
}

MidiStore.prototype.getKey = function () {
  return this._key;
};

MidiStore.prototype.getInstrument = function () {
  return this._instrument;
};

MidiStore.prototype.getMididata = function () {
  return getValues_m(this._fb_ref, 'MidiStore',this._key, 'mididata');
};

MidiStore.prototype.getUser = function () {
  return this._user_id
};

MidiStore.prototype.getLength = function () {
  return getValues_m(this._fb_ref, 'MidiStore', this._key, 'length');
};

MidiStore.prototype.updateLength = function (length) {
 
  var old_data = getValues_m(this._fb_ref, 'MidiStore', this._key, 'length');
 	this._fb_ref.ref('MidiStore').child(this._key+'/length').set(old_data+length);
};

MidiStore.prototype.updateMidi = function (newdata) {
 	var old_data = getValues_m(this._fb_ref, 'MidiStore', this._key, 'mididata');
 	console.log('update old data', old_data)
 	for (var i = 0; i < newdata.length; i++){
 		old_data.push(newdata[i]);
 	}
 	this._fb_ref.ref('MidiStore').child(this._key+'/mididata').set(old_data);

};


function getValues_m(ref, table_name, key, child_key){
	var data = [];
	ref.ref(table_name).on('value', 
		function(snapshot) {
			var temp_values = snapshot.val()
			data = temp_values[key][child_key]
	});

	return data;
}
