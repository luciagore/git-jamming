var Player = function(fb_ref){
	this._fb_ref = fb_ref;
  	this._key = fb_ref.ref('Player').push({'user_ids': [0]}).key;
}


Player.prototype.getKey = function () {
  return this._key
};

Player.prototype.add_user = function (user_id) {
	var old_user_ids = getValues_p(this._fb_ref, this._key, 'user_ids');
	
	old_user_ids.push(user_id)

  	this._fb_ref.ref('Player').child(this._key+'/user_ids').set(old_user_ids);
  	//console.log('after update', this.user_ids());
};

Player.prototype.getUsers = function () {
	return getValues_p(this._fb_ref, this._key, 'user_ids');
};

function getValues_p(ref, key, child_key){
	console.log('player', key)
	data = []
	ref.ref('Player').on('value', 
		function(snapshot) {
			var temp_values = snapshot.val();
			data = temp_values[key][child_key];
	});
	return data;
}