// pages/index.tsx
import React from 'react';
import Blogs from '../blogs/page';
import Image from 'next/image';
import MainLogo from '../media/logo/hOblogo.jpg'
import AdminImage from '../media/logo/SanyaLamba1.jpeg'
import HeroImage from '../media/logo/hObHero.png'
import PersnutritionImg from '../media/thumbnails/PersnutritionImg12.jpg'
import CertnutrImg from '../media/thumbnails/CertifiedImg.jpg'
import FoodtrackImg from '../media/thumbnails/FoodTrackAImg.jpeg'
import MealrecipImg from '../media/thumbnails/MealplanImg.jpg'
import LifebcoachImg from '../media/thumbnails/SustLifehabitsImg.jpg'
import NutriedImg from '../media/thumbnails/EdresourceImg1.jpg'


const HomePage: React.FC = () => {
  return (
    <div className="font-sans antialiased">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center">
        <div className="bg-white flex justify-between items-center">
          <div className="container mx-auto px-4 py-24 text-center text-[#775048]">
            <h2 className="text-xl mb-2">Transform your Health<span></span> with,</h2>
            <div className='flex justify-center items-center'>
              <Image
                src={HeroImage}
                alt="healthObar"
                width={500}
                height={300} />
              {/* <h1 className="text-5xl font-bold mb-4">
              Health-O-Bar
              </h1> */}
            </div>
            <p className="text-lg mb-8">
              Personalised Nutrition for a better You.
            </p>
            <p className="text-sm mb-8">Welcome to Health-O-Bar, your ideal companian in achieving optimal health through personalized nutrition coaching. <br></br>
              Our certified nutritionists are here to guide you on your weight loss journey, providing customized plans and ongoing support.<br></br>
              Start your transformation today and experience the power of personalized nutrition coaching.</p>

            <div className="flex justify-center space-x-4 mb-4">
              <button className="bg-primary-color hover:shadow-lg bg-[#775048] text-white font-semibold py-2 px-6 rounded-3xl">
                Get Started
              </button>
              <button className="bg-accent-color hover:shadow-lg bg-[#775048] text-white font-semibold py-2 px-6 rounded-3xl">
                Learn More
              </button>
            </div>
            <div className='flex justify-center items-center'>
              <Image
                src={MainLogo}
                alt="customers"
                width={20}
                height={10}
                className='rounded-full mr-1'
              />
              <p className="text-sm">50+ Happy Customers</p>
            </div>
          </div>

          <div className='w-full md:w-1/2 flex justify-center'>
            <Image src={AdminImage}
              alt="Health-O-Bar"
              width={500}
              height={300}
              className='max-w-full h-auto mr-10 rounded-br-med rounded-tl-low' />
          </div>
        </div>

      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Items */}
            {[
              {
                title: 'Personalized Nutrition Plans',
                description: 'Customized meal plans tailored to your needs.',
                icon: PersnutritionImg,
              },
              {
                title: 'Guidance from Certified Nutritionists',
                description: 'Expert advice from certified professionals.',
                icon: CertnutrImg,
              },
              {
                title: 'Food Tracking and Analysis',
                description: 'Monitor your intake with ease.',
                icon: FoodtrackImg,
              },
              {
                title: 'Meal Planning and Recipes',
                description: 'Delicious recipes to keep you on track.',
                icon: MealrecipImg,
              },
              {
                title: 'Lifestyle and Behavior Coaching',
                description: 'Support for sustainable lifestyle changes.',
                icon: LifebcoachImg,
              },
              {
                title: 'Nutritional Education and Workshops',
                description: 'Learn more with our educational resources.',
                icon: NutriedImg,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded shadow ${index % 2 === 0
                  ? 'bg-white bg-opacity-20'
                  : 'bg-pinkColor bg-opacity-40'
                  }`}
              >
                <div className="mb-4 flex justify-center">
                  <Image
                    src={feature.icon}
                    width={300}
                    height={150}
                    alt={feature.title}
                    className=""
                  />
                </div>
                <div className='bottom-0'>
                <h3 className="text-xl font-bold mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-center">
                  {feature.description}
                </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Section  */}

      <Blogs />

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="flex justify-center rounded-b">
            {/* Testimonial Items */}
            {[1, 2, 3].map((testimonial) => (
              <div
                key={testimonial}
                className="bg-white p-6 rounded shadow flex mx-3 items-center hover:shadow-lg transition-shadow"
              >
                <img
                  src={`/images/user-${testimonial}.jpg`} // Replace with your user image paths
                  alt={`User Name ${testimonial}`}
                  className="h-16 w-16 rounded-full mr-6"
                />
                <div>
                  <p className="text-gray-700 mb-2">
                    "This service changed my life!"
                  </p>
                  <p className="font-bold">User Name {testimonial}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Plans</h2>
          <div className="flex flex-col md:flex-row md:-mx-2">
            {/* Plan Items */}
            {[
              {
                title: 'Basic Plan',
                description: 'Great for getting started.',
                monthlyPrice: '$29/month',
                yearlyPrice: '$290/year',
                popular: false,
              },
              {
                title: 'Standard Plan',
                description: 'For regular users.',
                monthlyPrice: '$49/month',
                yearlyPrice: '$490/year',
                popular: true,
              },
              {
                title: 'Premium Plan',
                description: 'All features included.',
                monthlyPrice: '$69/month',
                yearlyPrice: '$690/year',
                popular: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 md:px-2 mb-4 md:mb-0"
              >
                <div
                  className={`p-6 rounded shadow text-center border-2 ${plan.popular
                    ? 'border-accent-color'
                    : 'border-transparent'
                    }`}
                >
                  {plan.popular && (
                    <p className="text-sm text-white bg-accent-color inline-block px-2 py-1 rounded mb-2">
                      Most Popular
                    </p>
                  )}
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-gray-700 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <p className="text-2xl font-bold">{plan.monthlyPrice}</p>
                    <p className="text-sm text-gray-500">
                      or {plan.yearlyPrice}
                    </p>
                  </div>
                  <button className="bg-primary-color hover:bg-secondary-color text-white font-semibold py-2 px-6 rounded">
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

// <section className="py-16">
// <div className="container mx-auto px-4">
//   <h2 className="text-3xl font-bold text-center mb-12">Our Blogs</h2>
//   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//      Blog Items
//     {[1, 2, 3].map((blog) => (
//       <div
//         key={blog}
//         className="bg-white p-6 rounded shadow hover:shadow-lg transition-shadow"
//       >
//         <img
//           src={`/images/blog-${blog}.jpg`} // Replace with your blog image paths
//           alt={`Blog Title ${blog}`}
//           className="mb-4 w-full h-40 object-cover rounded"
//         />
//         <h3 className="text-xl font-bold mb-2">Blog Title {blog}</h3>
//         <p className="text-gray-700 mb-4">
//           Short excerpt from the blog...
//         </p>
//         <a
//           href="#"
//           className="text-primary-color font-semibold hover:underline"
//         >
//           Read More
//         </a>
//       </div>
//     ))}
//   </div>
// </div>
// </section> */}