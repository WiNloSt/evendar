export const getEvents = () => global.FB.api(
  '/me/events',
  'GET',
  {"fields":"cover,name,description,start_time,attending{name,picture}","limit":"25"},
  response => {
    console.log(response)
    return response
  }
)