import React, { useState, ChangeEvent } from 'react';
import {
  Box,
  Button,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  SvgIcon,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type TabType = 'faq' | 'contact';

const HelpWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('faq');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'What technologies do you use?',
    answer: 'We specialize in React, Next.js, Node.js, TypeScript, Tailwind CSS, and AWS for deployment. Our stack ensures fast, scalable, and maintainable websites.',
  },
  {
    id: 2,
    question: 'How long does a typical project take?',
    answer: 'Most websites take 4-8 weeks depending on complexity and requirements. E-commerce sites may take 6-12 weeks. We follow a structured development process including discovery, design, build, review, and launch.',
  },
  {
    id: 3,
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer comprehensive maintenance and support packages including updates, backups, performance monitoring, security patches, and technical assistance.',
  },
  {
    id: 4,
    question: 'What is your pricing structure?',
    answer: 'We provide custom quotes based on project scope and requirements. Contact us for a free consultation and personalized estimate.',
  },
  {
    id: 5,
    question: 'Can you work with existing websites?',
    answer: 'Yes, we can redesign, optimize, or add features to existing websites, whether built on WordPress, Shopify, or custom platforms.',
  },
  {
    id: 7,
    question: 'What makes you different from other agencies?',
    answer: 'We focus on performance, user experience, and long-term partnerships. Our code is clean, scalable, and built with modern best practices. We also provide workflow automations to streamline business processes.',
  },
 {
  id: 8,
  question: 'Do you provide hosting services?',
  answer: 'We offer full hosting and ongoing management for your website at our monthly plan. Alternatively, we can transfer the site to your own hosting after setup, in which case no ongoing monthly fee applies.',
},
  {
    id: 9,
    question: 'Can you help with SEO?',
    answer: 'Yes, all our websites are built SEO-friendly with proper structure, fast loading times, and advanced SEO strategies to improve Google rankings.',
  },
  {
    id: 10,
    question: 'Are your websites mobile responsive?',
    answer: 'Absolutely! All our websites are mobile-first and fully responsive, ensuring perfect functionality across all devices and screen sizes.',
  },
  {
    id: 11,
    question: 'How does your development process work?',
    answer: 'Our process includes five steps: Free Consultation, The Build (iterative design and development), The Review (client feedback and final adjustments), The Go-Live (launch), and Ongoing Support & Optimisation (If applicable).',
  },
  {
    id: 12,
    question: 'What services do you offer?',
    answer: 'Our core services include custom website design, workflow automation, e-commerce solutions, API integration, ongoing maintenance, and digital strategy consulting.',
  },
  {
    id: 13,
    question: 'How can I contact you?',
    answer: 'You can reach Atomic Rocket Digital via email at hello@atomicrocketdigital.com, or through our website contact form.',
  }
];


  const toggleWidget = () => setIsOpen(prev => !prev);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email.');
      return;
    }
    alert(`Thanks ${formData.name}! We've received your message.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  // Circle Button Icon
  const CircleIcon = (props: any) => (
    <SvgIcon {...props} viewBox="0 0 60 60">
      <path
        d="M60 30C60 51.25 51.25 60 30 60C8.75 60 0 51.25 0 30C0 8.75 8.75 0 30 0C51.25 0 60 8.75 60 30Z"
        fill="currentColor" stroke="#0b5ed7"
      />
    </SvgIcon>
  );

  const ChatIcon = (props: any) => (
    <SvgIcon {...props} viewBox="0 0 60 60">
      <path
        d="M41.216 29.026c0 3.576-.895 5.847-2.647 7.268l-.066.052c-.213.173-.448.362-.6.559a1.958 1.958 0 0 0-.311.562c-.086.233-.117.494-.144.719l-.008.062-.303 2.48c-.063.516-.102.834-.151 1.06a1.595 1.595 0 0 1-.04.151.091.091 0 0 1-.015.006 1.42 1.42 0 0 1-.137-.076 14.087 14.087 0 0 1-.868-.626l-2.98-2.244-.041-.03a3.046 3.046 0 0 0-.53-.343 2.061 2.061 0 0 0-.554-.17 3.13 3.13 0 0 0-.648-.016l-.054.002c-.496.023-1.014.034-1.553.034-4.41 0-7.28-.758-9.048-2.22-1.721-1.421-2.602-3.683-2.602-7.23 0-3.546.88-5.808 2.602-7.23 1.769-1.46 4.639-2.22 9.048-2.22 4.41 0 7.28.76 9.048 2.22 1.721 1.422 2.602 3.684 2.602 7.23Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </SvgIcon>
  );

  const CloseIconCustom = (props: any) => (
    <SvgIcon {...props} viewBox="0 0 60 61">
      <path
        d="M38.125 27.625 30 35.375l-8.125-7.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );

  return (
    <>
      {/* Floating Panel with tiny bounce */}
      <Box
        sx={{
            position: 'fixed',
            bottom: 90,
            right: 24,
            width: isSmall ? '90%' : 360,
            maxHeight: '70vh',
            bgcolor: '#fff',
            borderRadius: 2,
            boxShadow: 4,
            overflow: 'hidden',
            zIndex: 1500,
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(20px)',
            transition: 'transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.25s ease',
            pointerEvents: isOpen ? 'auto' : 'none', // ← disable clicks when hidden
        }}
        >
        {/* Header */}
        <Box sx={{ bgcolor: '#0d6efd', color: '#fff', px: 2, py: 1.5 }}>
          <Typography variant="h6">How can we help?</Typography>
        </Box>

        {/* Tabs */}
        <Tabs value={activeTab} onChange={(_, val) => setActiveTab(val)} variant="fullWidth">
          <Tab label="FAQ" value="faq" />
          <Tab label="Contact" value="contact" />
        </Tabs>

        {/* Content */}
        <Box sx={{ p: 2, overflowY: 'auto', maxHeight: 'calc(70vh - 120px)' }}>
          {activeTab === 'faq' && (
            <Box>
              {faqData.map(item => (
                <Accordion key={item.id}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="body1">{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" color="text.secondary">
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          )}
          {activeTab === 'contact' && (
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField label="Name" name="name" value={formData.name} onChange={handleInputChange} required fullWidth />
              <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleInputChange} required fullWidth />
              <TextField label="Subject" name="subject" value={formData.subject} onChange={handleInputChange} required fullWidth />
              <TextField label="Message" name="message" value={formData.message} onChange={handleInputChange} required fullWidth multiline rows={3} />
              <Button type="submit" variant="contained">Send Message</Button>
            </Box>
          )}
        </Box>
      </Box>

      {/* Floating Circle Button with hover grow and spring rotation */}
        <Box
        onClick={toggleWidget}
        sx={{
            width: 60,
            height: 60,
            position: 'fixed',
            bottom: 24,
            right: 24,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 1600,
            color: '#0d6efd',
            transition: 'transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55), box-shadow 0.25s, color 0.25s',
            transform: isOpen ? 'rotate(180deg) scale(1.1)' : 'rotate(0deg) scale(1)',
            boxShadow: isOpen ? '0 0 15px 5px rgba(13,110,253,0.4)' : '0 0 5px 0 rgba(0,0,0,0.1)',
            '&:hover': {
            transform: `${isOpen ? 'rotate(180deg)' : 'rotate(0deg)'} scale(1.2)`,
            color: '#0b5ed7',
            boxShadow: '0 0 20px 8px rgba(13,110,253,0.5)',
            },
        }}
        >
        <CircleIcon sx={{ width: 60, height: 60 }} />
        <Box sx={{ position: 'absolute' }}>
            {isOpen ? (
            <CloseIconCustom sx={{ color: '#fff', fontSize: 60 }} />
            ) : (
            <ChatIcon sx={{ color: '#fff', fontSize: 60 }} />
            )}
        </Box>
        </Box>
    </>
  );
};

export default HelpWidget;
