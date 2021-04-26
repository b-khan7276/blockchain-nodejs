const Blockchain = require ('./blockchain');
const Block = require('./block');

describe('Blockchain', ()=>{
    const blockchain = new Blockchain();
    
    it('contains a `chain` Array instance ', () =>{
        expect (blockchain.chain instanceof Array).toBe(true);
    });
     
    it('starts with the gensis block ', () =>{
        expect(blockchain.chain[0]).toEqual(Block.genesis());

    });
    it ('adds a new block to the chain', ()=>{
        const newData = 'foo bar';
        blockchain.addBlock({data: newData});

        expect(blockchain.chain[blockchain.chain.length-1].data).toEqual(newData);
    })

    decribe('isValidChain()', ()=>{
        describe('when the chain does not start with the gensis block',()=>{
            it('returns false', ()=>{});
        });

        decribe('when the chain starts with the gensis block and has multiple blocks', ()=>{
            describe('and a lastHash reference has changed', ()=>{
                it('return false',()=>{}); 
            });
            describe('and the chain constains a block with an invalid field',()=>{
                it('returns false', ()=>{}); 
            });

            describe('and the chain does not contain any invalid blocks', ()=>{
                it('returns true', ()=>{});
            });
        });
    })
});