import Component from "../../core/component"
import { createElement as c } from "../../core"
import { RouterLink } from "../../core"

export default class ChatPage extends Component<{}> {
    template () {
        return c(
            'div', 
            [
                c('h1', 'Страница чата'),
                c(new RouterLink({ text: 'Вход', route: 'index' })),
            ],
            { 
                class: 'chat-page' 
            }
        )
    }
}