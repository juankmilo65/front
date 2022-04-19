import React, {useEffect}from 'react'
import { Layout } from 'antd';
import { useTranslation } from "react-i18next"
import i18next from 'i18next';
 

function Footer() {

    const {i18n, t} = useTranslation(['footer'])
    
    useEffect(() => {
        i18next.changeLanguage('es')  
    }, [])
    
    const { Footer } = Layout;
    
    return (
    <Footer style={{ textAlign: 'center', color:'white', background: 'linear-gradient(to right, #4C2C89, #2a0845)' }}>
        {t("brand")}
        <div onClick={()=>i18next.changeLanguage('es')} >{t("spanish")}</div>
        <div onClick={() => i18next.changeLanguage('en')} >{t("english")}</div>
    </Footer>
    )
}

export default Footer