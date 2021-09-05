import {Button} from "../atoms/Button";
import React, { useState } from "react";
import {User} from "../../data/users";

interface Props {
    userData: User;
    updateUser: any;
    closeModal: any;
}

export const EditUserModal = ({ userData, updateUser, closeModal }: Props): JSX.Element => {
    const [updatedUserData, setUpdateUserData] = useState<User>(userData);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setUpdateUserData({...updatedUserData, [name]: value});
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        updateUser(updatedUserData);
        closeModal();
    }

    return (
        <div className={'edit-user-modal'}>
            <div className={'edit-user-modal__content'}>
                <div className={'modal__header'}>
                    <div className={'modal__title'}>Редактирование пользователя</div>
                    <div className={'modal__close'} onClick={closeModal}>X</div>
                </div>
                <div className={'modal__content'}>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <div className={'modal__field'}>
                                <div>Фамилия</div>
                                <input className={'modal__input'}
                                       type="text"
                                       name={'lastName'}
                                       value={updatedUserData.lastName}
                                       placeholder={'Введите фамилию'}
                                       onChange={handleChange}/>
                            </div>
                            <div className={'modal__field'}>
                                <div>Имя</div>
                                <input className={'modal__input'}
                                       type="text"
                                       name={'firstName'}
                                       value={updatedUserData.firstName}
                                       placeholder={'Введите имя'}
                                       onChange={handleChange}/>
                            </div>
                            <div className={'modal__field'}>
                                <div>Отчество</div>
                                <input className={'modal__input'}
                                       type="text"
                                       name={'middleName'}
                                       value={updatedUserData.middleName}
                                       placeholder={'Введите отчество'}
                                       onChange={handleChange}/>
                            </div>
                            <div className={'modal__field'}>
                                <div>E-mail</div>
                                <input className={'modal__input'}
                                       type="text"
                                       value={updatedUserData.email}
                                       placeholder={'Введите электронную почту'}
                                       name={'email'}
                                       onChange={handleChange}/>
                            </div>
                            <div className={'modal__field'}>
                                <div>Логин</div>
                                <input className={'modal__input'}
                                       type="text"
                                       value={updatedUserData.login}
                                       name={'login'}
                                       placeholder={'Введите логин'}
                                       onChange={handleChange}/>
                            </div>
                        </label>
                        <div className={'modal__footer'}>
                            <Button type="submit"
                                    text={'Сохранить'}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}