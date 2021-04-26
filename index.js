// block chain in 10 minutes
const lightingHash = (data) =>{

    return data + '*';
  
  }
  
  
  
  
  class Block{
  
    constructor(data,hash, lastHash){
      this.data = data;
      this.hash = hash;
      this.lastHash = lastHash;
    }
  }
  
  // const fooBlock = new Block('foo-data', 'foo-hash', 'foo-lastHash');
  // console.log(fooBlock);
  
  class Blockchain {
  
    constructor (){
      const genesis = new Block('gen-data', 'gen-hash', 'gen-lastHash' );
      
      this.chain =[genesis];
    }
    
  addBlock(data){
    const lastHash = this.chain[this.chain.length-1].hash;
  
    const hash = lightingHash(data + lastHash);
  
    const block = new Block(data, hash, lastHash);
    this.chain.push(block);
  
  }
  
  }
  
  
  const fooblockchain = new Blockchain();
  fooblockchain.addBlock('one')
  fooblockchain.addBlock('two')
  fooblockchain.addBlock('three')
  
  console.log(fooblockchain);
  