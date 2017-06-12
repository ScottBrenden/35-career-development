'use strict'

const Node = function(val, next=null, prev=null) {
  this.val = val
  this.next = next
  this.prev = prev
}

const DLL = module.exports = function() {
  this.head = null
  this.tail = null
  this.length = 0
}


DLL.prototype.append = function(val) {
  if(!val) throw new Error('Please provide a value')
  if(!this.head) return this.head = this.tail = new Node(val)

  let curr = this.tail
  curr.next = this.tail = new Node(val)
  this.tail.prev = curr

  // let curr = this.head
  // while(curr.next) curr = curr.next
  // this.tail = curr.next = new Node(val)
  // curr.next.prev = curr

  this.length++
  return this.head
}

DLL.prototype.prepend = function(val) {
  if(!val) throw new Error('must provide value')
  if(!this.tail) return this.tail = this.head = new Node(val)

  let curr = this.tail
  while(curr.prev) curr = curr.prev
  this.tail = curr.prev = new Node(val)
  curr.prev.next = curr
  // this.tail.prev = new Node(val)
  // this.tail.prev.next = this.tail
  // this.tail = this.tail.prev
  this.length++
  return this.tail
}

DLL.prototype.remove = function(val) {
  if(!val) throw new Error('must provide value')
  if(!this.tail) throw new Error('the list is empty')

  let curr = this.head
  for(let i = 0; i < this.length; i++){
    if(curr.val = val){
      if(curr.prev && curr.next){
        curr.prev.next = curr.next
        curr.next.prev =curr.prev
      } else if (curr = this.head){
        this.head = curr.next
        this.head.prev = null
      } else {
        this.tail = curr.prev
        curr.prev.next = null
      }
      break
    } else curr = curr.next
  }

}
