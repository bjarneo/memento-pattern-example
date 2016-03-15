var Memento = require('./memento');

function Originator() {
    this.state = null;
    this.memento = null;
}

Originator.prototype = {
    set: function(state) {
        this.state = state;
    },

    save: function() {
        return new Memento(this.state);
    },

    restore: function(memento) {
        return memento.getState();
    }
};

module.exports = Originator;