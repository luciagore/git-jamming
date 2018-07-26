function Track(fb_ref){
  this._id = fb_ref.ref('TracK').push({'midi_ids': []}).key
  this._midi_ids = []
}

Track.prototype.getID = function () {
  return this._id
};

Track.prototype.add_midi = function (midi_id) {
  this._midi_ids.push(midi_id)
};

Track.prototype.midi_ids = function () {
  return this._midi_ids;
};
