const req = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/db/connection')
describe('Generate Unique Id', ()=>{
    beforeEach( async()=>{
       await connection.migrate.rollback();
       await connection.migrate.latest();
    });
    afterAll( async ()=>{
        await connection.destroy();
    })
    it('Should be able to create a new ong ',  async ()=>{
        const res = await req(app).post('/ong/create')
        /* .set('Authorization', 'id de uma ong valida')  para fazer o teste com header*/
        .send({
            name: "Code Rock Solutions",
            mail: "coderocksolutions@gmail.com",
            whatsapp: "22997318077",
            city: "campos",
            uf: "rj"
        })
        expect(res.body).toHaveProperty('id');
        expect(res.body.id).toHaveLength(8);
    });
});