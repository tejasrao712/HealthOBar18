// pages/about.tsx
import React from 'react';
import InceptionImg from '../media/thumbnails/Inception1.jpg'
import FirstepImg from '../media/thumbnails/Tfirststeps.jpg'
import GrowthImg from '../media/thumbnails/Growth.jpg'
import TechinovImg from '../media/thumbnails/Tech&Innov.jpg'
import ReachImg from '../media/thumbnails/Reach.jpg'
import HOBImg from '../media/logo/hObHero.png'
import Hcustmg from '../media/thumbnails/HappycustImg.jpg'
import CertImg from '../media/thumbnails/CertifiedImg.jpg'
import AwardImg from '../media/thumbnails/Award1Img.jpg'
import Image from 'next/image';

const AboutUsPage: React.FC = () => {
  return (
    <div className="font-sans antialiased">
      {/* Welcome Section */}
      <section className="py-16 bg-gray-50 dark:bg-dark-bg">
        <div className="container mx-auto text-center">
          {/* Logo */}
          <Image
            src={HOBImg}
            alt="Healthobar Logo"
            className="mx-auto h-32 w-auto mb-8"
            width={300}
            height={200}
          />
          <h1 className="text-5xl font-bold mb-4 text-primary-color dark:text-dark-text">
            Welcome to Healthobar
          </h1>
          <p className="text-lg max-w-3xl mx-auto dark:text-dark-text">
            At Healthobar, we are committed to transforming lives through personalized nutrition plans, professional guidance, and sustainable health solutions. With a team of certified professionals, we aim to empower you to achieve your health goals.
          </p>
        </div>
      </section>


      {/* Our Story Section */}
      <section className="py-20 relative">

        <h2 className="text-3xl font-bold text-center mb-12 dark:text-dark-text">Our Story</h2>

        <div className="container mx-auto grid grid-cols-1 gap-16 relative">

          {/* Continuous Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-pinkColor-dark h-full z-0 road-line">
          </div>

          {/* Story Items */}
          {[
            {
              title: 'Inception',
              description: 'The idea of Healthobar was born out of a need for personalized health solutions.',
              image: InceptionImg,
            },
            {
              title: 'The First Steps',
              description: 'We started by creating tailored nutrition plans for our first few clients.',
              image: FirstepImg,
            },
            {
              title: 'Growing Team',
              description: 'As we grew, we added certified nutritionists and health coaches to the team.',
              image: GrowthImg,
            },
            {
              title: 'Technological Innovation',
              description: 'We launched our platform to make personalized health solutions accessible to all.',
              image: TechinovImg,
            },
            {
              title: 'Reaching More People',
              description: 'Our services expanded to cover meal planning, behavior coaching, and workshops.',
              image: ReachImg,
            },
            {
              title: 'Today',
              description: 'Healthobar has become a trusted platform for over 600+ happy clients.',
              image: HOBImg,
            },
          ].map((stage, index) => (
            <div
              key={index}
              className={`relative grid grid-cols-2 md:grid-cols-5 items-center mb-16 z-10 ${index % 2 === 0 ? 'md:grid-cols-reverse' : ''}`}
            >

              {/* Even-indexed stages (Image on the left, Text on the right) */}
              {index % 2 === 0 ? (
                <>
                  {/* Image */}
                  <div className="md:col-span-2">
                    <Image src={stage.image} alt={stage.title} className="rounded-lg shadow-lg ml-52" width={400} height={300} />
                  </div>

                  {/* Middle Vertical Line and Road */}
                  <div className="h-full w-2 mx-auto md:col-span-1 relative"></div>

                  {/* Description */}
                  <div className="md:col-span-2 px-6">
                    <h3 className="text-2xl font-bold text-primary-color text-left dark:text-dark-text">
                      {stage.title}
                    </h3>
                    <p className="mt-4 text-lg text-gray-600 text-left dark:text-dark-text">
                      {stage.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Description */}
                  <div className="md:col-span-2 px-6">
                    <h3 className="text-2xl font-bold text-primary-color text-right dark:text-dark-text">
                      {stage.title}
                    </h3>
                    <p className="mt-4 text-lg text-gray-600 text-right dark:text-dark-text">
                      {stage.description}
                    </p>
                  </div>

                  {/* Middle Vertical Line and Road */}
                  <div className="h-full w-2 mx-auto md:col-span-1 relative"></div>

                  {/* Image */}
                  <div className="md:col-span-2">
                    <Image src={stage.image} alt={stage.title} className="rounded-lg shadow-lg" width={400} height={300} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>





      {/* Achievements Section */}
      <section className="py-16 bg-gray-50 dark:bg-dark-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 dark:text-dark-text">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '600+ Happy Clients',
                description: 'We are proud to have helped over 600 clients reach their health goals.',
                image: Hcustmg,
              },
              {
                title: 'Award-Winning Platform',
                description: 'Recognized as one of the top personalized health platforms.',
                image: AwardImg,
              },
              {
                title: 'Certified Professionals',
                description: 'Our team consists of certified nutritionists and health experts.',
                image: CertImg,
              },
              {
                title: 'Technological Innovation',
                description: 'We use cutting-edge technology to create personalized solutions.',
                image: TechinovImg,
              },
            ].map((achievement, index) => (
              <div key={index} className="p-10 bg-white rounded-xl shadow dark:bg-dark-card">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  className="h-20 w-auto mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-primary-color dark:text-dark-text mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-dark-text">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call-to-Action Section */}
      <section className="py-16 bg-primary-color text-pinkColor-dark dark:bg-dark-bg dark:text-dark-text">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Acknowledging Our Journey</h2>
          <p className="max-w-2xl mx-auto mb-8">
            We’ve come a long way and continue to strive for excellence in personalized health solutions. Join us today and let’s achieve your health goals together.
          </p>
          <button className="bg-accent-color hover:bg-secondary-color text-pinkColor-dark bg-pinkColor-light font-semibold py-3 px-8 rounded-lg dark:bg-dark-card dark:text-dark-text">
            Book a Free Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;



//         <div
//           key={index}
//           className={`flex flex-col md:flex-row ${
//             index % 2 === 0 ? 'md:flex-row-reverse' : ''
//           } items-center mb-16`}
//         >
//           {/* Image */}
//           <div className="md:w-1/2 mb-4 md:mb-0">
//             <Image
//               src={stage.image}
//               alt={stage.title}
//               className={`rounded-lg  ${index % 2 === 0 ? 'items-end':'items-start'} shadow-lg`}
//               width={400}
//               height={300}
//             />
//           </div>

//           <div className= 'h-72 bg-pinkColor-dark p-1 rounded-lg mx-10'></div>

//           {/* Description */}
//           <div className="md:w-1/2 px-6 item">
//             <h3 className={`text-2xl font-bold text-primary-color ${index % 2 === 0 ? 'text-right':'text-left'} dark:text-dark-text`}>
//               {stage.title}
//             </h3>
//             <p className={`mt-4 text-lg text-gray-600 ${index % 2 === 0 ? 'text-right':'text-left'} dark:text-dark-text`}>
//               {stage.description}
//             </p>
//           </div>
//         </div>
// Alternate Codes :



      {/* old ourstorycode
      {/* Our Story Section
      <section className="py-20">
          <div className="container mx-auto grid grid-cols-1 gap-16">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-dark-text">Our Story</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-accent-color h-full"></div>
              {[
                {
                  title: 'Inception',
                  description: 'The idea of Healthobar was born out of a need for personalized health solutions.',
                  image: InceptionImg,
                },
                {
                  title: 'The First Steps',
                  description: 'We started by creating tailored nutrition plans for our first few clients.',
                  image: FirstepImg,
                },
                {
                  title: 'Growing Team',
                  description: 'As we grew, we added certified nutritionists and health coaches to the team.',
                  image: GrowthImg,
                },
                {
                  title: 'Technological Innovation',
                  description: 'We launched our platform to make personalized health solutions accessible to all.',
                  image: TechinovImg,
                },
                {
                  title: 'Reaching More People',
                  description: 'Our services expanded to cover meal planning, behavior coaching, and workshops.',
                  image: ReachImg,
                },
                {
                  title: 'Today',
                  description: 'Healthobar has become a trusted platform for over 600+ happy clients.',
                  image: HOBImg
                },
              ].map((stage, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 md:grid-cols-5 items-center mb-16 ${index % 2 === 0 ? 'md:grid-cols-reverse' : ''
                    }`}
                >
                  {/* Image 
                  <div className="md:col-span-2">
                    <Image
                      src={stage.image}
                      alt={stage.title}
                      className="rounded-lg shadow-lg"
                      width={400}
                      height={300}
                    />
                  </div>

                  {/* Middle Vertical Line 
                  <div className="h-full w-1 bg-pinkColor-dark md:col-span-1"></div>

                  {/* Description 
                  <div className="md:col-span-2 px-6">
                    <h3
                      className={`text-2xl font-bold text-primary-color ${index % 2 === 0 ? 'text-left' : 'text-right'
                        } dark:text-dark-text`}
                    >
                      {stage.title}
                    </h3>
                    <p
                      className={`mt-4 text-lg text-gray-600 ${index % 2 === 0 ? 'text-t' : 'text-right'
                        } dark:text-dark-text`}
                    >
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section> */}

      {/* <section className="py-16 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-dark-text">Our Story</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-accent-color h-full"></div>
            {[
              {
                title: 'Inception',
                description: 'The idea of Healthobar was born out of a need for personalized health solutions.',
                image: InceptionImg,
              },
              {
                title: 'The First Steps',
                description: 'We started by creating tailored nutrition plans for our first few clients.',
                image: FirstepImg,
              },
              {
                title: 'Growing Team',
                description: 'As we grew, we added certified nutritionists and health coaches to the team.',
                image: GrowthImg,
              },
              {
                title: 'Technological Innovation',
                description: 'We launched our platform to make personalized health solutions accessible to all.',
                image: TechinovImg,
              },
              {
                title: 'Reaching More People',
                description: 'Our services expanded to cover meal planning, behavior coaching, and workshops.',
                image: ReachImg,
              },
              {
                title: 'Today',
                description: 'Healthobar has become a trusted platform for over 600+ happy clients.',
                image: HOBImg
              },
            ].map((stage, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-3 items-center mb-16 ${index % 2 === 0 ? 'md:grid-cols-reverse' : ''
                  }`}
              >
                
                <div className="md:col-span-1">
                  <Image
                    src={stage.image}
                    alt={stage.title}
                    className={`rounded-lg shadow-lg ${index % 2 === 0 ? 'self-end' : 'self-start'}`}
                    width={400}
                    height={300}
                  />
                </div>

                {/* Middle Horizontal Bar
                <div className="h-72 bg-pinkColor-dark p-1 rounded-lg mx-10 md:col-span-1"></div>

                {/* Description 
                <div className="md:col-span-1 px-6">
                  <h3
                    className={`text-2xl font-bold text-primary-color ${index % 2 === 0 ? 'text-right' : 'text-left'
                      } dark:text-dark-text`}
                  >
                    {stage.title}
                  </h3>
                  <p
                    className={`mt-4 text-lg text-gray-600 ${index % 2 === 0 ? 'text-right' : 'text-left'
                      } dark:text-dark-text`}
                  >
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}