export const LoginFormConfig = [
 {
  name: 'email',
  label: 'Email',
  type: 'email',
  required: true,
  rules: [
   { required: true, message: 'Please input your email!' },
   { type: 'email', message: 'Please enter a valid email!' },
  ],
 },
 {
  name: 'password',
  label: 'Password',
  type: 'password',
  required: true,
  rules: [{ required: true, message: 'Please input your password!'}],
 },
]

export const SignUpFormConfig = [
 {
   name: 'firstName',
   label: 'First Name',
   type: 'text',
   rules: [
     { required: true, message: 'Please input your first name!' },
     { min: 2, max: 20, message: 'First name should be between 2 to 20 characters' }
   ],
 },
 {
   name: 'lastName',
   label: 'Last Name',
   type: 'text',
   rules: [
     { required: true, message: 'Please input your last name!' },
     { min: 2, max: 20, message: 'Last name should be between 2 to 20 characters' }
   ],
 },
 {
   name: 'email',
   label: 'Email',
   type: 'email',
   rules: [
     { required: true, message: 'Please input your email!' },
     { type: 'email', message: 'Please enter a valid email!' }
   ],
 },
 {
   name: 'password',
   label: 'Password',
   type: 'password',
   rules: [
     { required: true, message: 'Please input your password!' },
     { min: 6, message: 'Password must be at least 6 characters long' }
   ],
 },
 {
   name: 'confirmPassword',
   label: 'Confirm Password',
   type: 'password',
   rules: [
     { required: true, message: 'Please confirm your password!' },
     { min: 6, message: 'Password must be at least 6 characters long' }
   ]
 },
 {
   name: 'mobileNumber',
   label: 'Mobile Number',
   type: 'text',
   rules: [
     { required: true, message: 'Please input your mobile number!' },
     {
       pattern: /^[6-9]\d{9}$/,
       message: 'Please enter a valid 10-digit Indian mobile number',
     },
   ],
 },
 {
   name: 'role',
   label: 'Role',
   type: 'select',
   rules: [{ required: true, message: 'Please select your role!' }],
   options: [
     { value: 'user', label: 'User' },
     { value: 'etm', label: 'ETM' },
     { value: 'eh', label: 'EH' },
     { value: 'lt', label: 'LT' }
   ],
 },
 {
   name: 'age',
   label: 'Age',
   type: 'number',
   rules: [
     { required: true, message: 'Please input your age!' },
   ],
 },
 {
   name: 'city',
   label: 'City',
   type: 'text',
   rules: [{ required: true, message: 'Please input your city!' }],
 },
 {
   name: 'state',
   label: 'State',
   type: 'select',
   rules: [{ required: true, message: 'Please select your state!' }],
   options: [
     "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
     "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
     "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
     "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
     "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
     "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi", "Puducherry"
   ].map(state => ({ value: state, label: state }))
 },
 {
   name: 'town',
   label: 'Town',
   type: 'text',
   rules: [{ required: true, message: 'Please input your town!' }],
 },
 {
   name: 'pinCode',
   label: 'Pin Code',
   type: 'text',
   rules: [
     { required: true, message: 'Please input your pin code!' },
     { pattern: /^\d{6}$/, message: 'Please enter a valid 6-digit pin code' },
   ],
 },
];
