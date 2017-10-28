import P from 'bluebird'
import _ from 'lodash'

export const getEvents = () =>
  new Promise(resolve =>
    global.FB.api('/me/events', 'GET', { fields: 'picture{url},name,attending' }, response => {
      console.log(response)
      return resolve(response)
    })
  )

// FOR Group & Page
export const getTargetEvents = targetId =>
  new Promise(resolve =>
    global.FB.api(
      `/${targetId}/events`,
      'GET',
      { fields: 'picture{url},name,id,attending,description,place{name},cover,parent_group,start_time,end_time' },
      function(response) {
        resolve(response)
      }
    )
  )

const targetIds = [
  '148584322421822',
  '873530022667755',
  '872547279487598',
  '915919965208921',
  '1350273538401150',
  '925137314231681'
]

const targetIds2 = [
  '148584322421822',
  '873530022667755',
  '872547279487598',
  '915919965208921',
  '1350273538401150',
  '925137314231681',
  '240703846140892'
]

const targetIds3 = [
  '148584322421822',
  '873530022667755',
  '872547279487598',
  '915919965208921',
  '1350273538401150',
  '925137314231681',
  '240703846140892',
  '233347630179372'
]

const templates = {
  1: targetIds,
  2: targetIds2,
  3: targetIds3
}

export const getAllTargetEvents = templateId => {
  return P.map(templates[templateId], getTargetEvents)
    .then(x => _.map(x, 'data'))
    .then(x => _.compact(_.flattenDeep(x)))
    .catch(console.error)
}

const updateEventStatus = (eventId, status) =>
  new Promise(resolve =>
    global.FB.api(`/${eventId}/${status}`, 'POST', {}, function(response) {
      resolve(response)
    })
  )

export const attend = eventId => updateEventStatus(eventId, 'attending')
export const maybe = eventId => updateEventStatus(eventId, 'maybe')
export const interest = eventId => updateEventStatus(eventId, 'interested')
export const cancel = eventId => updateEventStatus(eventId, 'declined')
