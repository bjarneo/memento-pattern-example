function Memento(state) {
    this.state = state;
}

Memento.prototype = {
    getState: function() {
        return this.state;
    }
};

module.exports = Memento;