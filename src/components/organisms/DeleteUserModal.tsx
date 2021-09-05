import { User } from "../../data/users";
import { Button } from "../atoms/Button";

interface Props {
    userData: User;
    deleteUser: any;
    closeModal: any;
}

export const DeleteUserModal = ({ userData, deleteUser, closeModal }: Props) => {

    const handleSubmit = (event: any) => {
        event.preventDefault();
        deleteUser(userData);
        closeModal();
    }

    return (
        <div className={'delete-user-modal'}>
            <div className={'delete-user-modal__content'}>
                <div className={'modal__header'}>
                    <div className={'modal__title'}>Удаление пользователя</div>
                    <div className={'modal__close'} onClick={closeModal}>X</div>
                </div>
                <div className={'modal__content'}>
                    <form onSubmit={handleSubmit}>
                        <div className={'modal__text'}>
                            Удалить выбранного пользователя?
                        </div>
                        <div className={'modal__footer'}>
                            <Button type={'button'}
                                    text={'Отменить'}
                                    className={'cancel'}
                                    callback={closeModal}/>
                            <Button type={'submit'}
                                    text={'Удалить'} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}