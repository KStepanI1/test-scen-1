export interface User {
    lastName: string;
    firstName: string;
    middleName: string;
    email: string;
    login: string;
}

export const initialUsers: User[] =
    [
        {lastName: 'Иванов', firstName: 'Иван', middleName: 'Иванович', email: 'mail1@mail.com', login: 'user1'},
        {lastName: 'Петров', firstName: 'Петр', middleName: 'Сергеевич', email: 'mail2@mail.com', login: 'user2'},
        {lastName: 'Сергеев', firstName: 'Григорий', middleName: 'Викторович', email: 'mail3@mail.com', login: 'user3'},
        {lastName: 'Федоров', firstName: 'Виктор', middleName: 'Федорович', email: 'mail4@mail.com', login: 'user4'},
        {lastName: 'Хвастунов', firstName: 'Сергей', middleName: 'Петрович', email: 'mail5@mail.com', login: 'user5'},
        {lastName: 'Григорьев', firstName: 'Федор', middleName: 'Григорьевич', email: 'mail6@mail.com', login: 'user6'},
    ]
