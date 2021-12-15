import React from 'react';


function SearchHeaderOption({Icon,title,selected}) {
 
    return (
        <div  className={`flex p-3 items-center space-x-1 border-b-4 border-transparent text-white hover:text-yellow-300 cursor-pointer hover:border-yellow-300 ${selected && 'text-yellow-300 border-yellow-300'}`}>
            <Icon className='h-6 sm:h-5'/>
            <p className='hidden sm:inline-flex font-bold'>{title}</p>
        </div>
    )
}

export default SearchHeaderOption
