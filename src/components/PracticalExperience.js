import { Fragment, useState } from 'react';
import InputField from './InputField';

export default function PracticalExperience({ editing, id }) {
    const [info, setInfo] = useState({
        company: '',
        position: '',
        tasks: ['', '', ''],
        dateFrom: '',
        dateTo: '',
    });

    function handleInfo(type, value) {
        setInfo({ ...info, [type]: value });
    }

    function handleTask(idx, value) {
        setInfo({
            ...info,
            tasks: [
                ...info.tasks.slice(0, idx),
                value,
                ...info.tasks.slice(idx + 1),
            ],
        });
    }

    if (editing) {
        return (
            <>
                <InputField
                    htmlFor={'pe-company-' + id}
                    value={info.company}
                    handleChange={(e) => {
                        handleInfo('company', e.target.value);
                    }}
                    label="Company name"
                ></InputField>

                <InputField
                    htmlFor={'pe-position-' + id}
                    value={info.position}
                    handleChange={(e) => {
                        handleInfo('position', e.target.value);
                    }}
                    label="Position title"
                ></InputField>

                {info.tasks.map((task, idx) => {
                    return (
                        <Fragment key={`${id - idx}`}>
                            <InputField
                                htmlFor={'pe-tasks-' + id + idx}
                                value={task}
                                handleChange={(e) => {
                                    handleTask(idx, e.target.value);
                                }}
                                label={`Task #${idx + 1}`}
                            ></InputField>
                        </Fragment>
                    );
                })}

                <InputField
                    htmlFor={'pe-date-from-' + id}
                    value={info.dateFrom}
                    handleChange={(e) => {
                        handleInfo('dateFrom', e.target.value);
                    }}
                    label="Since"
                ></InputField>

                <InputField
                    htmlFor={'pe-date-to-' + id}
                    value={info.dateTo}
                    handleChange={(e) => {
                        handleInfo('dateTo', e.target.value);
                    }}
                    label="Until"
                ></InputField>
            </>
        );
    } else {
        return (
            <>
                <div className="pe-main">
                    <div className="job">
                        <strong>{info.company}</strong>{' '}
                        {info.company && info.position ? '|' : ''}{' '}
                        <em>{info.position}</em>
                    </div>
                    <div className="date">
                        {info.dateFrom}{' '}
                        {info.dateFrom && info.dateTo ? '-' : ''} {info.dateTo}
                    </div>
                </div>
                <div className="pe-sub">
                    <ul>
                        {info.tasks
                            .filter((task) => task)
                            .map((task, idx) => {
                                return <li key={idx}>{task}</li>;
                            })}
                    </ul>
                </div>
            </>
        );
    }
}
