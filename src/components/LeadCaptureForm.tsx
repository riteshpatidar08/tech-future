import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { X, Send, Sparkles, TrendingUp, Award } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { leadAPI } from '@/services/api';
import CodeCube3D from './CodeCube3D';
import Laptop3D from './Laptop3D';

interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  course?: string;
  message?: string;
}

interface LeadCaptureFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  triggerDelay?: number; // Delay in seconds before showing
  onSuccess?: () => void; // Callback when form is successfully submitted
  courseName?: string; // Course name to pre-fill
}

const LeadCaptureForm = ({
  open,
  onOpenChange,
  triggerDelay = 5,
  onSuccess,
  courseName,
}: LeadCaptureFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    defaultValues: {
      course: courseName || '',
    },
  });

  useEffect(() => {
    if (open && cardRef.current) {
      // 3D entrance animation
      gsap.fromTo(
        cardRef.current,
        {
          rotationY: -15,
          rotationX: 10,
          scale: 0.8,
          opacity: 0,
          z: -100,
        },
        {
          rotationY: 0,
          rotationX: 0,
          scale: 1,
          opacity: 1,
          z: 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
        }
      );

      // Floating icon animation
      if (iconRef.current) {
        gsap.to(iconRef.current, {
          y: -10,
          rotation: 5,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    }
  }, [open]);

  // 3D tilt effect on mouse move
  useEffect(() => {
    if (!open || !cardRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      gsap.to(cardRef.current, {
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 1000,
        duration: 0.3,
        ease: 'power2.out',
      });

      setMousePosition({ x, y });
    };

    const handleMouseLeave = () => {
      gsap.to(cardRef.current, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    if (cardRef.current) {
      cardRef.current.addEventListener('mousemove', handleMouseMove);
      cardRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener('mousemove', handleMouseMove);
        cardRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [open]);

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);

    try {
      await leadAPI.create({
        name: data.name,
        email: data.email,
        phone: data.phone,
        course: data.course || '',
        message: data.message || '',
      });

      toast.success("Thank you! We'll contact you soon.", {
        description: 'Our team will reach out to you within 24 hours.',
      });

      reset();
      onOpenChange(false);
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      toast.error('Something went wrong', {
        description:
          error instanceof Error ? error.message : 'Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/60 backdrop-blur-sm" />
      <DialogContent
        className="max-w-md p-0 border-0 bg-transparent shadow-none overflow-visible data-[state=open]:animate-none"
        style={{ perspective: '1000px' }}
      >
        <div
          ref={cardRef}
          className="relative bg-white rounded-2xl overflow-hidden"
          style={{
            transformStyle: 'preserve-3d',
            boxShadow:
              '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)',
          }}
        >
          {/* 3D Glow Effect */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3), transparent 50%)`,
            }}
          />

          {/* Decorative 3D Elements */}
          <div className="absolute top-4 right-4 opacity-10 hidden md:block">
            <CodeCube3D className="scale-50" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-10 hidden md:block">
            <Laptop3D className="scale-50" />
          </div>

          {/* Header */}
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-white">
            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div ref={iconRef} className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Start Your Tech Journey</h2>
                <p className="text-sm text-slate-300">
                  Get exclusive offers & career guidance
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-4 mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-blue-400" />
                <span className="text-xs text-slate-300">85% Placement</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-yellow-400" />
                <span className="text-xs text-slate-300">500+ Students</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 space-y-4"
          >
            <div>
              <Input
                {...register('name', { required: 'Name is required' })}
                placeholder="Your Full Name"
                className="h-12 border-2 border-slate-200 focus:border-slate-900 transition-colors"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <Input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                type="email"
                placeholder="Email Address"
                className="h-12 border-2 border-slate-200 focus:border-slate-900 transition-colors"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Input
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Please enter a valid 10-digit phone number',
                  },
                })}
                type="tel"
                placeholder="Phone Number"
                className="h-12 border-2 border-slate-200 focus:border-slate-900 transition-colors"
              />
              {errors.phone && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <Input
                {...register('course')}
                placeholder="Course Interested In (Optional)"
                className="h-12 border-2 border-slate-200 focus:border-slate-900 transition-colors"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Get Started Now
                </>
              )}
            </Button>

            <p className="text-xs text-center text-slate-500">
              By submitting, you agree to receive updates from Syntaxim
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Auto-trigger component
export const AutoLeadCapture = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if user has already seen the form (using localStorage)
    const hasSeenForm = localStorage.getItem('syntaxim_lead_form_shown');

    if (hasSeenForm) return;

    // Show form after delay
    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasShown(true);
      localStorage.setItem('syntaxim_lead_form_shown', 'true');
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  // Also show on scroll (after 50% scroll)
  useEffect(() => {
    if (hasShown) return;

    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      if (
        scrollPercent > 50 &&
        !localStorage.getItem('syntaxim_lead_form_shown')
      ) {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem('syntaxim_lead_form_shown', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll, { once: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShown]);

  return <LeadCaptureForm open={isOpen} onOpenChange={setIsOpen} />;
};

export default LeadCaptureForm;
