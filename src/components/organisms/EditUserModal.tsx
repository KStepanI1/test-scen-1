import {Button} from "../atoms/Button";
import React, {useState} from "react";
import {User} from "../../data/users";
import CloseIcon from "../../assets/images/icon_close.svg";

interface Props {
    userData: User;
    updateUser: any;
    closeModal: any;
}

export const EditUserModal = ({userData, updateUser, closeModal}: Props): JSX.Element => {
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
                    <div className={'modal__close'} onClick={closeModal}>
                        <img src={CloseIcon} alt="close"/>
                    </div>
                </div>
                <div className={'modal__content'}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor={'field-last'}>
                            <div className={'modal__field'} id={'field-last'}>
                                <div>Фамилия</div>
                                <input className={'modal__input'}
                                       type="text"
                                       name={'lastName'}
                                       value={updatedUserData.lastName}
                                       placeholder={'Введите фамилию'}
                                       onChange={handleChange}/>
                            </div>
                        </label>
                        <label htmlFor={'field-first'}>
                            <div className={'modal__field'} id={'field-first'}>
                                <div>Имя</div>
                                <input className={'modal__input'}
                                       type="text"
                                       name={'firstName'}
                                       value={updatedUserData.firstName}
                                       placeholder={'Введите имя'}
                                       onChange={handleChange}/>
                            </div>
                        </label>
                        <label htmlFor={'field-middle'}>
                            <div className={'modal__field'} id={'field-middle'}>
                                <div>Отчество</div>
                                <input className={'modal__input'}
                                       type="text"
                                       name={'middleName'}
                                       value={updatedUserData.middleName}
                                       placeholder={'Введите отчество'}
                                       onChange={handleChange}/>
                            </div>
                        </label>
                        <label htmlFor={'field-email'}>
                            <div className={'modal__field'} id={'field-email'}>
                                <div>E-mail</div>
                                <input className={'modal__input'}
                                       type="text"
                                       value={updatedUserData.email}
                                       placeholder={'Введите электронную почту'}
                                       name={'email'}
                                       onChange={handleChange}/>
                            </div>
                        </label>
                        <label htmlFor={'field-login'}>
                            <div className={'modal__field'} id={'field-login'}>
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