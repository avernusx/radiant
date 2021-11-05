import Component from "../core/component"
import { createElement as c } from "../core"
import TestComponent2 from "./TestComponent2"

export default class TestComponent extends Component<{}> {
    template () {
        return c('div', [
            c('p', 'text1'),
            c('p', 'text2'),
            c(new TestComponent2({ text: 'SomeText' }))
        ])
    }
}