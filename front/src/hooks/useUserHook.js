import { useContext } from 'react';
import { UserContext } from '../context/Context';  // Ensure this path is correct based on your file structure

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};