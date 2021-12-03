const supertest = require('supertest');
const app = require('../server.js');

const request = supertest(app);

/* --> connectie met DB om te zien van "ja da werkt, ja dit niet blablabl'"
--> docker api werkt
*/

/**
 * stappenplan:
 * supertest install en zien werkt
 * endpoint zelf testen, met standaard code
 * 
 * db checks doen 
 */

describe('/ endpoint', () => {
  test('GET / endpoint', async (done) => {
    try{
      const response = await request.get('/')
      .expect(response.status).toBe(200)
      .expect(response.body.res.length).toBeGreaterThan(10)
      .expect(200,done)
    }
    catch{(e) => {
      console.log(e)
    }}
  })
})
//thrown: "Exceeded timeout of 5000 ms for a test. Use jest.setTimeout(newTimeout) to increase the timeout value, if this is a long-running test."