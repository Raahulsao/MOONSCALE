'use client';

import React, { useState } from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Web Design',
    description: 'Capturing moments creatively.',
  },
  {
    title: 'AI Images Gen.',
    description: 'Designing with fonts that speak.',
  },
  {
    title: 'FullStack Website',
    description: 'Building pixel-perfect webspaces.',
  },
  {
    title: 'AI Video Gen.',
    description: 'Shape, model & animate in 3D.',
  },
  {
    title: 'Research',
    description: 'Crafting compelling stories.',
  },
  {
    title: 'UI/UX Design',
    description: 'Turning ideas into art.',
  },
  {
    title: 'AI Analysis',
    description: 'Smart data-driven insight.',
  },
  {
    title: 'More AI Stuff',
    description: 'Creative experiments & extras.',
  },
];

const ServicePage = () => {
  const [hoveredService, setHoveredService] = useState<{
    title: string;
    description: string;
  } | null>(null);

  return (
    <div
      className="relative bg-[#7d21cc] overflow-hidden rounded-3xl"
      style={{
        height: '90vh',
        marginLeft: '20px',
        marginRight: '20px',
      }}
    >
      {/* Container */}
      <div className="max-w-[1600px] h-full mx-auto px-4 flex flex-col items-center justify-start pt-10">
        {/* Subheader */}
        <div className="text-center mb-1">
          <p className="text-black text-lg font-normal">
            MOON SCALE ↑
          </p>
        </div>

        {/* Header & Description */}
        <div className="relative mb-4 h-[140px] w-full flex flex-col items-center justify-center overflow-hidden">
          {/* SERVICES Static */}
          <h1
            className={`absolute text-[90px] font-serif font-bold text-black transition-all duration-500 ease-in-out ${
              hoveredService ? 'opacity-0 scale-95 translate-y-4' : 'opacity-100 scale-100 translate-y-0'
            }`}
          >
            SERVICES
          </h1>

          {/* Hovered Title */}
          <h1
            className={`absolute text-[45px] font-serif font-bold text-black transition-all duration-500 ease-in-out ${
              hoveredService ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-6'
            }`}
          >
            {hoveredService?.title}
          </h1>

          {/* Description fades in when hovered */}
          <p
            className={`mt-20 text-black text-lg font-serif italic transition-all duration-500 ease-in-out ${
              hoveredService ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            {hoveredService?.description || ''}
          </p>
        </div>

        {/* Cards */}
        <div className="relative flex justify-center items-end w-full h-full mt-2">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredService(service)}
              onMouseLeave={() => setHoveredService(null)}
              className="relative bg-black w-[198px] h-[374px] border border-purple-400 rounded-t-lg 
                 transition-all duration-500 ease-in-out group hover:-translate-y-[35%] cursor-pointer"
              style={{
                marginLeft: index === 0 ? '0px' : '-65px',
                zIndex: index,
                bottom: '-80px',
                transform: 'rotate(0deg) skewY(-20deg)',
              }}
            >
              {/* Icon */}
              <GlobeAltIcon className="w-5 h-5 text-white absolute top-4 right-4 opacity-80" />

              {/* Always-visible Title with animation on hover */}
              <div
                className="absolute left-4 top-4 text-white font-serif text-lg leading-snug 
                  transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
              >
                {service.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;