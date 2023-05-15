import EducationalExperience from './components/EducationalExperience';
import GeneralInformation from './components/GeneralInformation';
import { useState } from 'react';
import PracticalExperience from './components/PracticalExperience';
import Card from './components/Card';

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

    function handleAdd(idx, above, item, setItem) {
        const pastKeys = item[0];
        const key = item[1];
        if (above) {
            setItem([
                [...pastKeys.slice(0, idx), key, ...pastKeys.slice(idx)],
                key + 1,
            ]);
        } else {
            setItem([
                [
                    ...pastKeys.slice(0, idx + 1),
                    key,
                    ...pastKeys.slice(idx + 1),
                ],
                key + 1,
            ]);
        }
    }

    function handleMove(idx, up, item, setItem) {
        const keys = item[0];
        if (up) {
            setItem([
                [
                    ...keys.slice(0, idx - 1),
                    ...keys.slice(idx, idx + 1),
                    ...keys.slice(idx - 1, idx),
                    ...keys.slice(idx + 1),
                ],
                item[1],
            ]);
        } else {
            setItem([
                [
                    ...keys.slice(0, idx),
                    ...keys.slice(idx + 1, idx + 2),
                    ...keys.slice(idx, idx + 1),
                    ...keys.slice(idx + 2),
                ],
                item[1],
            ]);
        }
    }

    function handleRemove(removeId, item, setItem) {
        setItem([[...item[0].filter((id) => id !== removeId)], item[1]]);
    }

    return (
        <>
            <div className="general">
                <GeneralInformation editing={editing}></GeneralInformation>
            </div>
            <div className="educational">
                {educationalExperiences[0].map((id, idx) => {
                    return (
                        <div className="educationalEntry" key={id}>
                            <Card
                                editing={editing}
                                handleAdd={(above) => {
                                    handleAdd(
                                        idx,
                                        above,
                                        educationalExperiences,
                                        setEducationalExperiences
                                    );
                                }}
                                handleRemove={() => {
                                    handleRemove(
                                        id,
                                        educationalExperiences,
                                        setEducationalExperiences
                                    );
                                }}
                                handleMove={(up) => {
                                    handleMove(
                                        idx,
                                        up,
                                        educationalExperiences,
                                        setEducationalExperiences
                                    );
                                }}
                                top={idx === 0}
                                bot={
                                    idx === educationalExperiences[0].length - 1
                                }
                            >
                                <EducationalExperience
                                    editing={editing}
                                ></EducationalExperience>
                            </Card>
                        </div>
                    );
                })}
                {educationalExperiences[0].length === 0 && editing ? (
                    <button
                        onClick={() =>
                            handleAdd(
                                0,
                                false,
                                educationalExperiences,
                                setEducationalExperiences
                            )
                        }
                    >
                        Add Educational Experience
                    </button>
                ) : null}
            </div>
            <div className="practical">
                {practicalExperiences[0].map((id, idx) => {
                    return (
                        <div className="practicalEntry" key={id}>
                            <Card
                                editing={editing}
                                handleAdd={(above) => {
                                    handleAdd(
                                        idx,
                                        above,
                                        practicalExperiences,
                                        setPracticalExperiences
                                    );
                                }}
                                handleRemove={() => {
                                    handleRemove(
                                        id,
                                        practicalExperiences,
                                        setPracticalExperiences
                                    );
                                }}
                                handleMove={(up) => {
                                    handleMove(
                                        idx,
                                        up,
                                        practicalExperiences,
                                        setPracticalExperiences
                                    );
                                }}
                                top={idx === 0}
                                bot={idx === practicalExperiences[0].length - 1}
                            >
                                <PracticalExperience
                                    editing={editing}
                                ></PracticalExperience>
                            </Card>
                        </div>
                    );
                })}
                {practicalExperiences[0].length === 0 && editing ? (
                    <button
                        onClick={() =>
                            handleAdd(
                                0,
                                false,
                                practicalExperiences,
                                setPracticalExperiences
                            )
                        }
                    >
                        Add Practical Experience
                    </button>
                ) : null}
            </div>
            <button onClick={handleEditClick}>
                {editing ? 'Submit' : 'Edit'}
            </button>
        </>
    );
}
