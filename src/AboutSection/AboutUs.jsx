import React from 'react';
import { Leaf, Heart, Users, Award, Sprout, BookOpen } from 'lucide-react';
import MeetExperts from '../HomePages/MeetExperts';

export default function AboutUs() {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability First",
      description: "We believe in eco-friendly practices, from sourcing plants to packaging, ensuring minimal environmental impact."
    },
    {
      icon: Heart,
      title: "Plant Wellness",
      description: "Every plant deserves proper care. We provide expert guidance to help your green friends thrive."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Building a community of plant lovers who share knowledge, experiences, and passion for greenery."
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "We handpick healthy, vibrant plants and ensure they reach your doorstep in perfect condition."
    }
  ];

  const milestones = [
    { year: "2020", event: "GreenNest Founded", description: "Started with a dream to bring nature indoors" },
    { year: "2021", event: "10,000+ Plants Delivered", description: "Reached our first major milestone" },
    { year: "2022", event: "Expert Consultation Launch", description: "Introduced personalized plant care sessions" },
    { year: "2023", event: "Community of 50,000+", description: "Built a thriving plant lover community" },
    { year: "2024", event: "Sustainability Award", description: "Recognized for eco-friendly practices" }
  ];

  return (
    <div className="w-full mx-auto bg-emerald-600">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-green-600 to-green-700 text-white">
        <div className="w-11/12 mx-auto p-20 text-center">
          <div className="flex justify-center my-6">
            <Sprout size={64} className="animate-bounce" />
          </div>
          <h1 className="text-3xl font-bold mb-6">About GreenNest</h1>
          <p className="text-xl text-green-100 leading-relaxed">
            We're on a mission to transform every home into a thriving indoor garden, 
            one plant at a time. Because everyone deserves to experience the joy and 
            wellness that comes from living with nature.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className=" bg-emerald-100 w-full mx-auto  py-20">
        <div className="grid md:grid-cols-2 w-11/12 mx-auto gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              GreenNest began in a small apartment filled with over 100 plants. Our founder, 
              Shourov, discovered that caring for plants wasn't just a hobby — it was therapy, 
              a lifestyle, and a way to reconnect with nature in our busy urban lives.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              After helping countless friends revive their struggling plants, Shourov realized 
              there was a need for accessible, expert plant care guidance combined with 
              quality plants. That's how GreenNest was born.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we're proud to serve thousands of plant parents, from beginners buying 
              their first succulent to experienced collectors seeking rare specimens. Our 
              expert team is here to support you every step of the way.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=800&q=80"
              alt="Indoor plant collection"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold">50K+</div>
              <div className="text-green-100">Happy Plant Parents</div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-emerald-600 w-full mx-auto py-20">
        <div className="w-11/12 mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4">Our Values</h2>
          <p className="text-center text-gray-100 mb-12 max-w-2xl mx-auto">
            The principles that guide everything we do at GreenNest
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Meet Our Team */}
    
      <MeetExperts></MeetExperts>

      {/* Our Journey */}
      <div className="bg-emerald-600 w-full py-20 mx-auto">
        <div className="w-11/12 mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-10">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-start gap-6 bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl"
              >
                <div className="bg-white text-green-700 font-bold text-xl px-4 py-2 rounded-lg min-w-20 text-center">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-emerald-700 mb-2">{milestone.event}</h3>
                  <p className="text-green-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
}