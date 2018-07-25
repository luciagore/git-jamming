function Track(){
  this._id = 0
  this._midi_ids = []
}

Track.prototype.getID = function () {
  return this._id
};

Track.prototype.add_midi = function (midi_id) {
  this._midi_ids.push(midi_id)
};

Track.prototype.midi_id = function () {
  return this._midi_ids;
};
