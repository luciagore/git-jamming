function MidiStore(instrument) {
  this._instrument = instrument;
}

MidiStore.prototype.getInstrument = function () {
  return this._instrument;
};
