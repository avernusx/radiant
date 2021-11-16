import Component from "../../../core/component"
import { createElement as c } from "../../../core"
import moment, { Moment } from 'moment'

export enum ChatStatus {
    read,
    unread,
    new
}

export interface ChatComponentProps {
    name: string,
    text: string,
    photo: string,
    datetime: Moment,
    unreadCount: number,
    status: ChatStatus,
    onSelect: (chat: ChatComponentProps) => void
}

export default class ChatComponent extends Component<ChatComponentProps> {
    template () {
        return c(
            'div', 
            [
                c('img', null, { src: this.props.photo }),
                c('h5', this.props.name),
                c('p', this.props.text),
                c('div', this.props.datetime.format('HH:mm'), { class: 'chat-datetime' }),
                c('div', String(this.props.unreadCount), { class: 'chat-unread-count' }),
            ],
            { 
                class: `chat ${this.props.status}` 
            },
            {
                click: () => this.props.onSelect(this.props)
            }
        )
    }
}