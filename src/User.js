var User = function(fb_ref, name){
	this._fb_ref = fb_ref;
	this._name = name
  this._key = "";
}

User.prototype.create = function () {
	this._key = this._fb_ref.ref('User').push({"name": this._name}).key;
};

User.prototype.existing = function (key) {
	that = this;
	 this._fb_ref.ref('User').child(key).once('value').then(
	   function(snapshot){
	     data = snapshot.val()

	     that._name = data['name'];
	     that._key = key
	 });
};

User.prototype.getKey = function () {
  return this._key
};


User.prototype.getName = function () {
	return this._name
};
