import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileInfoExtra = ({data}) => {
    return (
        <div className='px-3'>
            {
                data.map(({ico, value, label = ''}) => {
                    return (
                        <div className='w-full f-center-between' key={label}>
                            <FontAwesomeIcon 
                                icon={ico} 
                                size='xl' 
                                className='dark:text-neutral-600 text-neutral-400 w-14 py-4 mr-3'
                            />
                            <div className='flex flex-col mr-auto w-full py-2'>
                                <span className='text-darkMode_toLightC dark:text-lightMode_toDarkC font-medium'>{value}</span>
                                <span className='dark:text-neutral-500'>{label}</span>
                            </div>
                            {/* <span className='px-500 w-1/4'></span> */}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ProfileInfoExtra;