import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

function TermsPage() {
  return (
    <Box>
      {/* Hero Header Section */}
      <Box
        component="section"
        sx={{
          py: 8,
          background: 'linear-gradient(135deg, #000B1E 0%, #0d6efd 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
            pointerEvents: 'none'
          }
        }}
      >
        {/* Floating elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: 100,
            height: 100,
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-15px)' }
            },
            animation: 'float 4s ease-in-out infinite'
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ textAlign: 'center', py: 6 }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '4rem' },
                color: 'white',
                textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                '@keyframes slideInDown': {
                  'from': {
                    opacity: 0,
                    transform: 'translateY(-30px)'
                  },
                  'to': {
                    opacity: 1,
                    transform: 'translateY(0)'
                  }
                },
                animation: 'slideInDown 1s ease-out'
              }}
            >
              Terms & Conditions
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                fontWeight: 400,
                mb: 4,
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.6,
                '@keyframes fadeInUp': {
                  'from': {
                    opacity: 0,
                    transform: 'translateY(20px)'
                  },
                  'to': {
                    opacity: 1,
                    transform: 'translateY(0)'
                  }
                },
                animation: 'fadeInUp 1s ease-out 0.3s both'
              }}
            >
              Our terms of service for using Atomic Rocket Digital's website and services
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Terms Content Section */}
      <Box
        component="section"
        sx={{
          py: 8,
          backgroundColor: '#f8f9fa'
        }}
      >
        <Container maxWidth="lg">
          <Paper
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              '@keyframes fadeInScale': {
                'from': {
                  opacity: 0,
                  transform: 'scale(0.95)'
                },
                'to': {
                  opacity: 1,
                  transform: 'scale(1)'
                }
              },
              animation: 'fadeInScale 0.8s ease-out'
            }}
          >
            <Typography variant="body2" sx={{ color: '#666', mb: 4, fontStyle: 'italic' }}>
              Last Updated: December 2024
            </Typography>

            <Box sx={{ '& > *': { mb: 4 } }}>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                  1. Acceptance of Terms
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444' }}>
                  By accessing and using the Atomic Rocket Digital website and our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                  2. Definitions
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444', mb: 2 }}>
                  <strong>"Company," "we," "us," "our"</strong> refers to Atomic Rocket Digital
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444', mb: 2 }}>
                  <strong>"Service"</strong> refers to the website and bespoke websites & automated solutions provided
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444', mb: 2 }}>
                  <strong>"User," "you," "your"</strong> refers to the individual accessing or using the service
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444' }}>
                  <strong>"Content"</strong> refers to all information, data, text, software, music, sound, photographs, graphics, video, messages, or other materials
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                  3. Use License
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444', mb: 2 }}>
                  Permission is granted to temporarily view the materials on our website for personal, non-commercial purposes only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </Typography>
                <Box component="ul" sx={{ pl: 3, color: '#444' }}>
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose without written consent</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </Box>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444', mt: 2 }}>
                  This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                  4. Website Use and Contact Forms
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#333' }}>
                  4.1 Contact Inquiries
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444', mb: 2 }}>
                  Our website includes contact forms for service inquiries and quotes. By submitting these forms, you:
                </Typography>
                <Box component="ul" sx={{ pl: 3, color: '#444', mb: 2 }}>
                  <li>Provide accurate and truthful information</li>
                  <li>Consent to us contacting you regarding your inquiry</li>
                  <li>Understand that submitting a form does not create a binding contract for services</li>
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#333' }}>
                  4.2 Service Quotes
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444' }}>
                  Any quotes provided are estimates based on the information you supply and are valid for 30 days unless otherwise stated. Final pricing may vary based on project scope and requirements.
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                  5. User Conduct
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#333' }}>
                  5.1 Prohibited Uses
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444', mb: 2 }}>
                  You agree not to use our website:
                </Typography>
                <Box component="ul" sx={{ pl: 3, color: '#444', mb: 2 }}>
                  <li>For any unlawful purpose or to solicit unlawful acts</li>
                  <li>To submit false, misleading, or spam inquiries</li>
                  <li>To harass, abuse, or harm our business or reputation</li>
                  <li>To upload viruses or other malicious code</li>
                  <li>To violate any UK or international laws</li>
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#333' }}>
                  5.2 Contact Form Abuse
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444' }}>
                  We reserve the right to block submissions from users who abuse our contact forms or submit inappropriate content.
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                  6. Governing Law
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444' }}>
                  These Terms shall be governed and construed in accordance with the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                  7. Contact Information
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444' }}>
                  If you have any questions about these Terms & Conditions, please contact us at:
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#0d6efd', fontWeight: 600 }}>
                  Email: hello@atomicrocketdigital.com
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

export default TermsPage;
