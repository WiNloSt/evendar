export const getEvents = () => global.FB.api(
  '/me/events',
  'GET',
  {"fields":"picture{url},name,attending"},
  response => {
    console.log(response)
    return response
  }
)
