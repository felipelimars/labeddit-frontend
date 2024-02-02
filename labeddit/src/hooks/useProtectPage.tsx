import { useEffect } from 'react';
import { goToLoginPage } from '../routes/coordinator';

export const useProtectPage = (navigator: any) => {
    useEffect(() => {
        const token = localStorage.getItem('token-labeddit');
        if (!token) {
            goToLoginPage(navigator);
        }
    }, [navigator]);
};