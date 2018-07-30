function MidiStore(instrument, user_id, mididata, fb_ref) {
  this._instrument = instrument;
  this._fb_ref = fb_ref;
  this._mididata = mididata
  this._user_id = user_id
  this._key = fb_ref.ref('MidiStore').push({instrument: instrument, user_id: user_id, mididata: mididata}).key;
}

MidiStore.prototype.getKey = function () {
  return this._key;
};

MidiStore.prototype.getInstrument = function () {
  return this._instrument;
};

MidiStore.prototype.getMididata = function () {
  return this._mididata
};

MidiStore.prototype.getUser = function () {
  return this._user_id
};

// MidiStore.prototype.updateMidi = function (newdata) {
//
// };
