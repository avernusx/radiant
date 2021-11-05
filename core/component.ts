export default class Component<Props> {
    rootElement: HTMLElement
    props: Props

    constructor (props: Props) {
        this.rootElement = document.createElement('div')
        this.rootElement = this.template()
        this.props = props
    }

    render (): HTMLElement {
        this.rootElement.innerHTML = ''
        this.rootElement.appendChild(this.template())
        return this.rootElement
    }

    template (): HTMLElement {
        return document.createElement('div')
    }

    mountTo (parent: HTMLElement) {
        parent.innerHTML = ''
        parent.appendChild(this.rootElement)
    } 
}