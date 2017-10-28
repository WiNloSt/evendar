export const getEvents = () => new Promise(resolve => global.FB.api(
  '/me/events',
  'GET',
  {"fields":"picture{url},name,attending"},
  response => {
    console.log(response)
    return resolve(response)
  }
))

export const getGroupEvents = (groupId) => new Promise(resolve => global.FB.api(
  `/${groupId}/events`,
  'GET',
  {},
  function(response) {
    resolve(response)
  }
));
