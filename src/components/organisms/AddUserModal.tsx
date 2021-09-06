import {useState} from "react";
import {User} from "../../data/users";
import React from "react";
import {Button} from "../atoms/Button";
import CloseIcon from "../../assets/images/icon_close.svg";


interface Props {
    addUser: Function;
    closeModal: any;
}


export const AddUserModal = ({addUser, closeModal}: Props): JSX.Element => {
    const [userData, setUserData] = useState<User>({
        id: Math.floor(Math.random() * 10000000),
        lastName: '',
        firstName: '',
        middleName: '',
        email: '',
        login: ''
    })
    const [isButtonDisabled, setButtonDisabled] = useState<boolean>(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserData({...userData, [name]: value})
        if (userData.lastName !== ''
            && userData.firstName !== ''
            && userData.middleName !== ''
            && userData.email !== ''
            && userData.login !== '') {
            setButtonDisabled(false);
        }
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        addUser(userData);
        closeModal();
    }

    return (
        <div className={'add-user-modal'}>
            <div className={'add-user-modal__content'}>
                <div className={'modal__header'}>
                    <div className={'modal__title'}>Создание пользователя</div>
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
                                       placeholder={'Введите отчество'}
                                       onChange={handleChange}/>
                            </div>
                        </label>
                        <label htmlFor={'field-email'}>
                            <div className={'modal__field'} id={'field-email'}>
                                <div>E-mail</div>
                                <input className={'modal__input'}
                                       type="text"
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
                                       name={'login'}
                                       placeholder={'Введите логин'}
                                       onChange={handleChange}/>
                            </div>
                        </label>
                        <div className={'modal__footer'}>
                            <Button type="submit"
                                    text={'Создать'}
                                    disabled={isButtonDisabled}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}