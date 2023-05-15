import { useState } from 'react';
import InputField from './InputField';

export default function EducationalExperience({ editing, id }) {
    const [info, setInfo] = useState({
        school: '',
        program: '',
        dateFrom: '',
        dateTo: '',
    });

    function handleInfo(type, value) {
        setInfo({ ...info, [type]: value });
    }

    if (editing) {
        return (
            <>
                <InputField
                    htmlFor={'ee-school-' + id}
                    value={info.school}
                    handleChange={(e) => {
                        handleInfo('school', e.target.value);
                    }}
                    label="School name"
                ></InputField>

                <InputField
                    htmlFor={'ee-program-' + id}
                    value={info.program}
                    handleChange={(e) => {
                        handleInfo('program', e.target.value);
                    }}
                    label="Title of study"
                ></InputField>

                <InputField
                    htmlFor={'ee-date-from-' + id}
                    value={info.dateFrom}
                    handleChange={(e) => {
                        handleInfo('dateFrom', e.target.value);
                    }}
                    label="Since"
                ></InputField>

                <InputField
                    htmlFor={'ee-date-to-' + id}
                    value={info.dateTo}
                    handleChange={(e) => {
                        handleInfo('dateTo', e.target.value);
                    }}
                    label="Until"
                ></InputField>
            </>
        );
    }
    return (
        <>
            <div className="ee-main">
                <div className="school">
                    <strong>{info.school}</strong>
                </div>
                <div className="date">
                    {info.dateFrom} {info.dateFrom && info.dateTo ? '-' : ''}{' '}
                    {info.dateTo}
                </div>
            </div>
            <div className="ee-sub">
                <em>{info.program}</em>
            </div>
        </>
    );
}
