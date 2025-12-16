import React from 'react';
import { CheckCircle, Shield } from 'lucide-react';

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
    <div className={`relative max-w-full mx-auto ${className}`}>
      {/* Certificate Frame - Minimalist */}
      <div className="relative bg-white rounded-lg border border-slate-300 shadow-sm overflow-hidden">
        {/* Certificate Content */}
        <div className="p-4 bg-white">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
            {/* Left - Brand */}
            <div className="flex items-center gap-2">
              <div>
                <div className="text-xs font-bold text-slate-900">
                  SYNTAXIM
                </div>
                <div className="text-[10px] text-slate-600">TECH EDUCATION</div>
              </div>
            </div>

            {/* Right - Verification Badge */}
            <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-100 rounded border border-slate-200">
              <CheckCircle className="h-3 w-3 text-slate-700" />
              <span className="text-[10px] font-semibold text-slate-700">VERIFIED</span>
            </div>
          </div>

          {/* Certificate Title */}
          <div className="text-center mb-4">
            <div className="inline-block px-2 py-0.5 bg-slate-100 rounded mb-2">
              <span className="text-[10px] font-semibold text-slate-700 uppercase">
                Certificate of Completion
              </span>
            </div>
            <h2 className="text-sm font-bold text-slate-900 mb-1 leading-tight">
              {courseName}
            </h2>
          </div>

          {/* Certification Text */}
          <div className="text-center mb-4 px-1">
            <p className="text-xs text-slate-600 mb-2">
              This is to certify that
            </p>
            <div className="inline-block px-3 py-1.5 bg-slate-50 rounded border border-slate-200 mb-2">
              <p className="text-sm font-bold text-slate-900">
                {studentName}
              </p>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              has successfully completed the{' '}
              <span className="font-semibold text-slate-900">{courseName}</span>
            </p>
          </div>

          {/* Certificate Details Grid */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-slate-50 rounded p-2 border border-slate-200">
              <p className="text-[10px] font-semibold text-slate-600 mb-0.5 uppercase">
                Date Issued
              </p>
              <p className="text-xs font-bold text-slate-900">XXXX</p>
            </div>
            <div className="bg-slate-50 rounded p-2 border border-slate-200">
              <p className="text-[10px] font-semibold text-slate-600 mb-0.5 uppercase">
                Certificate No.
              </p>
              <p className="text-xs font-bold text-slate-900">XXXX</p>
            </div>
          </div>

          {/* Verification URL */}
          <div className="text-center mb-4">
            <p className="text-[10px] text-slate-500 mb-1 uppercase">
              Verify at
            </p>
            <p className="text-[10px] text-slate-700 font-mono bg-slate-50 px-2 py-1 rounded inline-block border border-slate-200">
              https://syntaxim.com/certificate/xxxxx
            </p>
          </div>

          {/* Signature Section */}
          <div className="flex justify-between items-end pt-3 border-t border-slate-200">
            <div className="flex-1">
              <div className="h-8 w-24 bg-slate-100 rounded mb-1 border border-slate-200 flex items-center justify-center">
                <p className="text-[10px] font-semibold text-slate-600">Signature</p>
              </div>
              <p className="text-xs font-bold text-slate-900">
                Syntaxim Team
              </p>
              <p className="text-[10px] text-slate-600">(Founder & CEO)</p>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-100 rounded border border-slate-200">
              <Shield className="h-3 w-3 text-slate-700" />
              <span className="text-[10px] font-semibold text-slate-700">Verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateIllustration;
