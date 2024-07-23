import React from 'react'

const Status = ({ status }: { status: string }) => {
    switch (status) {
        case 'active':
            return <div className="w-fit text-leafGreen-5 bg-leafGreen-50 rounded-md px-2 leading-6 text-xs">{status}</div>
        case 'disabled':
            return <div className="w-fit bg-gray-300 text-FBlack rounded-md px-2 leading-6 text-xs">{status}</div>
    }
}

export default Status