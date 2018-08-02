var JammingSession = function (fb_ref, name) {
	this._fb_ref = fb_ref;
	this._key = '';
	this._name = name
	this._players = []
	this._tracks = []
	this._class = this
}


JammingSession.prototype.create = function () {
  this._key = this._fb_ref.ref('JammingSession').push({'name': this._name, 'players': [0], 'tracks': [0]}).key;
};

JammingSession.prototype.existing = function (key) {
  that = this;
  this._fb_ref.ref('JammingSession').child(key).once('value').then(
    function(snapshot){
      data = snapshot.val()

      that._name = data['name']
      that._key = key
			that._players = data['players']
			that._tracks = data['tracks']
  });

};
JammingSession.prototype.getKey = function() {
	return this._key;
};

JammingSession.prototype.getName = function() {
	return this._name;
};

JammingSession.prototype.getUsers = function() {
	return this._players;
};

JammingSession.prototype.addUser = function(user) {
	return updateData(this._fb_ref, this._key, 'players', user, 'add').then(function(r){
    return r;
  });
};

JammingSession.prototype.deleteUser = function(user) {
	return updateData(this._fb_ref, this._key, 'players', user, 'delete').then(function(r){
    return r;
  });
};

JammingSession.prototype.getTracks = function() {
	return this._tracks;
};

JammingSession.prototype.addTrack = function(track) {
	return updateData(this._fb_ref, this._key, 'tracks', track, 'add').then(function(y){
	console.log('new_track', y)
	})
};

JammingSession.prototype.deleteTrack = function(track) {
	return updateData(this._fb_ref, this._key, 'tracks', track, 'delete').then(function(r){
    return r;
  });
};

async function getValues_js(fb_ref, table_name, key, child_key){
	let snapshot = await fb_ref.ref(table_name).child(key).child(child_key).once('value')

	return snapshot.val();
}

async function updateData(fb_ref, key, child_key, new_data, action){
	var updated_array = [];
	let snapshot = await fb_ref.ref('JammingSession').child(key+'/'+child_key).once('value')

	let olddata = snapshot.val()
	switch (action) {
		case 'delete':
		console.log('from updatedata delete', olddata)
			remove(olddata, new_data);
		console.log('from updatedata delete after', olddata)
			break;
		case 'add':
		console.log('from updatedata add', olddata)
			olddata.push(new_data)
		//console.log('from updatedata add after', old_data)
			break;
		default:
			break;
	}

 fb_ref.ref('JammingSession').child(key+'/'+child_key).set(olddata);
return snapshot;


}

function remove(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
}
