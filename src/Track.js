function Track(fb_ref, name){
	this._fb_ref = fb_ref;
	this._name = 
  	this._key = '' // added name to track, do unit test and update where we instanstiate
  	this._midi_ids = []
}


Track.prototype.create = function () {
  this._key = this._fb_ref.ref('Track').push({'name': this._name, 'midi_ids': [0]}).key
};

Track.prototype.existing = async function (key) {
  that = this;
  let snapshot = await this._fb_ref.ref('Track').child(key).once('value')

    
      data = snapshot.val()
    
      that._name = data['name'];
      that._midi_ids = data['midi_ids']
      that._key = key
  

  return snapshot;

};


Track.prototype.getKey = function () {
  return this._key
};

Track.prototype.getName = function () {
  return this._name;
};

Track.prototype.add_midi = function (midi_id) {
	var old_midi_ids = getValues_t(this._fb_ref, this._key, 'midi_ids');
	
	old_midi_ids.push(midi_id)

  	this._fb_ref.ref('Track').child(this._key+'/midi_ids').set(old_midi_ids);
};

Track.prototype.midi_ids = function () {
	return this._midi_ids
};

function getValues_t(ref, key, child_key){
	data = []
	ref.ref('Track').on('value', 
		function(snapshot) {
			var temp_values = snapshot.val()
			data = temp_values[key][child_key]
	});

	return data;
}