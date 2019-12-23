class Authentication extends VerifyUser{
    constructor(){
        super();
        this.loginElem = document.getElementById("form-login");
        this.passwordElem = document.getElementById("form-password");
        this.buttonLoginElem = document.getElementById("form-button-sign-up");
        this.check();
    }
    check(){
        this.buttonLoginElem.addEventListener("click", (event) =>{
            event.preventDefault();
            if (this.loginElem.value == "" || this.passwordElem.value == ""){
                alert("Пожалуйста, заполните все поля")
            }else {
                this.login = this.loginElem.value;
                this.password = this.passwordElem.value;
                this.verifications();
            }

        });
    }
    verifications(){
        let check = new VerifyUser(this.login, this.password);
        check.verification()
    }
}
но запускается после нажатия на кнопку
class Registration extends VerifyUser{
    constructor(){
        super();
        this.registElem = document.getElementById("form-login-registration");
        this.passwordElem = document.getElementById("form-password-registration");
        this.usernameElem = document.getElementById("form-username-registration");
        this.buttonRegistElem = document.getElementById("form-button-registration");
        this.check();
    }
    check(){
        this.buttonRegistElem.addEventListener("click", (event) =>{
            event.preventDefault();
            if (this.registElem.value == "" || this.passwordElem.value == "" || this.usernameElem.value == ""){
                alert("Пожалуйста, заполните все поля");
                return
            }else {
                this.login = this.registElem.value;
                this.password = this.passwordElem.value;
                this.username = this.usernameElem.value;
                this.verifications();
            }

        });
    }
    verifications(){
        let check = new VerifyUser(this.login, this.password, this.username);
        check.registration()
    }
}