'use client';

import React from 'react'
import { useState } from 'react';


const PricingPage: React.FC = () => {

  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'yearly'>(
    'monthly'
  );

  const plans = [
    {
      title: 'Basic Plan',
      monthlyPrice: '$29/month',
      yearlyPrice: '$290/year',
      features: [
        { name: 'Personalized Nutrition Plan', included: true },
        { name: 'Email Support', included: true },
        { name: 'One-on-One Consultations', included: false },
        { name: 'Recipe Recommendations and Meal Planning', included: false },
        { name: 'Priority Support', included: false },
        { name: 'Educational Resources and Guides', included: false },
        {
          name: 'Customized Meal Plans and Recipe Suggestions',
          included: false,
        },
        { name: 'Phone Support', included: false },
      ],
    },
    {
      title: 'Standard Plan',
      monthlyPrice: '$49/month',
      yearlyPrice: '$490/year',
      features: [
        { name: 'Personalized Nutrition Plan', included: true },
        { name: 'Email Support', included: true },
        { name: 'One-on-One Consultations', included: true },
        { name: 'Recipe Recommendations and Meal Planning', included: true },
        { name: 'Priority Support', included: false },
        { name: 'Educational Resources and Guides', included: true },
        {
          name: 'Customized Meal Plans and Recipe Suggestions',
          included: false,
        },
        { name: 'Phone Support', included: false },
      ],
    },
    {
      title: 'Premium Plan',
      monthlyPrice: '$69/month',
      yearlyPrice: '$690/year',
      features: [
        { name: 'Personalized Nutrition Plan', included: true },
        { name: 'Email Support', included: true },
        { name: 'One-on-One Consultations', included: true },
        { name: 'Recipe Recommendations and Meal Planning', included: true },
        { name: 'Priority Support', included: true },
        { name: 'Educational Resources and Guides', included: true },
        {
          name: 'Customized Meal Plans and Recipe Suggestions',
          included: true,
        },
        { name: 'Phone Support', included: true },
      ],
    },
  ];

  const faqs = [
    {
      question: 'What is your return policy?',
      answer:
        'Our return policy allows returns within 30 days of purchase. Please ensure that the item is in its original condition.',
    },
    {
      question: 'How do I track my order?',
      answer:
        'You can track your order through the tracking link provided in your shipment confirmation email.',
    },
    {
      question: 'Do you offer international shipping?',
      answer:
        'Yes, we offer international shipping to many countries. Shipping rates and times vary depending on the destination.',
    },
  ];

  return (
    <div className="py-16 px-4 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Our Pricing</h2>
      <p className="text-center mb-12">
        Choose the plan that best fits your needs and get the most out of our
        services. Each plan is tailored to provide value at every level,
        ensuring you get the best experience for your goals.
      </p>

      {/* Billing Cycle Toggle */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setBillingCycle('monthly')}
          className={`px-4 py-2 rounded-l ${billingCycle === 'monthly'
            ? 'bg-pinkColor-dark text-white'
            : 'bg-gray-200 text-gray-600'
            }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingCycle('yearly')}
          className={`px-4 py-2 rounded-r ${billingCycle === 'yearly'
            ? 'bg-pinkColor-dark text-white'
            : 'bg-gray-200 text-gray-600'
            }`}
        >
          Yearly
        </button>
      </div>

      {/* Pricing Plans */}
      <div className="flex flex-col md:flex-row md:-mx-2 mb-12">
        {plans.map((plan, index) => (
          <div key={index} className="w-full md:w-1/3 md:px-2 mb-4 md:mb-0">
            <div
              className={`p-6 rounded shadow text-center border-2 ${plan.title === 'Standard Plan'
                ? 'border-accent-color'
                : 'border-transparent'
                }`}
            >
              {plan.title === 'Standard Plan' && (
                <p className="text-sm text-white bg-accent-color inline-block px-2 py-1 rounded mb-2">
                  Most Popular
                </p>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
              <div className="mb-4">
                <p className="text-2xl font-bold">
                  {billingCycle === 'monthly'
                    ? plan.monthlyPrice
                    : plan.yearlyPrice}
                </p>
              </div>
              <button className="bg-primary-color hover:bg-secondary-color text-white font-semibold py-2 px-6 rounded">
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Feature Comparison Table */}
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border-none p-4 text-left"></th>
              {plans.map((plan, index) => (
                <th key={index} className="border p-4 text-center">
                  {plan.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {plans[0].features.map((feature, featureIndex) => (
              <tr key={featureIndex}>
                <td className="border-none p-4">{feature.name}</td>
                {plans.map((plan, planIndex) => (
                  <td
                    key={planIndex}
                    className="border p-4 text-center"
                  >
                    {plan.features[featureIndex].included ? '✔️' : '❌'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FAQ Section */}

      <div className="mt-16 w-full bg-gray-100 p-8 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>

        <div className="container flex justify-between ">
          {/* FAQ List */}
          <div className="w-3/5">
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-4 rounded shadow mx-4">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left text-lg font-medium"
                  >
                    {faq.question}
                  </button>
                  {activeFAQ === index && (
                    <div className="my-2 text-gray-700">
                      {faq.answer}
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="text-pinkColor-light underline"
                      >
                        Close
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Ask a Question */}
          <div className="w-1/3 bg-white p-4 rounded-full shadow text-center">
            <h4 className="text-md font-semibold my-2">Have a Question?</h4>
            <p className="text-gray-600 my-4">
              If you don't find the answer to your question, feel free to ask us directly.
            </p>
            <button className="w-2/5 bg-pinkColor-dark text-white p-2 rounded">Ask Us!</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PricingPage;
