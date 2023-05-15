import { useState } from 'react';

export default function GeneralInformation({ editing }) {
    const [info, setInfo] = useState({
        name: '',
        email: '',
        phone: '',
    });

    function handleInfo(type, value) {
        setInfo({ ...info, [type]: value });
    }

    if (editing) {
        return (
            <>
                <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={(e) => handleInfo('name', e.target.value)}
                        value={info.name}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        onChange={(e) => handleInfo('email', e.target.value)}
                        value={info.email}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="text"
                        id="phone"
                        onChange={(e) => handleInfo('phone', e.target.value)}
                        value={info.phone}
                    />
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="name">{info.name}</div>
                <div className="contact">
                    {info.email} {info.email && info.phone ? '|' : ''}{' '}
                    {info.phone}
                </div>
            </>
        );
    }
}
