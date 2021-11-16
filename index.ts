import ChatPage from './app/Chat/ChatPage'
import LoginPage from './app/LoginPage'
import Router from './core/router'

Router.get()
    .addRoute({
        component: ChatPage,
        name: 'chat',
        path: '/chat'
    })
    .addRoute({
        component: LoginPage,
        name: 'index',
        path: '/'
    })
.setRoot('app').render()