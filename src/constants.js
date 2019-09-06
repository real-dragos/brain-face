// Properties

export const navigationDefaultScoll = 1;
export const particlesParams = {
    particles: {
        number: {
            value: 200,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}


// Routes
export const mainUrl = "/main/";
export const loginUrl = "/login/";


//Form Constants
export const emailData = {
    id: 'email',
    name: 'email',
    value: '',
    placeholder: 'Enter Email',
    label: 'Email',
    type: 'email',
    required: true,
    autoComplete: 'email'
}

export const passwordData = {
    id: 'password',
    name: 'password',
    value: '',
    placeholder: 'Enter Password',
    label: 'Password',
    type: 'password',
    required: true,
    autoComplete: 'current-password'
}

export const nameData = {
    id: 'fullname',
    name: 'fullname',
    value: '',
    placeholder: 'Enter Your Full Name',
    label: 'Full Name',
    type: 'text',
    required: true
}

export const tokenName = 'tokenBrain';

