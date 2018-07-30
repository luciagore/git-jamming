var User = function(fb_ref, name){
	this._fb_ref = fb_ref;
  	this._key = fb_ref.ref('User').push({'name': name}).key;
}

User.prototype.getKey = function () {
  return this._key
};


User.prototype.getName = function () {
  return getValues_u(this._fb_ref, this._key, 'name')
};


function getValues_u(ref, key, child_key){
	data = []
	ref.ref('User').on('value', 
		function(snapshot) {
			var temp_values = snapshot.val()
			data = temp_values[key][child_key]
	});

	return data;
}
