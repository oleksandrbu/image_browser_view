import { useState, useEffect } from 'react';

import Connection from "../../Connection"

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function useDescriptionPage(pathname){
    const [description, setDescription] = useState({name: "", release: null})
    const [avatarId, setAvatarId] = useState(0)

    function changeDescriptionPage (pathname){
        let connection = new Connection(pathname)
        connection.get().then(title => {
            const {id, name, release} = title
            setAvatarId(id)
            const date = new Date(Date.parse(release))
            setDescription({Name: name, Release: `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`})
        })
    }

    useEffect(() => {
        changeDescriptionPage(pathname)
    }, [pathname])

    return [avatarId, description]
}

export default useDescriptionPage