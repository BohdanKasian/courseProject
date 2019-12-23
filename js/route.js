class Component {
    get dom(){
        this.anchor.innerHTML = this.render();
        this.setupListeners();
        return this.anchor;
    }
}

class LoginComponent extends Component {
    constructor(anchor) {
        super();
        this.anchor = document.createElement("section");
        this.anchor.className = "login todo-height"
    }

    onInit() {
        console.log('LoginINIT')
    }

    render() {
        return `<div class="wrapper">
        <div class="flex-column todo-box login-padding">
        <form class="flex-column bg-list bg-box__width__radius login-form-width">
            <label>Login</label>
            <input id="form-login" class="bg-form-and-input" placeholder="Login">
            <label class="login-label-margin">Password</label>
            <input id="form-password" class="bg-form-and-input" placeholder="Password">
            <button type="submit" id="form-button-sign-up" class="button">Sign up</button>
        </form>
        </div>
    </div>`;
    }

    setupListeners() {
        this.anchor.querySelector(`button[type="submit"]`).addEventListener("click", (event) => {
            event.preventDefault();
            window.dispatchEvent(new CustomEvent(`changeRoute`, {detail: {route: "todo"}}));
        })
    }
}


class TodoComponent extends Component {
    constructor(anchor) {
        super();
        this.anchor = document.createElement("section");
    }
    onInit(){
        console.log('DAshINIT')
    }
    render(){
        return `
            <input id="form-password" placeholder="Password">
            <button id="form-button">Login</button>
        `;
    }
    setupListeners(){}
}

const routerConfig = {
    "login": {
        data: {route: "login"},
        url: "login",
        component: LoginComponent,
    },
    "todo": {
        data: {route: "todo"},
        url: "todo",
        component: TodoComponent,
    },
};

class Router {
    constructor(anchor){
        this.anchor = anchor;

        window.addEventListener("popstate", event => {
            this.changeRoute(event.state.route)
        })
    }
    changeRoute(route) {
        const  conf = routerConfig[route];
        if (!conf) return;
        window.history.pushState(conf.data, "", conf.url);

        const component = new conf.component();

        component.onInit();
        const dom = component.dom;

        if (this.currentDomComponent){
            this.anchor.innerHTML = "";
            this.anchor.appendChild(dom);
        } else {
            this.anchor.appendChild(dom);
        }

        this.currentDomComponent = dom;
    }
}

const router = new Router(document.body);

window.addEventListener("changeRoute", event => {
    router.changeRoute(event.detail.route);
});
window.dispatchEvent(new CustomEvent("changeRoute", {detail: {route: "login"}}));