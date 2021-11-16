import Component from "../../core/component"
import { createElement as c } from "../../core"
import { RouterLink } from "../../core"
import ChatComponent, { ChatComponentProps, ChatStatus } from "./Chat/Chat"
import moment from 'moment'

export default class ChatPage extends Component<{}> {
    currentChatTitle: string = ''
    chats: ChatComponentProps[] = [
        {
            name: 'Игорь Петрович',
            text: 'Привет',
            photo: 'https://i.ytimg.com/vi/mJfVTWw-Rwc/hqdefault.jpg',
            datetime: moment(),
            unreadCount: 0,
            status: ChatStatus.new,
            onSelect: (chat) => { this.currentChatTitle = chat.name; this.render(); }
        },
        {
            name: 'Артем Иванович',
            text: 'Как дела',
            photo: 'https://i.ytimg.com/vi/mJfVTWw-Rwc/hqdefault.jpg',
            datetime: moment(),
            unreadCount: 2,
            status: ChatStatus.unread,
            onSelect: (chat) => { this.currentChatTitle = chat.name; this.render(); }
        }
    ]

    template () {
        return c(
            'div', 
            [
                c('h1', 'Страница чата'),
                c(new RouterLink({ text: 'Вход', route: 'index' })),
                c(
                    'div',
                    [
                        c(
                            'div',
                            this.chats.map(chat => c(new ChatComponent(chat))),
                            {
                                class: 'chat-sidebar'
                            }
                        ),
                        c(
                            'div',
                            this.currentChatTitle,
                            {
                                class: 'chat-area'
                            }
                        )
                    ],
                    { 
                        class: 'chat-page-grid'
                    }
                )
            ],
            { 
                class: 'chat-page' 
            }
        )
    }
}