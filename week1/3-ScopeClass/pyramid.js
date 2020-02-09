const pyramid = (level) => {
    let str = ''

    if(level > 0){
        let auxStr = ''
        let space = level-1
        let sharp = 1

       for(let i=0; i<level;i++){
            
            for(let x=0; x<space; x++){
                auxStr += '-' 
            }
           
           for(let x=0; x<sharp; x++){
            auxStr += '#'
           }

            for(let x=0; x<space; x++){  
            auxStr += '-' 
            }
           
           if(i != level){
               auxStr += '\n'
           }
           str +=auxStr
           auxStr=''
           space -= 1
           sharp += 2
           
       }
    }else{
        console.log('You need digit a number greater than 0')
    }
   return str
}



console.log(pyramid(0))
console.log(pyramid(1))
console.log(pyramid(2))
console.log(pyramid(3))
console.log(pyramid(4))