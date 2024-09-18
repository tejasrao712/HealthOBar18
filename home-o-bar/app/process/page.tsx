// pages/process.tsx
import React from 'react';
import Image from 'next/image';
import ConsultationImg from '../media/thumbnails/ConsultationImg1.jpg'
import NeedAsImg from '../media/thumbnails/NeedsAsImg.jpg'
import PNutritionImg from '../media/thumbnails/PersnutritionImg1.jpg'
import MRecipeplanImg from '../media/thumbnails/MealplanImg.jpg'
import OsupportImg from '../media/thumbnails/OnsupportImg.jpg'
import ProtrackImg from '../media/thumbnails/ProtrackImg1.jpg'
import RegCheckImg from '../media/thumbnails/RegcheckinImg.jpg'
import EdresourceImg from '../media/thumbnails/EdresourceImg1.jpg'
import FinetuneImg from '../media/thumbnails/FinetuneImg.jpg'
import SustlifeImg from '../media/thumbnails/SustLifehabitsImg.jpg'
import HOBHero from '../media/logo/hObHero.png'


const ProcessPage: React.FC = () => {
  return (
    <div className="font-sans antialiased">
      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-dark-bg text-center py-16">
        <div className="container mx-auto ">
          <Image
          src={HOBHero}
          alt='Health-O-Bar'
          className='mx-auto w-auto '
          width={300}
          height={200}
           />
          <h1 className="text-5xl font-bold mb-4 text-primary-color dark:text-dark-text">
            Your Journey to Health and Fitness
          </h1>
          <p className="text-lg max-w-3xl mx-auto dark:text-dark-text">
            Embark on a comprehensive health journey tailored just for you. We’re here to guide you every step of the way with personalized plans, expert support, and the motivation you need to reach your goals.
          </p>
        </div>
      </section>

      {/* How Things Work Section */}
      <section className="py-16 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary-color dark:text-dark-text">
            How Things Work
          </h2>
          <p className="text-lg max-w-2xl mx-auto dark:text-dark-text">
            Our process is designed to be simple yet comprehensive. Each step is carefully crafted to ensure you get the most out of your journey with us.
          </p>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-16 bg-gray-50 dark:bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                step: 1,
                title: 'Initial Consultation',
                description: 'Discuss your goals, challenges, and what you want to achieve.',
                icon: ConsultationImg,
              },
              {
                step: 2,
                title: 'Assessing Needs',
                description: 'We assess your current health status and nutritional needs.',
                icon: NeedAsImg,
              },
              {
                step: 3,
                title: 'Personalized Nutrition Plan',
                description: 'Receive a tailored nutrition plan designed for your specific needs.',
                icon: PNutritionImg,
              },
              {
                step: 4,
                title: 'Meal Planning and Recipes',
                description: 'Get customized meal plans and recipes that fit your lifestyle.',
                icon: MRecipeplanImg,
              },
              {
                step: 5,
                title: 'Ongoing Support',
                description: 'Continuous support from our team to keep you on track.',
                icon: OsupportImg,
              },
              {
                step: 6,
                title: 'Progress Tracking',
                description: 'Monitor your progress with regular check-ins and adjustments.',
                icon: ProtrackImg,
              },
              {
                step: 7,
                title: 'Regular Check-Ins',
                description: 'Stay motivated and accountable with regular follow-ups.',
                icon: RegCheckImg,
              },
              {
                step: 8,
                title: 'Education and Resources',
                description: 'Access educational materials to empower your health journey.',
                icon: EdresourceImg,
              },
              {
                step: 9,
                title: 'Fine Tuning and Adjustments',
                description: 'We adjust your plan as needed to ensure optimal results.',
                icon: FinetuneImg,
              },
              {
                step: 10,
                title: 'Sustainable Lifestyle Habits',
                description: 'Build lasting habits that support a healthy lifestyle.',
                icon: SustlifeImg,
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white p-4 rounded-3xl shadow hover:shadow-lg dark:bg-dark-card"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-accent-color text-pinkColor-dark font-bold text-2xl rounded-full mx-2 dark:bg-dark-step">
                  {step.step}
                </div>
                <Image
                  src={step.icon}
                  alt={step.title}
                  className="w-64 h-56 mx-4 mb-8 rounded-full cursor-pointer"
                  width={400}
                  height={300}
                />
                <h3 className="text-xl font-semibold text-primary-color dark:text-dark-text">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-dark-text">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call-to-Action Section */}
      <section className="py-16 bg-primary-color text-pinkColor-dark dark:bg-dark-bg dark:text-dark-text">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Take the first step towards a healthier, fitter you. Join us today and let’s begin your transformation.
          </p>
          <button className="bg-accent-color hover:bg-secondary-color text-pinkColor-light bg-pinkColor-dark font-semibold py-3 px-8 rounded-lg dark:bg-dark-card dark:text-dark-text">
            Join Us Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;
