import P from 'bluebird'
import _ from 'lodash'

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
  {"fields":"picture{url},name,id,attending"},
  function(response) {
    resolve(response)
  }
));

const targetIds = [
  '148584322421822','873530022667755','872547279487598',
  '915919965208921','1350273538401150','925137314231681'
]


export const getAllTargetEvents = () => {
  return (P.map(targetIds, getTargetEvents).then(x => _.map(x, 'data'))).then(x => _.compact(_.flattenDeep(x))).catch(console.error)
  // .then(x => _.compact(_.flattenDeep(x)))
}

const updateEventStatus = (eventId, status) => new Promise(resolve => global.FB.api(
  `/${eventId}/${status}`,
  'POST',
  {},
  function(response) {
    resolve(response)
  }
));

export const attend = (eventId) => updateEventStatus(eventId, 'attending');
export const maybe = (eventId) => updateEventStatus(eventId, 'maybe');
export const interest = (eventId) => updateEventStatus(eventId, 'interested');
export const cancel = (eventId) => updateEventStatus(eventId, 'declined');
