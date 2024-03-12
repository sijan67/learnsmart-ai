# learnsmart-ai

## Inspiration 💖

Students from underrepresented communities, especially like me and my teammate who is an international and for whom English is a second language, often face unique challenges. The rapid pace of lectures, combined with unfamiliar and new terminologies, can create significant barriers to learning and engagement. Recognizing this, we were driven to create LearnSmart AI—an AI-powered educational tool designed to make education accessible to everyone, fostering an inclusive and equitable learning environment. Inspired by the struggles we've observed among ourselves, LearnSmart AI is our answer to breaking down these barriers, providing a platform where language and terminology become bridges, not barriers, to learning.

## What it does 📚

LearnSmart AI empowers students to overcome language barriers in real-time during lectures. It features:

Speech-to-Text Recognition: Auto-transcribes lectures, allowing students to focus on understanding lecture rather than note-taking.
Clarify-More Feature: Students can quickly ask unfamiliar terms. The AI searches, defines, and explains these terms, along with references/sources to the information.
Summarize Feature: Condenses lecture content into bullet points, making review and revision efficient and effective.
Storage and Retrieval Feature: Every clarification and summary is stored in the student's personal history, allowing for easy access and revision at any time.
Together, these features create a supportive educational experience, allowing students to engage more deeply with lecture content and fostering a more inclusive academic environment.

## How we built it 🎀

We started with documenting key features we want to include in our app, followed by sketching low-fi prototype , experimenting with the CohereAI API and MongoDB Atlas platform, building backend API and integrating it with frontend mobile application at the end.

## Technical Implementation

Frontend: React Native with Expo to allow for cross-platform mobile app development (iOS & Android).
Backend: Node.js for developing robust REST API, with integration of CohereAI for terminology clarification, reference link and lecture content summarization.
Database: MongoDB atlas for its flexibility, easy connection and data retrieval.

## Challenges we ran into 🚧

While testing the Cohere /chat endpoint using Node , we faced an issue for a few hours that the format the response was returned was not the same as how it was documented on the website, and thus we were not able to generate links for the clarify endpoint. We reached out Abi, from CohereAI and found that the documentation for Node code was not correct and got help.

We also did not have enough time to integrate the authentication system with 1Password to identify each user and store the lecture summary and clarification associated with each user in the database although we plan to support this feature in the future. Thus, we currently only support posting and retrieving data from the same collections for all users using the app. In essence, every student can see a lecture summary or clarification that the other student has generated.

## Accomplishments that we're proud of 🎉

Given the time constraint , and our new experience with CohereAI and MongoDB atlas, we are proud to build a working prototype with all our functionalities integrated by the end of the hackathon.

## What we learned 🧠

This project was a good learning experience in understanding the intersection of technology, education, and inclusivity. We learned the power/ use cases of AI APIs to transform learning experiences motivating us to work further in this project.

## What's next for LearnSmart AI 👑

Our vision for LearnSmart AI is to expand its capabilities to include 1password authentication system, add user schemas on the database and improve upon UI/UX design, support more languages and dialects, making it an even more inclusive tool. We also plan to also include mind-map generation/ visualization to enhance the learning experience.

## Why we want to continue working on our project!

This is a problem me and my teammate ourself struggles often with and believe would be useful for many other international student as well. And we want that future where every student, regardless of background or language, has the tools they need to succeed in their education.

## Built With

cohereai
mongodb
node.js
react-native

## DevPost Link
https://devpost.com/software/learnsmart-ai

