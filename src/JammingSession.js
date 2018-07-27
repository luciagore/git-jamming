var JammingSession = function (fb_ref) {
	this._fb_ref = fb_ref;
  	this._key = fb_ref.ref('JammingSesssion').push({'users': [0], 'tracks': [0]}).key;
}

JammingSession.prototype.getKey = function() {
	return this._key;
};

JammingSession.prototype.getUsers = function() {
	return getValues(this._fb_ref, this._key, 'users')
};

JammingSession.prototype.addUser = function(user) {
	updateData(this._fb_ref, this._key, 'users', user, 'add')
};

JammingSession.prototype.deleteUser = function(user) {
	updateData(this._fb_ref, this._key, 'users', user, 'delete')
};

JammingSession.prototype.getTracks = function() {
	return getValues(this._fb_ref, this._key, 'tracks')
};

JammingSession.prototype.addTrack = function(track) {
	updateData(this._fb_ref, this._key, 'tracks', track, 'add')
};

JammingSession.prototype.deleteTrack = function(track) {
	updateData(this._fb_ref, this._key, 'tracks', track, 'delete')
};

function getValues(ref, key, child_key){
	data = []
	ref.ref('JammingSession').on('value', 
		function(snapshot) {
			var temp_values = snapshot.val()
			data = temp_values[key][child_key];
	});
	return data;
}

function updateData(fb_ref, key, child_key, new_data, action){
	var old_data = getValues(fb_ref, key, child_key);
	
	switch (action) {
		case 'delete':
		console.log('from updatedata delete', old_data)
			remove(old_data, new_data);
		console.log('from updatedata delete after', old_data)
			break;
		case 'add':
		//console.log('from updatedata add', old_data)
			old_data.push(new_data)
		//console.log('from updatedata add after', old_data)
			break;
		default:
			break;
	}

  	fb_ref.ref('JammingSession').child(key+'/'+child_key).set(old_data, function(){console.log('db updated')});
 
}

function remove(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
}