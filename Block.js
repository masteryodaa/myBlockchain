const SHA256 = require("crypto-js/sha256")


class Block{
    constructor(timestamp, prevHash, hash, data){
        this.timestamp = timestamp;
        this.prevHash = prevHash;
        this.hash = hash;
        this.data = data;
    }

    toString(){
        return `Block -
        Timestamp    : ${this.timestamp}
        PreviousHash : ${this.prevHash}
        Hash         : ${this.hash}
        Data         : ${this.data}`;
    }

    static genesis(){
        return new this(Date(), '-----', 'f!r57-H45h', []);
    }

    static newBlock(lastBlock, data){
        const timestamp = Date();
        const prevHash = lastBlock.hash;
        const hash = Block.hash();

        return new this(timestamp, prevHash, hash, data);
    }

    static hash(timestamp, lastHash, data){
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }
}

// const testBlock = new Block(Date(), 12345, 67890, 'yoda got 2 BC');
// console.log(testBlock.toString())

// console.log(Block.genesis().toString())

const testBlock = Block.newBlock(Block.genesis(), 'yoda received 2DogeCoin');
console.log(testBlock.toString())
