
'use strict'

const DLL = require('./dbl')

const HashTable = module.exports = function(size=8192) {
  this.size = size
  this.buckets = [...Array(this.size)]
}

HashTable.prototype.hashKey = function(key) {
  if(!key) throw new Error('key required for hash to function... derp')
  let hash = key.split('').reduce((acc, curr) => acc + curr.charCodeAt(0), 0) % this.size

  return hash
}

HashTable.prototype.set = function(key, value) {
  let hash = this.hashKey(key)

  if(!this.buckets[hash]) this.buckets[hash] = new DLL()
  if(this.buckets[hash]) this.buckets[hash].append(value)
  // {
  //   let curr = this.buckets[hash].head
  //   while(curr.next) curr = curr.next
  //   curr.next
  // }
}

HashTable.prototype.get = function(key) {
  return this.buckets[this.hashKey(key)]
}

HashTable.prototype.remove = function(key) {
  let address = this.hashKey(key)
  this.buckets[address] ? delete this.buckets[address] : new Error('invalid key')
}

//man tests
let testHT = new HashTable()
testHT.set('Scott', 'Scott')
testHT.set('tstco', 'tstco')
console.log('round 1:  ', testHT.get('scott'));
testHT.set('scott', 'scott')
console.log('round 2:  ', testHT.get('scott'));
testHT.set('ttocs', 'ttocs')
// console.log(testHT.get('Scott'))
console.log('round 3:  ', testHT.get('scott'))
testHT.buckets[557].remove('scott')
console.log('removed i hope:')
console.log(testHT.get('scott'));
