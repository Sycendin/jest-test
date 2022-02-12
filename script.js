const googleDatabase = [
    'google.com',
    'reddit.com',
    'facebook.com',
    'twitch.tv',
    'google2.com',
    '10google2.com'
]
const googleSearch = (search, db) =>{
    const matches = db.filter((site) => {
        return  site.includes(search);     
    })
    return matches.length > 3 ? matches.slice(0,3) : matches;
}
// console.log(googleSearch('google2', googleDatabase));
module.exports = googleSearch;

