class Block{
    constructor(timestamp, prevHash, Hash, data){
        this.timestamp = timestamp;
        this.prevHash = prevHash;
        this.Hash = Hash;
        this.data = data;
    }

    toString(){
        return `Block -
        Timestamp    : ${this.timestamp}
        PreviousHash : ${this.prevHash}
        Hash         : ${this.Hash}
        Data         : ${this.data}`;
    }
}

const newBlock = new Block(Date, 12345, 67890, 'yoda got 2 BC');

console.log(newBlock.toString())

