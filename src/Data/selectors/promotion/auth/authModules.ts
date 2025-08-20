export const AUTH_SELECTORS = {
  signInTitle: "h5.MuiTypography-h5", 
  signUpLink: "a[href='/sign-up']",
  forgotPasswordLink: "a[href='/forgot-password']",

  alertBox: "div[role='alert']",
  alertMessage: "div[role='alert'] .MuiAlert-message",

  emailInput: "input[name='email']",
  emailLabel: "label[for=':r1:']",
  passwordInput: "input[name='password']",
  passwordLabel: "label[for=':r2:']",

  passwordToggle: "button[type='button'] svg", 

  signInButton: "button[type='submit']#\\:r3:",
  
  form: "form[novalidate]",
  emailFieldWrapper: "div.MuiFormControl-root:has(input[name='email'])",
  passwordFieldWrapper: "div.MuiFormControl-root:has(input[name='password'])",
};
