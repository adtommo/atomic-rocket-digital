import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

const steps = [
  {
    label: 'Take a look',
    description: 'Explore the range of plans we offer below to find the one that best suits your needs.',
  },
  {
    label: 'Free Consultation',
    description: 'Contact us using the form below, let us know how we can help. We will talk you through your options and what we will deliver.',
  },
  {
    label: 'The Build',
    description: "We'll hold a series of sessions throughout your website build to guide the process. Our iterative development approach allows us to adapt quickly and effectively to any changes along the way.",
  },
  {
    label: 'The Review',
    description: "You'll have dedicated time to review everything agreed upon during our consultation. This is your opportunity to request any final changes before your project goes live.",
  },
  {
    label: 'The Go-Live',
    description: "The exciting part — Go Live! Once we've finalized everything and you're happy with the result, we'll launch your website and take it live.",
  },
];

function ProcessSection() {
  return (
    <Box 
      component="section"
      id='process'
      sx={{ 
        py: 5, 
        backgroundColor: 'grey.100'
      }}
    >
      <Container maxWidth="xl" sx={{ px: 5, my: 5 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color:'black'
            }}
          >
            Our Process
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'normal',
              color: 'text.secondary',
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}
          >
            Transform Your Business in 5 Simple Steps
          </Typography>
        </Box>

        {/* Stepper */}
        <Box sx={{ maxWidth: 800, mx: 'auto'}}>
          <Stepper orientation="vertical" sx={{
            '.MuiStepConnector-line':{
                display:'none'
            },
            '.MuiStepContent-root':{
                marginLeft:'11px',
                color:'black'
            },
            '.MuiStepContent-last':{
                border:'none'
            },
            '.css-16h3655-MuiSvgIcon-root-MuiStepIcon-root.Mui-active':{
                color:'#198754'
            }
          }}>
            {steps.map((step) => (
              <Step key={step.label} active={true}>
                <StepLabel
                >
                  {step.label}
                </StepLabel>
                <StepContent
                  sx={{
                    borderLeft: '2px solid',
                    ml: 2,
                    pl: 3
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.6,
                      pb: 2
                    }}
                  >
                    {step.description}
                  </Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Container>
    </Box>
  );
}

export default ProcessSection;