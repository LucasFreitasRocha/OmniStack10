const generateID = require('../../src/utils/generateUniqueId');
describe('Generate Unique Id', ()=>{
    it('Should generate an unique id with 8 characters ', ()=>{
        const id = generateID();
        expect(id).toHaveLength(8);
    });
});