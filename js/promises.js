
let lastCommit = (username) => {
  let url = `https://api.github.com/users/${username}/events/public`
  return fetch(url, {headers: {'Authorization': `${GITHUB_API_TOKEN}`}})
    .then(response => response.json())
    .then(events => events.filter(event => event.type === 'PushEvent'))
    .then(pushEvents =>
      console.log(pushEvents[1].created_at));

}

lastCommit('b-audiesha').then(r => {})


const wait = (milliseconds) => {
  return new Promise ((resolve, reject) => {
    setTimeout(()=>{
      resolve();
    }, milliseconds);
  })
}


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
let random = Math.floor(Math.random()*5000);
wait(random).then(() => console.log(`Whoa! it's been ${random / 1000} seconds!`))
