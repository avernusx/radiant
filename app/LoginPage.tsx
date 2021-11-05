import Component from "../core/component"
import { createElement as c } from "../core"
import TestComponent from "./TestComponent"
import { RouterLink } from "../core"

export default class LoginPage extends Component<{}> {
    template () {
        return c('div', [
            c('h1', 'Страница входа'),
            c(new RouterLink({ text: 'Чат', route: 'chat' })),
            c(new TestComponent({}))
        ])
    }
}