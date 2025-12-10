import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import Book3D from './Book3D';

gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question:
      'What makes Syntaxim different from other online learning platforms?',
    answer:
      'Syntaxim offers affordable, comprehensive tech education with live classes, 24/7 doubt solving, hands-on projects, and expert mentorship. We focus on practical skills that help you land real jobs in the tech industry.',
  },
  {
    question: 'Do I need prior programming experience to enroll?',
    answer:
      "Not at all! Our courses are designed for beginners. We start from the basics and gradually build up to advanced concepts. Whether you're a complete beginner or have some experience, we have the right path for you.",
  },
  {
    question: 'What is the duration of the courses?',
    answer:
      'Course durations vary: Full Stack Development (6 months), Python Data Science (4 months), Machine Learning (5 months), and Data Analytics (3 months). All courses include live sessions, projects, and lifetime access to materials.',
  },
  {
    question: 'Will I get a certificate after completion?',
    answer:
      "Yes! Upon successful completion of any course, you'll receive a certificate that's recognized by industry professionals. This certificate can be added to your LinkedIn profile and resume.",
  },
  {
    question: 'What kind of support do you provide?',
    answer:
      'We offer 24/7 doubt solving through our platform, regular live Q&A sessions with instructors, a dedicated student community, and one-on-one mentorship opportunities. Our team is always here to help you succeed.',
  },
  {
    question: 'Can I access course materials after completion?',
    answer:
      'Absolutely! You get lifetime access to all course materials, including video lectures, code repositories, practice problems, and study resources. You can revisit the content anytime you need.',
  },
  {
    question: 'Are there any job placement opportunities?',
    answer:
      'Yes! We provide career guidance, resume building workshops, interview preparation, and connect our students with job opportunities through our industry partnerships. Many of our students have successfully landed jobs at top tech companies.',
  },
  {
    question: 'What payment options are available?',
    answer:
      'We offer flexible payment plans including one-time payment, monthly installments, and special discounts for students. Contact us to learn more about our affordable pricing options.',
  },
];

const InteractiveFAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (accordionRef.current) {
      gsap.fromTo(
        accordionRef.current.children,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: accordionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* 3D Book Elements */}
      <div className="absolute top-10 right-10 opacity-10 hidden lg:block">
        <Book3D className="scale-75" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10 hidden lg:block">
        <Book3D className="scale-75" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Book3D className="scale-75" />
          </div>
          <div className="inline-flex items-center gap-2 mb-4">
            <HelpCircle className="h-6 w-6 text-slate-900" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Got questions? We've got answers! Explore our FAQ to learn more
            about Syntaxim.
          </p>
        </div>

        <div ref={accordionRef} className="space-y-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-slate-200 rounded-lg bg-white"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-slate-700 px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed px-6 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-slate-800 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFAQ;
