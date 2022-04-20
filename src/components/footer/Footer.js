import React, {useEffect}from 'react'
import { Layout } from 'antd';
import { useTranslation } from "react-i18next"
import i18next from 'i18next';
import { FacebookFilled, TwitterSquareFilled, InstagramFilled} from '@ant-design/icons';

import {LanguagesWrapper} from './Footer.styles'

function Footer() {

    const {i18n, t} = useTranslation(['footer'])
    
    useEffect(() => {
        i18next.changeLanguage('es')  
    }, [])
    
    const { Footer } = Layout;
    
    return (
        <Footer style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',  textAlign: 'center', color:'white', background: 'linear-gradient(to right, #4C2C89, #2a0845)' }}>
            <div>
            </div>
            <div>
                {t("brand")}
            </div>
            <LanguagesWrapper>
                <div onClick={()=>i18next.changeLanguage('es')} ><FacebookFilled/> Facebook</div>
                <div onClick={()=>i18next.changeLanguage('es')} ><TwitterSquareFilled/> Twitter</div>
                <div onClick={()=>i18next.changeLanguage('es')} ><InstagramFilled/> Instagram</div>
                <div onClick={()=>i18next.changeLanguage('es')} >{t("spanish")}</div>
                <div onClick={() => i18next.changeLanguage('en')} >{t("english")}</div>
            </LanguagesWrapper>
        </Footer>
    )
}

export default Footer