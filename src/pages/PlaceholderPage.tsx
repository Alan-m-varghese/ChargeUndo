import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface PlaceholderProps {
  title: string;
  subtitle: string;
  type?: 'explore' | 'list' | 'auth' | 'info';
}

export const PlaceholderPage: React.FC<PlaceholderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="min-h-[85vh] pt-32 pb-20 px-6 flex items-center justify-center bg-[#080A09]">
      <div className="max-w-md w-full bg-[#111411] border border-white/[0.08] rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden shadow-2xl">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
          {title}
        </h1>

        <p className="text-[#A0A5A1] text-sm leading-relaxed mb-8">
          {subtitle}
        </p>

        <div className="space-y-3">
          <Link
            to="/"
            className="w-full py-3 px-6 rounded-full bg-[#8CF06B] hover:bg-[#9ef581] text-black font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(140,240,107,0.3)]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Landing Page</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
