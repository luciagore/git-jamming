var MidiStore = function(fb_ref, instrument, user_id, mididata) {
  this._instrument = instrument;
  this._fb_ref = fb_ref;
  this._mididata = mididata
  this._user_id = user_id
  this._key = ""
        
}

MidiStore.prototype.create = function () {
  this._key = this._fb_ref.ref('MidiStore').push({"instrument": this._instrument, "user_id": this._user_id, "mididata": this._mididata, 'length': 0}).key;
};

MidiStore.prototype.existing = function (key) {
  that = this;
  this._fb_ref.ref('MidiStore').child(key).once('value').then(
    function(snapshot){
      data = snapshot.val()
    
      that._instrument = data['instrument'];
      that._user_id = data['user_id']
      that._key = key
  });

};


MidiStore.prototype.getKey = function () {
  return this._key;
};

MidiStore.prototype.getInstrument = function () {
  return this._instrument;
};

MidiStore.prototype.getMididata = function () {
  return getValues_m(this._fb_ref, 'MidiStore',this._key, 'mididata').then(function(r){
    return r;
  });
};

MidiStore.prototype.getUser = function () {
  return this._user_id;
};

MidiStore.prototype.getLength = async function () {
  
  let value = await getValues_m(this._fb_ref, 'MidiStore', this._key, 'length');

  return value;
};

MidiStore.prototype.updateLength = function (length) {

  that = this;
  getValues_m(this._fb_ref, 'MidiStore', this._key, 'length').then(

    function(data){
      console.log('data in uopdate len', data);
      that._fb_ref.ref('MidiStore').child(that._key+'/length').set(data+length);
      
    });
 	
};

MidiStore.prototype.updateMidi = function (newdata) {
  that = this;
 	getValues_m(this._fb_ref, 'MidiStore', this._key, 'mididata').then(function(res){
  console.log('promise resolved', res)
    
  console.log('update old data', res)
 
    for (var i = 0; i < newdata.length; i++){
      res.push(newdata[i]);
    }
    that._fb_ref.ref('MidiStore').child(that._key+'/mididata').set(res);
 
  });


};


async function getValues_m(fb_ref, table_name, key, child_key){
    let snapshot = await fb_ref.ref(table_name).child(key).child(child_key).once('value')

    return snapshot.val();

  //   .then(function(snapshot) {
  //       data = snapshot.val();
  //       console.log('data', data)
  //       return data
  // }, function(error) {
  //   // The Promise was rejected.
  //   console.error(error);
  // };



	
}
