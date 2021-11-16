import Component from "../core/component"
import { createElement as c } from "../core"

interface TestComponent2Props {
    text: string
}

export default class TestComponent2 extends Component<TestComponent2Props> {
    counter: number = 0

    template () {
        const onClick = (e: Event) => {
            this.counter++
            this.render()
        }

        return c('div', [
            c('h1', String(this.counter)),
            c('p', this.props?.text, { class: 'my-class' }, { click: onClick })
        ])
    }
}