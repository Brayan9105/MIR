const {Node, LinkList} = require('./linkList')

const returnMiddle = (list, size) => {

    let node = list
    let middleElement = 0

    if(size%2 === 0) middleElement = (size/2)+1
    else middleElement = Math.ceil(size/2)
    
    for(let i=1; i<middleElement;i++){
        node = node.ref
    }

    console.log(`The middle value of the list is: ${node}`)
}

let list = new LinkList()

list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.add(5)
list.add(6)

list.showList()
returnMiddle(list.head, list.size)

