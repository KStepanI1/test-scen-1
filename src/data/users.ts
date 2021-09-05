export interface User {
    id: number;
    lastName: string;
    firstName: string;
    middleName: string;
    email: string;
    login: string;
}

export const initialUsers: User[] =
    [
        {id: 1, lastName: 'Иванов', firstName: 'Иван', middleName: 'Иванович', email: 'mail1@mail.com', login: 'user1'},
        {id: 2, lastName: 'Петров', firstName: 'Петр', middleName: 'Сергеевич', email: 'mail2@mail.com', login: 'user2'},
        {id: 3, lastName: 'Сергеев', firstName: 'Григорий', middleName: 'Викторович', email: 'mail3@mail.com', login: 'user3'},
        {id: 4, lastName: 'Федоров', firstName: 'Виктор', middleName: 'Федорович', email: 'mail4@mail.com', login: 'user4'},
        {id: 5, lastName: 'Хвастунов', firstName: 'Сергей', middleName: 'Петрович', email: 'mail5@mail.com', login: 'user5'},
        {id: 6, lastName: 'Григорьев', firstName: 'Федор', middleName: 'Григорьевич', email: 'mail6@mail.com', login: 'user6'},
    ]
