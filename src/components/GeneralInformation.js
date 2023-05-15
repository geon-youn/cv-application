import { useState } from 'react';
import InputField from './InputField';

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
                <InputField
                    htmlFor="name"
                    value={info.name}
                    handleChange={(e) => handleInfo('name', e.target.value)}
                    label="Name"
                ></InputField>

                <InputField
                    htmlFor="email"
                    value={info.email}
                    handleChange={(e) => handleInfo('email', e.target.value)}
                    label="Email"
                ></InputField>

                <InputField
                    htmlFor="phone"
                    value={info.phone}
                    handleChange={(e) => handleInfo('phone', e.target.value)}
                    label="Phone number"
                ></InputField>
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
