
const fetch = require('node-fetch');

const swapi = require('./script2')

// it('calls swapi to get people', () =>{
//     expect.assertions(1)
//     swapi.getPeople(fetch).then(data => {
//         expect(data.count).toEqual(82222)
//     })
// })


it('calls swapi to get people', async () => {
    jest.setTimeout(50000);
	expect.assertions(1);
	const data = await swapi.getPeople(fetch);
	expect(data.count).toEqual(82);
})
 

it('calls swapi to get people', async () => {
    jest.setTimeout(50000);
	expect.assertions(1);
	const data = await swapi.getPeople(fetch);
	expect(data.count).toEqual(80);
})

it('calls swapi to get people with promise', async () => {
    jest.setTimeout(50000);
	expect.assertions(2);
	const data = await swapi.getPeoplePromise(fetch);
	expect(data.count).toEqual(82);
	expect(data.results.length).toBeGreaterThan(5);
})


//Mock

it('getPeople returns count and results', () =>{
    const mockFetch = jest.fn()
    .mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
            count: 82,
            results: [0,1,2,3,4,5]
        })
    }))
expect.assertions(4)
return swapi.getPeoplePromise(mockFetch).then(data =>{
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people');
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(3);
})
})