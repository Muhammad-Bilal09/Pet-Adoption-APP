import useChangePassword from '../screens/changePassword/useChangePassword';

const {
  currentPassword,
  newPassword,
  confirmPassword,
  setCurrentPassword,
  setNewPassword,
  setConfirmPassword,
} = useChangePassword();

export const petTypes = [
  {label: 'Dogs', value: 'dogs'},
  {label: 'Cats', value: 'cats'},
  {label: 'Bunnies', value: 'bunnies'},
  {label: 'Birds', value: 'birds'},
  {label: 'Turtles', value: 'turtles'},
];

export const yesNoOptions = [
  {label: 'Yes', value: 'yes'},
  {label: 'No', value: 'no'},
];

export const genderOptions = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
];

export const yesNoOption = [{label: 'Donation', value: 'Donation'}];

export const vaccinationOptions = [
  {label: 'Yes', value: 'yes'},
  {label: 'No', value: 'no'},
];

export const inputs = [
  {
    label: 'Current Password',
    placeholder: 'Enter your current password',
    value: currentPassword,
    onChangeText: setCurrentPassword,
    secureTextEntry: true,
  },
  {
    label: 'New Password',
    placeholder: 'Enter your new password',
    value: newPassword,
    onChangeText: setNewPassword,
    secureTextEntry: true,
  },
  {
    label: 'Confirm New Password',
    placeholder: 'Confirm your new password',
    value: confirmPassword,
    onChangeText: setConfirmPassword,
    secureTextEntry: true,
  },
];

export const SignUpTest = (
  state: {name: string; email: string; password: string},
  handleChange: (key: 'email' | 'name' | 'password', value: string) => void,
) => {
  return [
    {
      placeholder: 'Name',
      value: state.name,
      onChangeText: (value: string) => handleChange('name', value),
    },
    {
      placeholder: 'Email',
      value: state.email,
      onChangeText: (value: string) => handleChange('email', value),
      keyboardType: 'email-address' as const,
    },
    {
      placeholder: 'Password',
      value: state.password,
      onChangeText: (value: string) => handleChange('password', value),
      secureTextEntry: true,
    },
  ];
};

export const SignInTest = (
  email: any,
  setEmail: any,
  password: any,
  setPassword: any,
) => {
  return [
    {
      placeholder: 'Email',
      value: email,
      onChangeText: setEmail,
      keyboardType: 'email-address' as 'email-address',
    },
    {
      placeholder: 'Password',
      value: password,
      onChangeText: setPassword,
      secureTextEntry: true,
    },
  ];
};
