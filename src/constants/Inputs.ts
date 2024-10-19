type InputField = {
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  keyboardType?: 'default' | 'email-address';
  secureTextEntry?: boolean;
};

type SignUpFields = 'name' | 'email' | 'password';

export const getSignUpInputs = (
  state: Record<SignUpFields, string>,
  handleChange: (key: SignUpFields, value: string) => void,
): InputField[] => [
  {
    placeholder: 'Name',
    value: state.name,
    onChangeText: (value: string) => handleChange('name', value),
  },
  {
    placeholder: 'Email',
    value: state.email,
    onChangeText: (value: string) => handleChange('email', value),
    keyboardType: 'email-address',
  },
  {
    placeholder: 'Password',
    value: state.password,
    onChangeText: (value: string) => handleChange('password', value),
    secureTextEntry: true,
  },
];
