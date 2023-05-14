import EducationalExperience from './components/EducationalExperience';
import GeneralInformation from './components/GeneralInformation';
import { useState } from 'react';
import PracticalExperience from './components/PracticalExperience';

export default function App() {
    const [educationalExperiences, setEducationalExperiences] = useState([
        [],
        0,
    ]);
    const [practicalExperiences, setPracticalExperiences] = useState([[], 0]);
    const [editing, setEditing] = useState(true);

    function handleEditClick() {
        setEditing(!editing);
    }

    function handleAddEducationalExperience() {
        const pastKeys = educationalExperiences[0];
        const key = educationalExperiences[1];
        setEducationalExperiences([[...pastKeys, key], key + 1]);
    }

    function handleRemoveEducationalExperience(key) {
        setEducationalExperiences([
            [...educationalExperiences[0].filter((id) => id !== key)],
            practicalExperiences[1],
        ]);
    }

    function handleAddPracticalExperience() {
        const pastKeys = practicalExperiences[0];
        const key = practicalExperiences[1];
        setPracticalExperiences([[...pastKeys, key], key + 1]);
    }

    function handleRemovePracticalExperience(key) {
        setPracticalExperiences([
            [...practicalExperiences[0].filter((id) => id !== key)],
            practicalExperiences[1],
        ]);
    }

    return (
        <>
            <div className="general">
                <GeneralInformation editing={editing}></GeneralInformation>
            </div>
            <div className="educational">
                {educationalExperiences[0].map((id) => {
                    return (
                        <div className="educationalEntry" key={id}>
                            <EducationalExperience
                                editing={editing}
                            ></EducationalExperience>
                            <button
                                onClick={() => {
                                    handleRemoveEducationalExperience(id);
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    );
                })}
                <button onClick={handleAddEducationalExperience}>Add</button>
            </div>
            <div className="practical">
                {practicalExperiences[0].map((id) => {
                    return (
                        <div className="practicalEntry" key={id}>
                            <PracticalExperience
                                editing={editing}
                            ></PracticalExperience>
                            <button
                                onClick={() => {
                                    handleRemovePracticalExperience(id);
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    );
                })}
                <button onClick={handleAddPracticalExperience}>Add</button>
            </div>
            <button onClick={handleEditClick}>
                {editing ? 'Submit' : 'Edit'}
            </button>
        </>
    );
}
