class UserCardContainer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = '<user-card name="This is a custom"></user-card>';
    }
}

window.customElements.define('user-card-container', UserCardContainer);