import React from 'react';
import { Award, CheckCircle, Sparkles } from 'lucide-react';
import Logo from './Logo';

interface CertificateIllustrationProps {
  courseName?: string;
  studentName?: string;
  className?: string;
}

const CertificateIllustration: React.FC<CertificateIllustrationProps> = ({ 
  courseName = "Full Stack Development With AI",
  studentName = "{Student's Name}",
  className = ""
}) => {
  return (
    <div className={`relative max-w-2xl mx-auto ${className}`} style={{ transform: 'rotate(-0.5deg)' }}>
      {/* Certificate Frame with playful gradient border */}
      <div className="relative bg-gradient-to-br from-white via-blue-50/20 to-cyan-50/30 shadow-2xl overflow-hidden border-4"
           style={{
             borderImage: 'linear-gradient(135deg, #3B82F6, #06B6D4, #F97316, #8B5CF6) 1',
             borderTopColor: '#3B82F6',
             borderBottomColor: '#06B6D4',
             borderLeftColor: '#F97316',
             borderRightColor: '#8B5CF6',
           }}>
        
        {/* Playful top border with Codex colors */}
        <div className="relative h-12 bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-yellow-500/20"></div>
          <div className="absolute bottom-0 left-0 w-20 h-6 bg-white transform -skew-x-12 shadow-lg" style={{ transform: 'rotate(-2deg) skewX(-12deg)' }}></div>
          <div className="absolute bottom-0 right-0 w-20 h-6 bg-white transform skew-x-12 shadow-lg" style={{ transform: 'rotate(2deg) skewX(12deg)' }}></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-gradient-to-r from-orange-400 to-pink-500 rounded-t-full"></div>
          {/* Floating decorative elements */}
          <Sparkles className="absolute top-1 left-1/4 h-3 w-3 text-yellow-300 animate-pulse" style={{ transform: 'rotate(15deg)' }} />
          <Sparkles className="absolute top-2 right-1/3 h-2 w-2 text-cyan-300 animate-pulse" style={{ transform: 'rotate(-20deg)', animationDelay: '0.5s' }} />
        </div>

        {/* Certificate Content */}
        <div className="p-4 md:p-6 bg-white/80 backdrop-blur-sm">
          {/* Top Section - Codex Branding */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-dashed"
               style={{ 
                 borderBottomColor: '#3B82F6'
               }}>
            {/* Left - Codex Logo */}
            <div className="flex items-center gap-2" style={{ transform: 'rotate(-1deg)' }}>
              <div className="relative">
                <Logo className="h-12 w-auto" />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
              <div className="h-8 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-500"></div>
              <div>
                <div className="text-sm font-bold mb-0.5"
                     style={{ 
                       fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive", 
                       fontWeight: 700,
                       background: 'linear-gradient(135deg, #3B82F6, #06B6D4, #F97316)',
                       WebkitBackgroundClip: 'text',
                       WebkitTextFillColor: 'transparent',
                       backgroundClip: 'text'
                     }}>
                  CODEX
                </div>
                <div className="text-[10px] text-slate-600 font-semibold">TECH EDUCATION</div>
              </div>
            </div>

            {/* Center - Certificate Badge */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 via-cyan-50 to-orange-50 rounded-xl border-2 border-blue-200"
                 style={{ transform: 'rotate(1deg)' }}>
              <Award className="h-5 w-5 text-orange-500" />
              <div>
                <div className="text-[10px] font-bold text-slate-900 uppercase tracking-wide">VERIFIED</div>
                <div className="text-[10px] text-slate-600 font-semibold">CERTIFICATE</div>
              </div>
            </div>

            {/* Right - Playful Seal */}
            <div className="relative" style={{ transform: 'rotate(3deg)' }}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-orange-400 flex items-center justify-center shadow-xl border-2 border-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-purple-500/30"></div>
                <Award className="h-8 w-8 text-white relative z-10 drop-shadow-lg" />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-lg"></div>
            </div>
          </div>

          {/* Main Certificate Title - Playful Cursive */}
          <div className="text-center mb-6">
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 via-cyan-100 to-orange-100 rounded-full mb-2">
              <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">Certificate of Completion</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2"
                style={{ 
                  background: 'linear-gradient(135deg, #3B82F6, #06B6D4, #F97316, #8B5CF6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                  fontWeight: 700,
                  letterSpacing: '0.03em',
                  textShadow: '0 2px 8px rgba(59, 130, 246, 0.1)',
                  transform: 'rotate(-0.5deg)'
                }}>
              {courseName}
            </h2>
          </div>

          {/* Certification Text - Playful Style */}
          <div className="text-center mb-6 px-2">
            <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-3 font-medium"
               style={{ fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive", fontWeight: 600 }}>
              This is to certify that
            </p>
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 via-cyan-50 to-orange-50 rounded-xl border-2 border-transparent mb-3 shadow-md relative overflow-hidden"
                 style={{ 
                   borderImage: 'linear-gradient(135deg, #3B82F6, #06B6D4, #F97316) 1',
                   transform: 'rotate(0.5deg)'
                 }}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 via-cyan-200/20 to-orange-200/20"></div>
              <p className="text-xl md:text-2xl font-bold relative z-10"
                 style={{ 
                   fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive", 
                   fontWeight: 700,
                   letterSpacing: '0.03em',
                   background: 'linear-gradient(135deg, #1E40AF, #0891B2, #C2410C)',
                   WebkitBackgroundClip: 'text',
                   WebkitTextFillColor: 'transparent',
                   backgroundClip: 'text'
                 }}>
                {studentName}
              </p>
            </div>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium">
              has successfully completed the <span className="font-bold" style={{ 
                background: 'linear-gradient(135deg, #3B82F6, #F97316)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>{courseName}</span>
            </p>
          </div>

          {/* Certificate Details - Colorful Cards */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-3 border-2 border-blue-200 shadow-sm"
                 style={{ transform: 'rotate(-0.5deg)' }}>
              <p className="text-[10px] font-bold text-blue-700 mb-1 uppercase tracking-wider">DATE:</p>
              <p className="text-sm font-bold text-slate-900">XXXX</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg p-3 border-2 border-orange-200 shadow-sm"
                 style={{ transform: 'rotate(0.5deg)' }}>
              <p className="text-[10px] font-bold text-orange-700 mb-1 uppercase tracking-wider">Certificate No:</p>
              <p className="text-sm font-bold text-slate-900">XXXX</p>
            </div>
          </div>

          {/* Verification URL - Playful Style */}
          <div className="text-center mb-4">
            <p className="text-[10px] text-slate-500 mb-1 font-semibold uppercase tracking-wide">Verify at:</p>
            <p className="text-xs text-blue-700 font-mono bg-gradient-to-r from-blue-50 to-cyan-50 px-3 py-1 rounded-lg inline-block border-2 border-blue-300 font-semibold shadow-sm">
              https://codex.com/certificate/xxxxx
            </p>
          </div>

          {/* Signature Section - Playful */}
          <div className="flex justify-between items-end pt-4 border-t-2 border-dashed border-blue-200">
            <div className="flex-1">
              <div className="h-12 w-40 bg-gradient-to-r from-blue-200 via-cyan-200 to-orange-200 rounded mb-2 relative overflow-hidden"
                   style={{ 
                     clipPath: 'polygon(0 0, 88% 0, 100% 100%, 0 100%)',
                     transform: 'rotate(-1deg)'
                   }}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
                <div className="absolute bottom-1 left-2 text-slate-600 text-[10px] font-semibold"
                     style={{ fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive", fontWeight: 700 }}>
                  Signature
                </div>
              </div>
              <p className="text-sm font-bold"
                 style={{ 
                   fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive", 
                   fontWeight: 700,
                   background: 'linear-gradient(135deg, #3B82F6, #F97316)',
                   WebkitBackgroundClip: 'text',
                   WebkitTextFillColor: 'transparent',
                   backgroundClip: 'text'
                 }}>
                Codex Team
              </p>
              <p className="text-xs text-slate-600 font-medium">(Founder & CEO)</p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-300 shadow-sm"
                 style={{ transform: 'rotate(1deg)' }}>
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-xs font-bold text-green-700">Verified</span>
            </div>
          </div>
        </div>

        {/* Playful bottom border */}
        <div className="relative h-12 bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-yellow-500/20"></div>
          <div className="absolute top-0 left-0 w-20 h-6 bg-white transform skew-x-12 shadow-lg" style={{ transform: 'rotate(2deg) skewX(12deg)' }}></div>
          <div className="absolute top-0 right-0 w-20 h-6 bg-white transform -skew-x-12 shadow-lg" style={{ transform: 'rotate(-2deg) skewX(-12deg)' }}></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-gradient-to-r from-orange-400 to-pink-500 rounded-b-full"></div>
          <Sparkles className="absolute bottom-1 right-1/4 h-3 w-3 text-yellow-300 animate-pulse" style={{ transform: 'rotate(-15deg)', animationDelay: '0.3s' }} />
        </div>
      </div>

      {/* Playful decorative corner elements with Codex colors */}
      <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-40 shadow-md flex items-center justify-center animate-pulse"
           style={{ transform: 'rotate(-15deg)' }}>
        <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
      </div>
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-40 shadow-md flex items-center justify-center animate-pulse"
           style={{ transform: 'rotate(15deg)', animationDelay: '0.2s' }}>
        <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
      </div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-40 shadow-md flex items-center justify-center animate-pulse"
           style={{ transform: 'rotate(15deg)', animationDelay: '0.4s' }}>
        <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
      </div>
      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-green-500 to-teal-500 rounded-full opacity-40 shadow-md flex items-center justify-center animate-pulse"
           style={{ transform: 'rotate(-15deg)', animationDelay: '0.6s' }}>
        <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
      </div>
    </div>
  );
};

export default CertificateIllustration;

