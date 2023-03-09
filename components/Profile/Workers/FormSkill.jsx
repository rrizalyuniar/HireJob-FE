import React from 'react'
import style from './style.module.css';

const FormSkill = ({ title, type, name, placeholder, value, onchange, dis, req }) => {
    function choiceType(type) {
        switch (type) {
            case 'text':
                return (
                    <div className={`item my-4`} id="thumbnail">
                        <label for="thumbnail " className="form-label text-secondary">{title}</label>
                        <input type={type} name={name} className={`form-control ${style.inputForm}`} id="thumbnail" placeholder={placeholder} value={value} onChange={onchange} disabled={dis} required={req} />
                    </div>
                );

                case 'file':
                return (
                    <div className={`item my-4`} id="thumbnail">
                        <label for="formFile " className="form-label text-secondary">{title}</label>
                        <input type={type} name={name} className={`form-control ${style.inputForm}`} id="thumbnail" placeholder={placeholder} value={value} onChange={onchange} disabled={dis} required={req} />
                    </div>
                );
                
            case 'textarea':
                return (
                    <div className={`item my-4`} id="thumbnail">
                        <label for={name} className="text-secondary form-label">{title}</label>
                        <textarea className={`form-control ${style.inputTextArea}`} name={name} id="thumbnail" rows="3" placeholder={placeholder} value={value} onChange={onchange} required={req}></textarea>
                    </div>
                );
        }
    }

    return choiceType(type);
}

export default FormSkill