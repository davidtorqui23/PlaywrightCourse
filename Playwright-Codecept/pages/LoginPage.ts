const { I } = inject();

module.exports = {

  loginForm: "#signin_button",
  username: "#user_login",
  password: "#user_password",
  submitButton: ".btn-primary",

  submitLogin(username, password){
    I.click(this.loginForm)
    I.fillField(this.username, username)
    I.fillField(this.password, password)
    I.click(this.submitButton)

    I.seeElement('.alert-error')
  },
}