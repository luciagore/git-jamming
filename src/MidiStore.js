function MidiStore(instrument, mididata) {
  this._id = 0
  this._instrument = instrument
  this._mididata = mididata

}

MidiStore.prototype.getID = function () {
  return this._id;
};

MidiStore.prototype.instrumentID = function () {
  return this._instrument
};

MidiStore.prototype.mididata = function () {
  return this._mididata
};
