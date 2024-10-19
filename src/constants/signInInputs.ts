type InputField = {
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  keyboardType?: 'default' | 'email-address';
  secureTextEntry?: boolean;
};

export const getSignInInputs = (
  email: string,
  setEmail: (value: string) => void,
  password: string,
  setPassword: (value: string) => void,
): InputField[] => [
  {
    placeholder: 'Email',
    value: email,
    onChangeText: setEmail,
    keyboardType: 'email-address',
  },
  {
    placeholder: 'Password',
    value: password,
    onChangeText: setPassword,
    secureTextEntry: true,
  },
];
