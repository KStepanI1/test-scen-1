import { Header } from "../organisms/Header";
import { SideBar } from "../organisms/SideBar";
import { Button } from "../atoms/Button";
import {initialUsers, User} from "../../data/users";
import { useState } from "react";

export const UsersPage = (): JSX.Element => {
    const [users, setUsers] = useState<User[]>(initialUsers);

    return (
        <div className={'users-page'}>
            <Header />
            <main className={'users-page__content'}>
                <SideBar />
                <div className={'users-page__users'}>
                    <div className={'users-page__subheader'}>
                        <h2 className={'subheader__name'}>Пользователи</h2>
                        <Button />
                    </div>
                    <table className={'users-page__table'}>
                        <thead>
                            <tr>
                                <td>Фамилия</td>
                                <td>Имя</td>
                                <td>Отчество</td>
                                <td>E-mail</td>
                                <td>Логин</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                        {users &&
                            users.map(user => {
                                  return (
                                      <tr>
                                          <td>{user.lastName}</td>
                                          <td>{user.firstName}</td>
                                          <td>{user.middleName}</td>
                                          <td>{user.email}</td>
                                          <td>{user.login}</td>
                                          <td>change</td>
                                          <td>delete</td>
                                      </tr>
                                  );
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}