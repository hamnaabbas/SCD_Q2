
const request = require('supertest');
const express = require('express');
const ordersRouter = require('./ordersRouter'); 
const app = express();
app.use(express.json());
app.use('/api/orders', ordersRouter);

        test('should return 400 if userId, productId, or quantity is missing', async () => {
            const response = await request(app)
                .post('/api/orders')
                .send({ productId: 1, quantity: 1 }) 
                .expect('Content-Type', /json/)
                .expect(400);

            expect(response.body.success).toBe(false);
            expect(response.body.error).toBe('UserId, productId, and quantity are required');
        });

});
