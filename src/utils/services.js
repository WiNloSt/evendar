export const getEvents = () => new Promise(resolve => global.FB.api(
  '/me/events',
  'GET',
  {"fields":"picture{url},name,attending"},
  response => {
    console.log(response)
    return resolve(response)
  }
))

// FOR Group & Page
export const getTargetEvents = (targetId) => new Promise(resolve => global.FB.api(
  `/${targetId}/events`,
  'GET',
  {},
  function(response) {
    resolve(response)
  }
));
