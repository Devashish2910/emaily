import React from 'react';

export default ({input, placeholder, meta:{error, touched}}) => {
    return (
        <div>
            <input className="validate" style={{marginBottom: '5px'}} placeholder={placeholder} {...input} />
            <div className="red-text" style={{marginBottom: '20px'}}>
                {touched && error}
            </div>
        </div>
    );
}