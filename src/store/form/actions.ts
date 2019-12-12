export const SET_EMAIL = 'SET_EMAIL'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const SET_COMPANY = 'SET_COMPANY'
export const SET_TIMEZONE = 'SET_TIMEZONE'

export const setEmail = (email: any) => ({
    type: SET_EMAIL,
    payload: { email }
});
export const setUserProfile = ({firstName, lastName, gender: {value}} : any) => ({
    type: SET_USER_PROFILE,
    payload: {firstName, lastName, value}
})
export const setCompany = (company: any) => ({
    type: SET_COMPANY,
    payload: { company }
})
export const setTimezone = ({timezone: {value}}: any) => ({
   type: SET_TIMEZONE,
   payload: { value }
});
