class Collection {
  constructor() {
    this.traversables = {
    	1: 'a',
      2: 'b',
      3: 'c'
    };
  }

  *[Symbol.iterator]() {
  	let keys = Object.keys(this.traversables);
    for(let i=0; i<keys.length; i++) {
      yield this.traversables[keys[i]];
    }
  }

  set(key, value) {
    this.traversables[key] = value;
  }
}

var myCollection = new Collection();
console.log(myCollection); // Collection {traversables: {…}}
myCollection.set(5, 'e');
myCollection.set(6, 'f');
for (const value of myCollection) {
  console.log(value);
} // this loop will log:
// a
// b
// c
// e
// f
