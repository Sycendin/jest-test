const googleSearch = require('./script')
dbMock = [
    'dog.com',
    'cheese.com',
    'pokemon.com',
    'dogpictures.com'
];
it('this is a test', () =>{
    expect('hello').toBe('hello')
    // googleSearch('testtest', dbMock)
})


it('searching google', () =>{
    expect(googleSearch('cheese',dbMock)).toEqual(['cheese.com'])
    // googleSearch('testtest', dbMock)
})