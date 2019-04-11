const enhancer = require('./enhancer.js');
// test away!

describe('enhancer tests', ()=>{
    describe('repair', ()=>{
        it('should return the durability of item to 100 if less than 100', ()=>{
            const item = {name:'cracker', enhancement: 1, durability: 20};
            const outcome = {name: 'cracker', enhancement: 1, durability: 100};
            
            const test = enhancer.repair(item);

            expect(test).toEqual(outcome)
        })
    })
})