const chatData = [
    {
        id: 1,
        firstname: "Александр",
        lastname: "Борисов",
        avatar: require("../assets/image/avatar.jpg"),
        lastMessage: {
            id: 1,
            message: "Проект сломались по такими причинами",
            createdAt: "сегодня",
            from: 25,
            new: 10
        }
    },
    {
        id: 2,
        firstname: "Владимир",
        lastname: "Смирнов",
        avatar: require("../assets/image/avatar.jpg"),
        lastMessage: {
            id: 1,
            message: "Вы запустили проект ?",
            createdAt: "сегодня",
            from: 25
        }
    },
    {
        id: 3,
        firstname: "Николай",
        lastname: "Тинков",
        avatar: require("../assets/image/avatar.jpg"),
        lastMessage: {
            id: 1,
            message: "Привет, ты завтра на работе?",
            createdAt: "вчера",
            from: 25
        }
    },
    {
        id: 70,
        firstname: "Макс",
        lastname: "Петров",
        avatar: require("../assets/image/avatar.jpg"),
        lastMessage: {
            id: 1,
            message: "нормально, как у тебя дела?",
            createdAt: "18 июнь",
            from: 25,
            new: 0
        }
    },
    {
        id: 22,
        firstname: "Радмир",
        lastname: "Шаяхметов",
        avatar: require("../assets/image/avatar.jpg"),
        lastMessage: {
            id: 1,
            message: "Мы запустили проект!",
            createdAt: "17 июнь",
            from: 25
        }
    },
    {
        id: 40,
        firstname: "Юлия",
        lastname: "Владимирова",
        avatar: require("../assets/image/avatar.jpg"),
        lastMessage: {
            id: 1,
            message: "Подойди пож-та в отдел маркетинг",
            createdAt: "17 июнь",
            from: 25
        }
    },
    {
        id: 7,
        firstname: "Владислав",
        lastname: "Медведев",
        avatar: require("../assets/image/avatar.jpg"),
        lastMessage: {
            id: 1,
            message: "Сделал пуш проекта",
            createdAt: "10 июнь",
            from: 25,
            new: 0
        }
    },
    {
        id: 8,
        firstname: "Борис",
        lastname: "Еферов",
        avatar: require("../assets/image/avatar.jpg"),
        lastMessage: {
            id: 1,
            message: "Hello",
            createdAt: "20 май",
            from: 25
        }
    },
    {
        id: 9,
        firstname: "Kennady",
        lastname: "Baker",
        avatar: require("../assets/image/avatar.jpg"),
        lastMessage: {
            id: 1,
            message: "Hello",
            createdAt: "2020-02-19",
            from: 25
        }
    },

]



const workData = [
    {
        id: 22,
        firstname: "Радмир",
        lastname: "Шаяхметов",
        avatar: require("../assets/image/avatar.jpg"),
        lastMessage: {
            id: 1,
            message: "Мы запустили проект!",
            createdAt: "17 июнь",
            from: 25
        }
    },

    {
        id: 8,
        firstname: "Борис",
        lastname: "Еферов",
        avatar: require("../assets/image/avatar.jpg"),
        lastMessage: {
            id: 1,
            message: "Hello",
            createdAt: "20 май",
            from: 25
        }
    },
    {
        id: 9,
        firstname: "Kennady",
        lastname: "Baker",
        avatar: require("../assets/image/avatar.jpg"),
        lastMessage: {
            id: 1,
            message: "Hello",
            createdAt: "2020-02-19",
            from: 25
        }
    },

]

export {
    chatData,
    workData
}