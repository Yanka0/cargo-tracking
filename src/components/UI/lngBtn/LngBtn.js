import React from 'react'
import { useTranslation } from "react-i18next";
import Button from '../button/Button';

import  './LngBtn.scss'

function LngBtn() {
    const {  i18n } = useTranslation();

	const handleChangeLng = (lng) => {
		i18n.changeLanguage(lng);
		localStorage.setItem("lng", lng);
	};

  return (
    <div className="btns">
    
    <button className="lngBtnLast lngBtn" onClick={() => handleChangeLng("en")}>EN</button>
		<button className="lngBtn" onClick={() => handleChangeLng("ru")}>RU</button>
    </div>
  )
}

export default LngBtn