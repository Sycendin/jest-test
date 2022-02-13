
const googleSearch = require('./script')
dbMock = [
    'dog.com',
    'cheese.com',
    'pokemon.com',
    'dogpictures.com'
];

describe("Filter function", () => {
    it('this is a test', () =>{
        expect('hello').toBe('hello')
    })
  });


it('searching google', () =>{
    expect(googleSearch('cheese',dbMock)).toEqual(['cheese.com'])
    // googleSearch('testtest', dbMock)
})

it('work with undefined and null input', ()=>{
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
})

it('does not return more than 3 matches', ()=>{
    expect(googleSearch('.com', dbMock).length).toEqual(3);
})