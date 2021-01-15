import { useState } from 'react';

export default function useID() {
    const getID = () => {
        const idString = localStorage.getItem('token');
        const userID = JSON.parse(idString);
        return userID?.id
    };
    
    const [id, setID] = useState(getID());
    
    const saveID = userID => {
        localStorage.setItem('id', JSON.stringify(userID));
        setID(userID.id);
    };
    return {
        setID: saveID,
        id
    }
}