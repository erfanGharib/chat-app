import { useDispatch } from 'react-redux';
import { showMain } from '../store/reducers/_main';
import Avatar from './avatar';

const ChatItem = ({ data }) => {
    const {
        id,
        title,
        profileImg,
        IS_PRIVATE_CHAT,
        newMessagesNumber,
        lastMessage
    } = data;
    const dispatch = useDispatch();

    return (
        <div
            onClick={() => dispatch(showMain())}
            key={id}
            className='chat-item w-full p-2 rounded-c flex hover:bg-lightMode_lightC hover cursor-pointer'
        >
            <Avatar size='14' imageSrc={profileImg} />
            <div id='info' style={{ width: 'calc(100% - 70px)' }}>
                <div id='title' className='f-center-between'>
                    <h3 className='chat-name'>{title}</h3>
                    <div id='last-message-time' className='text-xs text-neutral-500'>{lastMessage.time}</div>
                </div>
                <div id='subtitle' className='w-full f-center-between'>
                    <p className='last-message text-ellipsis overflow-hidden whitespace-nowrap h-6'>
                        {
                            IS_PRIVATE_CHAT ?
                                <></> : <span className='sender-name font-medium text-darkMode_toLightC dark:text-neutral-200 opacity-80'>{lastMessage.sender}: </span>
                        }
                        {lastMessage.text}
                    </p>
                    <div className='rounded-full bg-opacity-50 bg-neutral-500 text-sm text-white py-0.5 px-2 w-auto'>
                        {newMessagesNumber}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ChatItem;