/**
 * Navigation controller
 */
export class Router{
    /**
     * Getting pages links and navigation history
     */
    constructor() {
        // Popstate makes the browser back and forward buttons work
        this.popstate = window.addEventListener("popstate", event => {
            // Grab the history state id
            let stateUrl = event.state.url;
            this.print(stateUrl);
        });
        // calling factory
        this.pageFactory = new PageFactory();
        // creation
        this.currentPage;
        // query links
        this.internalLinks = [];
    }
    /**
     * Pushing url in url bar
     */
    push(url) {
        // Push state change to the address bar and in the navigation history
        window.history.pushState({url}, `${url}`, `${url}`);
        // Load content for this tab/page
        this.print(url);
    }
    /**
     * Creating new page from pageFactory
     */
    print(url) {
        document.body.innerHTML = '';
        // Update the current Page, then print it
        this.currentPage = this.pageFactory.createPage(url)
        this.currentPage.print();
        // Update internalLinks
        this.readlinks();
    }
    /**
     * Getting new eventual links
     */
    readlinks() {
        // Query all internals links
        this.internalLinks = document.querySelectorAll("a[href^='/']").forEach(link => {
            // Eventlistener waiting for a click
            link.addEventListener("click", event => {
                // prevent the link for reloading the page
                event.preventDefault();
                // push() the href as a request for the router
                this.push(link.getAttribute("href"));
            });
        });
    }
}


/**
 * PageFactory construction
 */
 class PageFactory {
    /**
     * Different pages possible for the PageFactory
     */
    constructor() {
        this.index = function() {
            this.print = function () {
                document.body.insertAdjacentHTML('afterbegin', '<index-page />')
            }
        } 
        this.tag = function() {
            this.print = function () {
                document.body.insertAdjacentHTML('afterbegin', '<tag-page id="' + this.url.slice(5) + '"></tag-page>')
            }
        }
        this.user = function() {
            this.print = function () {
                document.body.insertAdjacentHTML('afterbegin', '<user-page id="' + this.url.slice(5) + '"></user-page>')
            }
        }
        this.error404 = function() {
            this.print = function () {
                document.body.insertAdjacentHTML('afterbegin', '<error404-page></error404-page>')
            }
        }

    }

    /**
     * Taking request
     */
    createPage(url) {
        let Page;

        if (url == '/') {
            Page = new this.index();
        } else if(url.startsWith("/tag-")) {
            Page = new this.tag();
        } else if(url.startsWith("/user")) {
            Page = new this.user();
        } else {
            Page = new this.error404();
        }

        Page.url = url;
        
        return Page;
    }
}

