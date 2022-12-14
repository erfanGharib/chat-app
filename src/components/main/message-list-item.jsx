import React from 'react';
import Avatar from '../avatar';

const MessageListItem = ({ data }) => {
    // const {userName, messageText, messageMeta, chatType} = props;

    /**
        @chatType define where's message located in
        The goal is load data related to @MessageListItem 

        @Types
        Group Chat = 2
        Private Chat = 1 
        Private Chat --client = 0 
    */

    return (
        <div id='message-list' className='w-full h-full max-w-xl mx-auto px-4'>
            <div id='massage-list' className='w-full h-full overflow-y-auto flex flex-col justify-end'>
                {
                    data.map(({ userName, messageText, messageMeta, chatType }, i) => {
                        const className_ = chatType === 0 ?
                            '!rounded-br-none dark:bg-sky-600 bg-sky-800 text-lightMode_toLightC' :
                            '!rounded-bl-none dark:bg-darkMode_lightC bg-lightMode_toLightC';

                        return (
                            <div key={`message ${i}`} className={`flex w-full items-end my-1 drop-shadow-lg ${chatType === 0 ? 'justify-end' : ''}`}>
                                {chatType === 2 ? <Avatar size='10' /> : <></>}
                                <div
                                    className={`rounded-c p-2 relative ${className_}`}
                                >
                                    {chatType === 2 ? <h4>{userName}</h4> : <></>}
                                    <p>{messageText}</p>
                                    <div className='flex justify-end text-sm opacity-50'>
                                        <span>{messageMeta}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
export default MessageListItem;