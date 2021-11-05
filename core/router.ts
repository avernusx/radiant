import { Component } from "."
import { createElement as c } from "."

export interface Type<T> extends Function { new (...args: any[]): T; }

type Route = {
    component: Type<Component<any>>,
    name: string,
    path: string
}

interface RouterLinkProps {
    text: string,
    route: string
}

export default class Router {
    root: HTMLElement
    routes: Route[] = []
    static router: Router

    static get () {
        if (!this.router) this.router = new Router()
        return this.router
    }

    constructor () {
        window.onpopstate = (event) => {
            this.render()
        }
    }

    addRoute (route: Route) {
        this.routes.push(route)
        return this
    }

    findRouteByPath (path: string) {
        return this.routes.find(route => route.path === path)
    }

    findRouteByName (name: string) {
        return this.routes.find(route => route.name === name)
    }

    setRoot (root: string) {
        const element = document.getElementById(root)
        if (!element) throw new Error(`Корневой элемент #${root} не найден`)
        this.root = element
        return this
    }

    render () {
        const route = this.findRouteByPath(window.location.pathname)
        if (!route) throw new Error(`Маршрут ${window.location.pathname} не найден`)
        const component = new route.component({})
        component.mountTo(this.root)
    }

    to (name: string) {
        const route = this.findRouteByName(name)
        if (!route) throw new Error(`Маршрут ${window.location.pathname} не найден`)
        history.pushState({}, '', route.path)
        this.render()
    }
}

export class RouterLink extends Component<RouterLinkProps> {
    render () {
        const click = (e) => {
            e.preventDefault()
            Router.get().to(this.props.route)
        }

        return (
            c('a', this.props.text, {}, { click })
        )
    }
}