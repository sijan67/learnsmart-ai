// LectureContext.js
import React, { createContext, useContext, useState } from 'react';


const LectureContext = createContext();

export const useLecture = () => useContext(LectureContext);

export const LectureProvider = ({ children }) => {
  const [lectureData, setLectureData] = useState([
    { lectureTitle: 'Immunology', lectureContent: 'T cell activation',  clarification: 'T cell activation involves a complex signaling cascade that leads to changes in cell surface expression of proteins. this process requires two signals for full activation, and these are provided by the binding of the TCR to antigenic peptide complexed with MHC, and mediated by cytokines, or the engagement of co-stimulatory molecules.The overall result of T cell activation is an increase in the number of T cells capable of recognizing a specific foreign antigen, as well as the production of several T-cell cytokines. The cytokines have additional effects, including the ability of IL-2 to activate cytotoxic or regulatory T cells that recognize the same antigen', clarificationLinks: ['https://www.britannica.com/science/immune-system/Activation-of-T-and-B-lymphocytes', 'https://www.sciencedirect.com/topics/immunology-and-microbiology/t-cell-activation', 'https://en.wikipedia.org/wiki/I_cell']},
    { lectureTitle: 'Intro to AI', lectureContent: 'Deep learning',clarification: 'Deep learning is a subset of machine learning and artificial intelligence, where algorithms are able to learn from large amounts of data.Deep learning uses neural networks with many layers, which are inspired by the structure of the human brain. neural networks have multiple inputs and functions, which are determined by the algorithm.Deep learning is a branch of machine learning that does not require structured/ labelled data of the pictures to classify them. Instead, deep learning algorithms decide for themselves what features are relevant by looking at raw data. complex but fascinating field that has a lot of potential. It is constantly evolving and improving, and is used in a wide range of applications.', clarificationLinks: ['https://www.forbes.com/sites/bernardmarr/2018/10/01/what-is-deep-learning-ai-a-simple-guide-with-8-practical-examples/', 'https://hackernoon.com/deep-learning-vs-machine-learning-a-simple-explanation-47405b3eef08'] },

    // Can add more initial lectures here
  ]);

  const [lectureSummary, setLectureSummary] = useState([
    { lectureTitle: 'Intro to MongoDB', lectureContent: " need to understand how sequel and sequel databases were also referred to as relational or non-relational so let's talk about the OG database sequel stands for structured query language is a relational database easiest way to understand how simple data is structured is by comparing it to an excel spreadsheet in relational database is like sequel. Data is stored in rows and columns. Each row is a record, and each column is a record field. In this example we're storing user data. " , summary: "Sequel (Structured Query Language) is the easiest way to understand how data is structured, as it is a relational database. \n ﻿﻿- It is similar to an Excel spreadsheet where data is stored in rows and columns. \n -  ﻿﻿Each row is a record, and each column is a field in a record. \n -  ﻿﻿In this example, user data is stored with an ID, first name, last name, email, physical address, and phone number.This is just a representation of how data would be stored in a relational database. \n -  ﻿﻿Sequel databases are optimized for storing and retrieving structured data. \n - ﻿﻿They are very powerful for dealing with complex queries and data integrity. \n Downsides sometimes include scalability and complexity especially when dealing with unstructured data. \n -   ﻿﻿Developers often prefer MongoDB as a more flexible database for many applications. \n - ﻿﻿There is often a learning curve when moving between different database architectures. \n Developers who are fluent in Sequel may prefer to stick with its advantages.\n - When scalability and flexibility are needed, MongoDB is often preferred for many web applications. It performs very well when dealing with unstructured data and various data "},
    // Can add more initial lectures here
  ]);


  const updateLectureData = (newLecture) => {
    setLectureData([...lectureData, newLecture]);
  };

  const updateLectureSummary = (newLecture) => {
    setLectureSummary([...lectureSummary, newLecture]);
  };

  return (
    <LectureContext.Provider value={{ lectureData, updateLectureData, lectureSummary, updateLectureSummary }}>
      {children}
    </LectureContext.Provider>
  );
};
