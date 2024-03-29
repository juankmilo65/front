import React, {memo, useEffect}from 'react'
import { Layout } from 'antd';
import { useTranslation } from "react-i18next"
import i18next from 'i18next';
import { FacebookFilled, TwitterSquareFilled, InstagramFilled } from '@ant-design/icons';

import {LanguagesWrapper, SpanishFlag, EnglishFlag} from './Footer.styles'

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
                <div onClick={()=> {}} ><FacebookFilled/> Facebook</div>
                <div onClick={()=> {}} ><TwitterSquareFilled/> Twitter</div>
                <div onClick={()=> {}} ><InstagramFilled/> Instagram</div>
                <div onClick={()=>i18n.changeLanguage('es')} ><SpanishFlag/>{t("spanish")}</div>
                <div onClick={() => i18n.changeLanguage('en')} ><EnglishFlag/>{t("english")}</div>
            </LanguagesWrapper>
        </Footer>
    )
}

export default memo(Footer)