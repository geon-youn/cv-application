import { useState } from 'react';

export default function PracticalExperience({ editing, id }) {
    const [info, setInfo] = useState({
        company: '',
        position: '',
        tasks: '',
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
                    <label htmlFor={'pe-company-' + id}>Company Name</label>
                    <input
                        type="text"
                        id={'pe-company-' + id}
                        value={info.company}
                        onChange={(e) => {
                            handleInfo('company', e.target.value);
                        }}
                    />
                </div>

                <div>
                    <label htmlFor={'pe-position-' + id}>Position Title</label>
                    <input
                        type="text"
                        id={'pe-position-' + id}
                        value={info.position}
                        onChange={(e) => {
                            handleInfo('position', e.target.value);
                        }}
                    />
                </div>

                <div>
                    <label htmlFor={'pe-tasks-' + id}>Main Tasks</label>
                    <input
                        type="text"
                        id={'pe-tasks-' + id}
                        value={info.tasks}
                        onChange={(e) => {
                            handleInfo('tasks', e.target.value);
                        }}
                    />
                </div>

                <div>
                    <label htmlFor={'pe-date-from-' + id}>Date From</label>
                    <input
                        type="text"
                        id={'pe-date-from-' + id}
                        value={info.dateFrom}
                        onChange={(e) => {
                            handleInfo('dateFrom', e.target.value);
                        }}
                    />
                </div>
                
                <div>
                    <label htmlFor={'pe-date-to-' + id}>Date To</label>
                    <input
                        type="text"
                        id={'pe-date-to-' + id}
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
