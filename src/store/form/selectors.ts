interface InitialState {
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    company: string;
    timezone: string;
}

export const initialState: InitialState = {
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    company: '',
    timezone: ''
};

export const emailSelector = ({ form }: any) => form.email
export const firstNameSelector = ({form}: any) => form.firstName
export const lastNameSelector = ({form}: any) => form.lastName
export const genderSelector = ({form}: any) => form.gender
export const companySelector = ({form}: any) => form.company
export const timezoneSelector = ({form}: any) => form.timezone