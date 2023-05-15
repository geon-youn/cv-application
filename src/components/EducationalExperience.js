import { useState } from 'react';

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
                <div>
                    <label htmlFor={'ee-school-' + id}>School Name</label>
                    <input
                        type="text"
                        id={'ee-school-' + id}
                        value={info.school}
                        onChange={(e) => {
                            handleInfo('school', e.target.value);
                        }}
                    />
                </div>

                <div>
                    <label htmlFor={'ee-program-' + id}>Title of Study</label>
                    <input
                        type="text"
                        id={'ee-program-' + id}
                        value={info.program}
                        onChange={(e) => {
                            handleInfo('program', e.target.value);
                        }}
                    />
                </div>

                <div>
                    <label htmlFor={'ee-date-from-' + id}>Date From</label>
                    <input
                        type="text"
                        id={'ee-date-from-' + id}
                        value={info.dateFrom}
                        onChange={(e) => {
                            handleInfo('dateFrom', e.target.value);
                        }}
                    />
                </div>

                <div>
                    <label htmlFor={'ee-date-to-' + id}>Date To</label>
                    <input
                        type="text"
                        id={'ee-date-to-' + id}
                        value={info.dateTo}
                        onChange={(e) => {
                            handleInfo('dateTo', e.target.value);
                        }}
                    />
                </div>
            </>
        );
    } else {
        return;
    }
}

/**
 * - Educational experience:
 *      - School name
 *      - Title of study
 *      - Date of study
 */
