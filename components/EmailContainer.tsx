import React from 'react';
import { FaEnvelope, FaChartLine } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';

interface EmailProps {
  data: any;
}

export const EmailOutputFinal: React.FC<EmailProps> = ({ data }) => (
  <div className="p-6 bg-blue-50 dark:bg-blue-900 rounded-lg border border-blue-300 dark:border-blue-600 mb-10">
    <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-4">Final Email Output</h2>
    <div className="text-sm text-gray-900 dark:text-gray-300 space-y-1">
      <p><strong>Subject:</strong> {data.email_output.subject}</p>
      <p><strong>Tone Achieved:</strong> {data.email_output.tone_achieved}</p>
      <p><strong>Call to Action Included:</strong> {data.email_output.call_to_action_included ? "Yes" : "No"}</p>
      <p><strong>Word Count:</strong> {data.email_output.final_word_count}</p>
      <p><strong>Sentiment Score:</strong> {data.email_output.final_sentiment_analysis_score}</p>
      <p><strong>Original Email Responded To:</strong> {data.email_output.original_email_responded_to ? "Yes" : "No"}</p>
    </div>
    <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md text-gray-800 dark:text-gray-200 whitespace-pre-line">
      {data.email_output.final_email_response}
    </div>
  </div>
);

export const EmailHeader: React.FC<EmailProps> = ({ data }) => (
  <div className="flex flex-col space-y-2 mb-6 border-b pb-4 border-gray-200 dark:border-gray-700">
    <div className="flex items-center space-x-3 text-xl text-blue-600 dark:text-blue-400">
      <FaEnvelope />
      <span>{data.subject}</span>
    </div>
    <div className="text-sm text-gray-800 dark:text-gray-400">
      <p>From: <span className="text-black dark:text-white">{data.recipient_name} ({data.recipient_email})</span></p>
    </div>
  </div>
);

export const EmailBody: React.FC<EmailProps> = ({ data }) => (
  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-md">
    <p className="whitespace-pre-line text-gray-800 dark:text-gray-100">{data.message_context}</p>
  </div>
);

export const EmailAnalytics: React.FC<EmailProps> = ({ data }) => (
  <div className="space-y-4 pt-4">
    <div className="flex items-center space-x-2 text-gray-800 dark:text-gray-200">
      <FaChartLine className="text-green-600 dark:text-green-400" />
      <span className="font-semibold">Sentiment Score:</span>
      <span>{data.email_body.sentiment_analysis_score}</span>
    </div>
    <div className="flex items-center space-x-2 text-gray-800 dark:text-gray-200">
      <FiCheckCircle className="text-blue-500 dark:text-blue-400" />
      <span className="font-semibold">Original Tone Reflected:</span>
      <span>{data.email_body.original_tone_reflected ? "Yes" : "No"}</span>
    </div>
  </div>
);

export const EmailSuggestions: React.FC<EmailProps> = ({ data }) => (
  <div className="p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg border border-yellow-300 dark:border-yellow-700 mt-8">
    <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Suggestions</h3>
    <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 space-y-1">
      {data.suggestions.suggestions.map((suggestion: string, idx: number) => (
        <li key={idx}>{suggestion}</li>
      ))}
    </ul>
  </div>
);

export const EmailImprovements: React.FC<EmailProps> = ({ data }) => (
  <div className="p-4 bg-red-50 dark:bg-red-900 rounded-lg border border-red-300 dark:border-red-600 mt-8">
    <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-2">Improvement Areas</h3>
    <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 space-y-1">
      {data.suggestions.improvement_areas.map((area: string, idx: number) => (
        <li key={idx}>{area}</li>
      ))}
    </ul>
  </div>
);

export const FinalEmailDisplay: React.FC<EmailProps> = ({ data }) => (
  <div className="space-y-4 p-4 bg-green-50 dark:bg-green-900 rounded-lg border border-green-300 dark:border-green-700 mt-8">
    <h2 className="text-lg font-semibold text-green-800 dark:text-green-300">Final Email</h2>
    <p className="text-gray-800 dark:text-gray-100 whitespace-pre-line">{data.final_email.final_email_response}</p>
    <p><strong>Word Count:</strong> {data.final_email.final_word_count}</p>
    <p><strong>Sentiment Score:</strong> {data.final_email.final_sentiment_analysis_score}</p>
    <p><strong>Call to Action Included:</strong> {data.final_email.call_to_action_included ? "Yes" : "No"}</p>
  </div>
);

export const EmailContainer: React.FC<EmailProps> = ({ data }) => (
  <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg space-y-12">
    <EmailOutputFinal data={data} />
    <EmailHeader data={data} />
    <EmailBody data={data} />
    <EmailAnalytics data={data} />
    <EmailSuggestions data={data} />
    <EmailImprovements data={data} />
    <FinalEmailDisplay data={data} />
  </div>
);

export default EmailContainer;
