const { Given, When, Then } = require('@cucumber/cucumber');
const { render, screen } = require('@testing-library/react');
const userEvent = require('@testing-library/user-event');
const Signin = require('../client/pages/signin');

Given('the user is on the Sign In page', async () => {
  render(<Signin />);
});

When('the user provides valid credentials', async () => {
  // Implement logic to fill in the form with valid credentials
  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const loginButton = screen.getByText('Login');

  userEvent.type(emailInput, 'ideaweavep@gmail.com');
  userEvent.type(passwordInput, 'sku@ADMIN20');
  userEvent.click(loginButton);
});

Then('the user should be redirected to the home page', async () => {
await waitFor(() => expect(window.location.pathname).toBe('/'));
});

When('the user provides invalid credentials', async () => {
  // Implement logic to fill in the form with invalid credentials
  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const loginButton = screen.getByText('Login');

  userEvent.type(emailInput, 'sreerag@mail.com');
  userEvent.type(passwordInput, 'Invalid@123');
  userEvent.click(loginButton);
});

Then('an error message should be displayed', async () => {
  const errorMessage = screen.getByText('User not found');
  expect(errorMessage).toBeInTheDocument();
});
