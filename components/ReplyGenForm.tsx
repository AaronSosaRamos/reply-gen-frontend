import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { FiSend } from 'react-icons/fi';
import { FaUserCircle, FaEnvelope, FaAlignLeft } from 'react-icons/fa';
import EmailContainer from './EmailContainer';
import CircularSpinner from './CircularSpinner';
import axiosInstance from '../utils/axiosInstance';

const schema = Joi.object({
  recipient_name: Joi.string().min(3).required().label('Recipient Name'),
  recipient_email: Joi.string().email({ tlds: { allow: false } }).required().label('Recipient Email'),
  subject: Joi.string().min(5).required().label('Subject'),
  message_context: Joi.string().min(20).required().label('Message Content'),
});

export default function EmailForm() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: joiResolver(schema),
  });

  const onSubmit = async (formData: any) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post('/reply-gen', formData);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching response:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-300 via-blue-400 to-pink-400 dark:from-gray-900 dark:via-gray-800 dark:to-black p-4 mt-12">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 space-y-6 mb-12">
        
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
            <FaEnvelope className="text-red-500" />
            <span>New Email</span>
          </h2>
          <FiSend className="text-blue-600 text-xl" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="flex items-center text-gray-800 dark:text-gray-300 font-medium space-x-2">
              <FaUserCircle className="text-green-500" />
              <span>Recipient Name:</span>
            </label>
            <input
              type="text"
              placeholder="e.g., John Doe"
              {...register('recipient_name')}
              className="w-full px-4 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.recipient_name?.message && (
              <p className="text-red-500 text-sm mt-1">{String(errors.recipient_name.message)}</p>
            )}
          </div>

          <div>
            <label className="flex items-center text-gray-800 dark:text-gray-300 font-medium space-x-2">
              <FaEnvelope className="text-yellow-500" />
              <span>Recipient Email:</span>
            </label>
            <input
              type="email"
              placeholder="e.g., john.doe@example.com"
              {...register('recipient_email')}
              className="w-full px-4 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {errors.recipient_email?.message && (
              <p className="text-red-500 text-sm mt-1">{String(errors.recipient_email.message)}</p>
            )}
          </div>

          <div>
            <label className="flex items-center text-gray-800 dark:text-gray-300 font-medium space-x-2">
              <FaAlignLeft className="text-blue-500" />
              <span>Subject:</span>
            </label>
            <input
              type="text"
              placeholder="Subject of the email"
              {...register('subject')}
              className="w-full px-4 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.subject?.message && (
              <p className="text-red-500 text-sm mt-1">{String(errors.subject.message)}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-800 dark:text-gray-300 font-medium">Message</label>
            <textarea
              rows={8}
              placeholder="Compose your email here..."
              {...register('message_context')}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
            ></textarea>
            {errors.message_context?.message && (
              <p className="text-red-500 text-sm mt-1">{String(errors.message_context.message)}</p>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-semibold rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <FiSend className="text-lg" />
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>

      {loading ? (
        <CircularSpinner />
      ) : (
        data && <div className="mb-16"><EmailContainer data={data} /></div>
      )}
    </div>
  );
}
