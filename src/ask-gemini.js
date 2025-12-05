const { GoogleGenerativeAI } = require('@google/generative-ai');

// IMPORTANT: This is your resume data. The AI will use this as its primary source of knowledge.
// Keep this updated with your latest information.
const resumeContext = `
  This is the resume of Sai Ruthwik V.C.V.N. Use this information to answer questions.

  Experience:
  - Web Development Intern at Prodigy InfoTech (Mar 2024 - Apr 2024): Gained hands-on experience in front-end and back-end web development.

  Education:
  - B.Tech in Computer Science from Rajalakshmi Engineering College (2022-2026). CGPA: 7.57.
  - Higher Secondary from Narayana Olympiad School (2022).

  Skills:
  - Programming: Python, Java, JavaScript, SQL
  - Web Development: React, Node.js, REST APIs
  - Data Science: Pandas, Scikit-learn, NLP
  - Databases & Cloud: MySQL, MongoDB, Azure
  - Tools: GitHub, Figma, UiPath

  Projects:
  - TravelMate (SIH 2024): Full-stack travel app with React and Flask.
  - Smart Governance AI: AI platform for civic issues using Python and NLP.
  - IPL Winner Prediction: Predictive model using Scikit-learn.
`;

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { message } = JSON.parse(event.body);

    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is not set in the environment variables.");
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `${resumeContext}\n\nUser question: "${message}"\n\nAnswer as if you are a helpful assistant representing Ruthwik:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: text }),
    };
  } catch (error) {
    console.error("Error in ask-gemini function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An internal error occurred.", details: error.message }),
    };
  }
};