# ReplyGen Frontend

**ReplyGen Frontend** is an intelligent email automation platform that helps users generate outstanding and appropriate email responses using a sophisticated **multi-agent system**. By leveraging AI, this platform automates email replies in various contexts, ensuring the tone, structure, and content are well-suited for professional and personal communications. Whether you need to reply to a business inquiry, customer service email, or personal message, **ReplyGen** simplifies the process by generating thoughtful and relevant responses.

Developed by **Wilfredo Aaron Sosa Ramos**, the platform is deployed on **Vercel** and integrates with an AI-powered backend to deliver highly accurate and context-aware email responses.

## Table of Contents

- [1. Features](#1-features)
- [2. How it Works](#2-how-it-works)
- [3. Technologies Used](#3-technologies-used)
- [4. Environment Variables](#4-environment-variables)
- [5. Installation Guide](#5-installation-guide)
- [6. How to Use](#6-how-to-use)

---

## 1. Features

**ReplyGen Frontend** offers a wide range of features designed to automate email replies, saving time and ensuring high-quality communication. Key features include:

- **Automated Email Replies**: Generate appropriate and well-structured responses based on email context and user preferences.
- **Multi-Agent AI System**: Uses multiple agents to analyze the content and tone of the incoming email and craft an accurate response.
- **Tone Customization**: Allows users to adjust the tone of their responses to be more formal, neutral, or casual, depending on the situation.
- **Context-Aware Replies**: Understands the context of the email thread and generates replies that are relevant and appropriate.
- **Real-Time Feedback**: Offers real-time feedback on the generated responses, suggesting improvements or adjustments where necessary.

These features streamline the process of responding to emails while ensuring that replies are professional, concise, and tailored to the recipient.

---

## 2. How it Works

The **ReplyGen Frontend** platform works by connecting with a backend AI model that processes email content and generates appropriate responses. Here's a general workflow of how the system operates:

1. **User Input**: The user provides an email or selects an email thread for which a response is required.
2. **Multi-Agent Analysis**: The multi-agent system analyzes the content, structure, and context of the email to understand the intent and tone of the message.
3. **Response Generation**: The AI generates a response that matches the email's context and user preferences, including the tone and structure.
4. **Customization**: Users can adjust the tone, modify the response, or approve the generated email for sending.
5. **Email Sent**: Once finalized, the user can send the email directly from the platform or copy the response to another email client.

The system ensures that the generated responses are aligned with the content and expectations of the email thread, enhancing communication efficiency.

---

## 3. Technologies Used

The **ReplyGen Frontend** is built using a modern technology stack that ensures smooth performance, scalability, and ease of use. The key technologies include:

- **NextJS**: A React-based framework that provides server-side rendering and static site generation, ensuring fast performance and SEO benefits.
- **ShadCN**: Provides reusable components and design patterns, ensuring a consistent and responsive user interface.
- **axios**: A promise-based HTTP client used to handle API requests to the backend services.
- **react-markdown**: Enables rendering markdown content within React components, which is useful for displaying email content and responses.
- **zod**: A schema declaration and validation library, integrated with **react-hook-form** to ensure proper validation of user input.
- **react-hook-form**: Simplifies form handling and validation, ensuring an efficient process for input management and form submissions.
- **@hookform/resolvers**: Integrates **zod** with **react-hook-form**, allowing seamless form validation based on schema definitions.
- **react-toastify**: Provides real-time notifications for user interactions, such as successful form submissions, errors, or email generation.
- **Tailwind CSS**: A utility-first CSS framework used to create a responsive and custom-designed user interface.
- **Async Management**: Ensures efficient handling of asynchronous operations, including API requests and data fetching, resulting in a smooth and responsive user experience.

---

## 4. Environment Variables

The **ReplyGen Frontend** requires the following environment variables to be configured for proper integration with backend services:

- **NEXT_PUBLIC_API_BASE_URL**: The base URL for the backend API that handles the email response generation.
- **NEXT_PUBLIC_API_KEY**: The API key used to authenticate requests to the backend services.

Example `.env.local` file configuration:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.replygen.com
NEXT_PUBLIC_API_KEY=your_api_key_here
```


Replace `your_api_key_here` with the actual API key provided by the backend.

---

## 5. Installation Guide

Follow these steps to set up and run the **ReplyGen Frontend** locally:

1. **Clone the repository**:
   - Clone the repository to your local machine using the following command:
     ```
     git clone https://github.com/yourusername/ReplyGenFrontend.git
     ```

2. **Navigate to the project directory**:
   - Move into the project folder:
     ```
     cd ReplyGenFrontend
     ```

3. **Install dependencies**:
   - Install the required packages using npm or yarn:
     ```
     npm install
     ```

4. **Set up environment variables**:
   - Create a `.env.local` file in the root directory of the project and configure the environment variables:
     ```
     NEXT_PUBLIC_API_BASE_URL=https://api.replygen.com
     NEXT_PUBLIC_API_KEY=your_api_key_here
     ```

5. **Run the development server**:
   - Start the application locally:
     ```
     npm run dev
     ```

6. **Build for production**:
   - To build the application for production deployment:
     ```
     npm run build
     ```

7. **Deploy**:
   - The project is deployed on **Vercel**. To deploy your version, push the code to a Git repository connected to Vercel, or follow the deployment instructions provided by Vercel.

---

## 6. How to Use

Once the **ReplyGen Frontend** is set up, you can automate your email responses by following these steps:

1. **Input the Email or Select a Thread**:
   - Choose an email thread or input the email text you need to reply to. The system will analyze the email context and prepare for response generation.

2. **Generate a Response**:
   - Click the "Generate Response" button, and the multi-agent system will create a response based on the email's context and your preferences (e.g., tone, structure).

3. **Customize the Response**:
   - Modify the generated response as needed. Adjust the tone, rewrite sections, or add additional content to ensure the response fits your style and the email's requirements.

4. **Approve and Send**:
   - Once satisfied with the generated response, you can approve it and send it directly from the platform, or copy the response and send it through your email client.

5. **Receive Real-Time Feedback**:
   - Notifications via **react-toastify** will inform you of successful response generation, errors, or any other important updates as you interact with the platform.

---

With **ReplyGen Frontend**, users can streamline their email response process by generating high-quality, contextually appropriate replies with minimal effort. The multi-agent AI system ensures that each response is tailored to the specific needs of the conversation, enhancing productivity and communication.
