class Maze{
    constructor(size){
        this.size = size
        this.x = 0 
        this.y = 0

        this.prizeX = Math.ceil(Math.random() * size)
        this.prizeY = Math.ceil(Math.random() * size)

        this.blocks = []

    }

    addBlock(x ,y){
        if( 
            (x !== this.x && y !== this.y) && 
            (x !== this.prizeX && y !== this.prizeY)
        ){
            this.blocks.push( new Block(x, y) )
            return true
        }else return false
       
    }

    moveRight( num=1 ){
        for(let i=0; i<this.blocks; i++){
            if([this.y, this.x + num] === this.blocks[i]) return false
        }

        if( ( this.x + num ) < this.size ) {
            this.x += num
            this.drawBoard()
            return true
        }else return false
    }

    moveLeft( num=1 ){
        if( (this.x-num) >= 0 ) {
            this.x -= num
            this.drawBoard()
            return true
        }else return false
    }

    moveUp( num=1 ){
        if( (this.y - num) >= 0 ) {
            this.y -= num
            this.drawBoard()
            return true
        }else return false
    }

    moveDown(num=1){
        if( (this.y+num) < this.size ) {
            this.y += num
            this.drawBoard()
            return true
        }else return false
    }

    getMyPosition(){
        return [this.y, this.x]
    }

    won(){
        if(this.x === 3 && this.y === 3) return true
        else return false
    }

    drawBoard(){
        let maze = ''
        let drawBlocks = this.blocks

        for(let i =0; i < this.size; i++){

            for(let j=0; j<this.size; j++){

                if(i === this.y && j === this.x){
                    maze += 'R '
                }else if(i===3 && j===3){
                    maze += 'P '
                
                }else if(){

                }else maze += '* '
                
            }

            maze += '\n'
        }
        console.log(maze)
    } 
}

class Block{
    constructor(x, y){
        this.x = x
        this.y = y
    }
}



var game = new Maze(4);
game.addBlock(1, 1)
game.addBlock(0, 0)
console.log(game.blocks)
// console.log(game.moveRight()); // true
// console.log(game.won()); // false

// console.log(game.getMyPosition()); // [0, 1]
// console.log(game.moveUp()); // false

// console.log(game.moveRight(2)); // true
// console.log(game.getMyPosition()); // [0, 3]
// console.log(game.won()); // false

// console.log(game.moveDown(3)); // true
// console.log(game.won()); // true

// console.log(game.drawBoard());
// * * * *
// * R * *
// * * * *
// * * * P
