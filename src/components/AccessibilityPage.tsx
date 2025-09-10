import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function AccessibilityPage() {
  const accessibilityFeatures = [
    {
      title: "Keyboard Navigation",
      description: "Full keyboard accessibility for all interactive elements"
    },
    {
      title: "Screen Reader Compatible",
      description: "Works with JAWS, NVDA, VoiceOver, and TalkBack"
    },
    {
      title: "High Contrast",
      description: "Color schemes meet WCAG contrast requirements"
    },
    {
      title: "Responsive Text",
      description: "Text can be resized up to 200% without loss of function"
    }
  ];

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
            background: 'radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
            pointerEvents: 'none'
          }
        }}
      >
        {/* Floating elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '30%',
            left: '5%',
            width: 60,
            height: 60,
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-10px)' }
            },
            animation: 'float 3s ease-in-out infinite'
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
              Accessibility Statement
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
              Our commitment to making our website accessible to everyone
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Accessibility Features Section */}
      <Box
        component="section"
        sx={{
          py: 8,
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                color: '#1a1a1a',
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Accessibility Features
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {accessibilityFeatures.map((feature, index) => (
              <Grid key={index} size={{xs:12, sm:12, md:3}}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 32px rgba(0,0,0,0.15)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <CheckCircleIcon 
                      sx={{ 
                        fontSize: 48, 
                        color: '#0d6efd',
                        mb: 2
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: '#1a1a1a'
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666',
                        lineHeight: 1.6
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Accessibility Content Section */}
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
                  Our Commitment to Accessibility
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444' }}>
                  Atomic Rocket Digital is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure our website is accessible to all visitors.
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                  Conformance Status
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444' }}>
                  We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards, as required by UK accessibility regulations. These guidelines help make web content more accessible to people with disabilities and user-friendly for everyone.
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                  Assistive Technologies
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444', mb: 2 }}>
                  Our website is designed to be compatible with:
                </Typography>
                <Box component="ul" sx={{ pl: 3, color: '#444' }}>
                  <li>Screen readers (including JAWS, NVDA, VoiceOver, and TalkBack)</li>
                  <li>Voice recognition software</li>
                  <li>Keyboard-only navigation</li>
                  <li>Screen magnification software</li>
                  <li>High contrast and dark mode displays</li>
                  <li>Mobile accessibility features</li>
                </Box>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                  Feedback and Support
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444', mb: 2 }}>
                  We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#0d6efd', fontWeight: 600, mb: 2 }}>
                  Email: hello@atomicrocketdigital.com
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444', mb: 2 }}>
                  Subject Line: Please use "Accessibility Feedback" in your subject line
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444' }}>
                  We aim to respond to accessibility feedback within 5 business days.
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                  Alternative Contact Methods
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444' }}>
                  If you experience difficulty using our online contact form due to accessibility issues, you can also reach us directly via email at hello@atomicrocketdigital.com. We're happy to assist you with any service inquiries through alternative communication methods.
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                  Legal Compliance
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444', mb: 2 }}>
                  We aim to comply with:
                </Typography>
                <Box component="ul" sx={{ pl: 3, color: '#444' }}>
                  <li>The Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018</li>
                  <li>The Equality Act 2010</li>
                  <li>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</li>
                  <li>European Accessibility Act requirements</li>
                </Box>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                  Continuous Improvement
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444', mb: 2 }}>
                  Accessibility is an ongoing commitment. We regularly:
                </Typography>
                <Box component="ul" sx={{ pl: 3, color: '#444' }}>
                  <li>Review and update our accessibility practices</li>
                  <li>Test new content and features for accessibility</li>
                  <li>Stay current with accessibility best practices and guidelines</li>
                  <li>Incorporate user feedback into our improvement processes</li>
                  <li>Provide accessibility training for our team</li>
                </Box>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                  Contact Information
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444', mb: 2 }}>
                  For any questions about this accessibility statement or to report accessibility issues, please contact us at:
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

export default AccessibilityPage;