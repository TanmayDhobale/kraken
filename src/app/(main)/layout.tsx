import React from 'react'
type Props = { children: React.ReactNode }

const   Layout = (props:Props) => {
    <div className=' flex overflow-hidden h-screen'>
        <div className=' w-full'>
            {props.children}
        </div>
    </div>
 }

 export default Layout;
