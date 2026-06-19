import React from 'react';

export function TulipLeft() {
  return (
    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-32 sm:w-40 h-80 pointer-events-none select-none opacity-85 z-20 hidden xl:block">
      <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Stems */}
        <path d="M20 200 C30 160 35 110 25 80" stroke="#2D6A4F" strokeWidth="4" strokeLinecap="round"/>
        <path d="M20 200 C40 140 55 90 70 60" stroke="#2D6A4F" strokeWidth="4" strokeLinecap="round"/>
        <path d="M20 200 C25 150 20 120 15 90" stroke="#2C5E43" strokeWidth="3" strokeLinecap="round"/>
        
        {/* Leaves */}
        <path d="M25 160 C35 130 50 110 55 90 C45 110 30 130 25 160Z" fill="#1B4332" opacity="0.95"/>
        <path d="M30 130 C45 100 60 80 65 60 C55 80 40 100 30 130Z" fill="#2D6A4F" opacity="0.9"/>
        <path d="M15 150 C5 120 0 90 5 70 C10 95 15 120 15 150Z" fill="#1B4332" opacity="0.95"/>
        
        {/* Tulip blooms */}
        {/* Left Orange-Red Tulip */}
        <path d="M25 80 C10 65 12 45 22 40 C32 35 42 55 35 75 Z" fill="#E27D60"/>
        <path d="M28 80 C20 70 22 55 25 45 C30 55 32 70 28 80 Z" fill="#E76F51"/>
        
        {/* Center Tall Pink Tulip */}
        <path d="M70 60 C60 40 65 20 75 15 C85 10 92 30 85 55 Z" fill="#C97A7E"/>
        <path d="M75 60 C70 50 72 35 75 25 C80 35 82 50 75 60 Z" fill="#B3666A"/>
        
        {/* Small bud */}
        <path d="M15 90 C10 80 12 70 18 70 C24 70 22 80 15 90 Z" fill="#E27D60"/>
      </svg>
    </div>
  );
}

export function TulipRight() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-32 sm:w-40 h-80 pointer-events-none select-none opacity-85 z-20 hidden xl:block">
      <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform scale-x-[-1]">
        {/* Stems */}
        <path d="M20 200 C30 160 35 110 25 80" stroke="#2D6A4F" strokeWidth="4" strokeLinecap="round"/>
        <path d="M20 200 C40 140 55 90 70 60" stroke="#2D6A4F" strokeWidth="4" strokeLinecap="round"/>
        <path d="M20 200 C25 150 20 120 15 90" stroke="#2C5E43" strokeWidth="3" strokeLinecap="round"/>
        
        {/* Leaves */}
        <path d="M25 160 C35 130 50 110 55 90 C45 110 30 130 25 160Z" fill="#1B4332" opacity="0.95"/>
        <path d="M30 130 C45 100 60 80 65 60 C55 80 40 100 30 130Z" fill="#2D6A4F" opacity="0.9"/>
        
        {/* Tulip blooms */}
        <path d="M25 80 C10 65 12 45 22 40 C32 35 42 55 35 75 Z" fill="#C97A7E"/>
        <path d="M28 80 C20 70 22 55 25 45 C30 55 32 70 28 80 Z" fill="#B3666A"/>
        
        <path d="M70 60 C60 40 65 20 75 15 C85 10 92 30 85 55 Z" fill="#E27D60"/>
        <path d="M75 60 C70 50 72 35 75 25 C80 35 82 50 75 60 Z" fill="#E76F51"/>
      </svg>
    </div>
  );
}
