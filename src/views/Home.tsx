import { useState } from "react";

import Instructors from "../components/Instructors";

export default function Home() {

    const [studentForWB, setStudentForWb] = useState<string>('andrew')

    const kekambas = {
        instructors: {
            senior:'Brian',
            associate:"Sarah"
        },
        students: ['william', 'sterling', 'dylan', 'zachary', 'andrew']
    };

    function getRandomStudend() {
    setStudentForWb(kekambas.students[Math.floor(Math.random()* kekambas.students.length)])
    }

    return (
        <>
        <Instructors 
            associate={ kekambas.instructors.associate } 
            senior={ kekambas.instructors.senior }/>
        <h3>Students</h3>
        {kekambas.students.map((student, i) => (
                <p key={i}>{ student }</p>
            ))}
            <p>Student performing today's whiteboard: { studentForWB }</p>
            <button onClick={getRandomStudend}>Get Student</button>
        </>
    );
}
