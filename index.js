var Caretaker = require('./src/caretaker');

var c = new Caretaker();

c.set('First');
c.set('Second');
c.save();

c.set('Third');
c.save();

c.set('Fourth');
c.save();

console.log('States: %d', c.count());
console.log('Last save: %s', c.undo());
console.log('Second save: %s', c.undo(1));
console.log('First save: %s', c.undo(0));