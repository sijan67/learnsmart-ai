// LectureContext.js
import React, { createContext, useContext, useState } from 'react';


const LectureContext = createContext();

export const useLecture = () => useContext(LectureContext);

export const LectureProvider = ({ children }) => {
  const [lectureData, setLectureData] = useState([
    { lectureTitle: 'Dummy Title 1', lectureContent: 'Dummy Content 1', clarification: 'Dummy Clarification 1' },
    { lectureTitle: 'Dummy Title 2', lectureContent: 'Dummy Content 2', clarification: 'Dummy Clarification 2' },

    // Can add more initial lectures here
  ]);

  const [lectureSummary, setLectureSummary] = useState([
    { lectureTitle: 'Dummy Title 1', lectureContent: 'Dummy Content 1', summary: 'Dummy Summary 1' },
    // Can add more initial lectures here
  ]);


  const updateLectureData = (newLecture) => {
    setLectures([...lectureData, newLecture]);
  };

  const updateLectureSummary = (newLecture) => {
    setLectures([...lectureSummary, newLecture]);
  };

  return (
    <LectureContext.Provider value={{ lectureData, updateLectureData, lectureSummary, updateLectureSummary }}>
      {children}
    </LectureContext.Provider>
  );
};
