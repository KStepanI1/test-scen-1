import { Header } from "../organisms/Header";
import { SideBar } from "../organisms/SideBar";
import { Button } from "../atoms/Button";
import {initialUsers, User} from "../../data/users";
import { useState } from "react";
import TrashIcon from "../../assets/images/icon_trash.svg";
import PencilIcon from "../../assets/images/icon_pencil.svg";
import PlusIcon from "../../assets/images/icon_plus.svg";

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
                        <Button icon={PlusIcon} text={'Добавить'} />
                    </div>
                    <table className={'users-page__table'}>
                        <thead>
                            <tr className={'table__headers'}>
                                <td className={'table__header'}>Фамилия</td>
                                <td className={'table__header'}>Имя</td>
                                <td className={'table__header'}>Отчество</td>
                                <td className={'table__header'}>E-mail</td>
                                <td className={'table__header'}>Логин</td>
                                <td className={'table__header'}></td>
                            </tr>
                        </thead>
                        <tbody>
                        {users &&
                            users.map(user => {
                                  return (
                                      <tr key={`user_${user.id}`}
                                          className={'table__row'}>
                                          <td className={'table__field'}>{user.lastName}</td>
                                          <td className={'table__field'}>{user.firstName}</td>
                                          <td className={'table__field'}>{user.middleName}</td>
                                          <td className={'table__field'}>{user.email}</td>
                                          <td className={'table__field'}>{user.login}</td>
                                          <td className={'table__buttons-field'}>
                                              <div className={'buttons'}>
                                                  <Button text={null} icon={PencilIcon}/>
                                                  <Button text={null} icon={TrashIcon}/>
                                              </div>

                                          </td>
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