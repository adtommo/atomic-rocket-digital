import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

function PrivacyPage() {
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
            left: '10%',
            width: 80,
            height: 80,
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-20px)' }
            },
            animation: 'float 5s ease-in-out infinite'
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
              Privacy Policy
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
              How we collect, use, and protect your personal information
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Chip 
                label="UK GDPR Compliant" 
                sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.3)'
                  }
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Privacy Content Section */}
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
                  1. Introduction
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444' }}>
                  Atomic Rocket Digital ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and contact forms.
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                  2. Who We Are
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444' }}>
                  We are Atomic Rocket Digital, a digital agency specializing in bespoke websites & automated solutions based in the United Kingdom. Our website is atomicrocketdigital.com and you can contact us at hello@atomicrocketdigital.com.
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                  3. Information We Collect
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#333' }}>
                    3.1 Contact Form Information
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444', mb: 2 }}>
                    When you submit our contact form for service inquiries or quotes, we collect:
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, color: '#444' }}>
                    <li>Your name</li>
                    <li>Your email address</li>
                    <li>Your phone number</li>
                    <li>Any additional information you provide in your message</li>
                  </Box>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#333' }}>
                    3.2 Technical Information
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444', mb: 2 }}>
                    When you visit our website, we automatically collect:
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, color: '#444' }}>
                    <li>Your IP address</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website</li>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#333' }}>
                    3.3 Cookies
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444' }}>
                    We may use cookies and similar technologies to improve your browsing experience. You can control cookie settings through your browser preferences.
                  </Typography>
                </Box>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                  4. How We Use Your Information
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444', mb: 2 }}>
                  We use your personal information to:
                </Typography>
                <Box component="ul" sx={{ pl: 3, color: '#444' }}>
                  <li>Respond to your service inquiries and quote requests</li>
                  <li>Provide information about our bespoke websites & automated solutions</li>
                  <li>Communicate with you about potential projects</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </Box>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                  5. Legal Basis for Processing (UK GDPR)
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444', mb: 2 }}>
                  We process your personal information based on:
                </Typography>
                <Box component="ul" sx={{ pl: 3, color: '#444' }}>
                  <li><strong>Legitimate interests:</strong> To respond to your inquiries and provide information about our services</li>
                  <li><strong>Consent:</strong> When you voluntarily submit your information through our contact forms</li>
                  <li><strong>Legal obligation:</strong> When required by UK law</li>
                </Box>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                  6. Your Rights Under UK GDPR
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444', mb: 2 }}>
                  As a UK resident, you have the following rights:
                </Typography>
                <Box component="ul" sx={{ pl: 3, color: '#444', mb: 2 }}>
                  <li><strong>Right of access:</strong> Request a copy of your personal data</li>
                  <li><strong>Right of rectification:</strong> Correct inaccurate personal data</li>
                  <li><strong>Right of erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Right to restrict processing:</strong> Limit how we use your data</li>
                  <li><strong>Right to data portability:</strong> Receive your data in a portable format</li>
                  <li><strong>Right to object:</strong> Object to processing of your personal data</li>
                  <li><strong>Right to withdraw consent:</strong> Withdraw consent at any time</li>
                </Box>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444' }}>
                  To exercise these rights, contact us at hello@atomicrocketdigital.com.
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                  7. Data Retention
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444', mb: 2 }}>
                  We retain your contact information for as long as necessary to fulfill the purposes outlined in this policy, typically:
                </Typography>
                <Box component="ul" sx={{ pl: 3, color: '#444' }}>
                  <li>Contact form submissions: 3 years from last contact</li>
                  <li>Website analytics data: 26 months</li>
                  <li>Marketing communications: Until you unsubscribe</li>
                </Box>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                  8. Contact and Complaints
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444', mb: 2 }}>
                  If you have questions about this Privacy Policy or wish to make a complaint about how we handle your data, please contact us at:
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#0d6efd', fontWeight: 600, mb: 2 }}>
                  Email: hello@atomicrocketdigital.com
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444' }}>
                  You also have the right to lodge a complaint with the UK's Information Commissioner's Office (ICO) at ico.org.uk.
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

export default PrivacyPage;