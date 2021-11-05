import { Component } from "."

export default function createElement(
    tag: string|Component<any>,
    children: HTMLElement|HTMLElement[]|string = [],
    attributes: { [code: string]: string } = {},
    listeners: { [code: string]: (e: Event) => void } = {}
) {
    if (typeof (tag) === 'string') {
        const element = document.createElement(tag)
        if (Array.isArray(children)) children.forEach(child => element.appendChild(child))
        else if (children instanceof HTMLElement) element.appendChild(children)
        else if (typeof (children) === 'string') element.innerText = children

        for (let key in attributes) {
            element.setAttribute(key, attributes[key])
        }

        for (let key in listeners) {
            element.addEventListener(key, listeners[key])
        }

        return element
    } else {
        return tag.render()
    }
}