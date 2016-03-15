var Originator = require('./originator');

function Caretaker() {
    this.states = [];

    this.originator = new Originator();
}

Caretaker.prototype = {
    set: function(state) {
        this.originator.set(state);
    },

    save: function() {
        this.states.push(this.originator.save());
    },

    undo: function(i) {
        if (!this.states.length) {
            return;
        }

        if (!i && i !== 0) {
            i = this.states.length - 1;
        }

        return this.originator.restore(this.states[i]);
    },

    count: function() {
        return this.states.length;
    }
};

module.exports = Caretaker;