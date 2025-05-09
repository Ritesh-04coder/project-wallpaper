import React from 'react';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react';
import { HeroGeometric } from './component/HeroGeometric';
import { FooterDemo } from './footer/FooterDemo';
import { GlowEffectButton } from './button/button';
import TestimonialAvatars from './Testimonials/TestimonialAvatars';

const fullPageStyles = `
html, body, #root {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

.clerk-button-wrapper {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 14px;
  padding: 10px 16px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
  font-weight: 500;
  color: white;
  font-size: 0.875rem;
}

.clerk-button-wrapper:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 10px 40px rgba(255, 255, 255, 0.2);
}
`;

const App: React.FC = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: fullPageStyles }} />

      <div className="min-h-screen flex flex-col bg-[#030303]">
        <div className="relative flex-1 flex flex-col items-center justify-center text-center px-4">
          <HeroGeometric />
          <div className="mt-4">
            <GlowEffectButton />
          </div>
        </div>
        <div className="fixed top-6 right-6 z-50">
          <div className="clerk-button-wrapper">
            <SignedOut>
              <SignInButton mode="redirect">Sign In</SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
        <FooterDemo />
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-6 sm:px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-white mb-8">
              We're proud to be trusted by developers worldwide.
            </p>
            <div className="flex justify-center">
              <div className="transition-transform duration-300 hover:scale-105">
                <TestimonialAvatars />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
