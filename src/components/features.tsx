import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TimelineIcon from '@mui/icons-material/Timeline';

function FeaturesSection() {
  const features = [
    {
      icon: PhoneAndroidIcon,
      title: "Mobile-First by Design",
      description: "Built to perform flawlessly on phones, tablets, and every screen in between."
    },
    {
      icon: ElectricBoltIcon,
      title: "Lightning-Fast Performance", 
      description: "Speed that keeps users engaged - and Google happy."
    },
    {
      icon: RocketLaunchIcon,
      title: "Beyond Templates. Beyond Limits",
      description: "Positions you as a step above DIY platforms."
    },
    {
      icon: TimelineIcon,
      title: "Modern Sites. Real Results",
      description: "Simple, direct, results-driven."
    }
  ];

  return (
    <Box 
      component="section" 
      id="features"
      sx={{ py: 5, backgroundColor:'#f8f9fa', color:'#000B1E', paddingRight:'3rem !important', paddingLeft:'3rem !important'}}
    >
      <Container maxWidth="xl" sx={{ px: 5, my: 5 }}>
        <Grid container spacing={5}>
          {/* Left Column - Main Heading */}
          <Grid size={{xs:12, lg:4}} sx={{ mb: { xs: 5, lg: 0 } }}>
            <Typography
              sx={{
                fontWeight: 'bolder',
                mb: 0,
                fontSize: 'calc(1.325rem + 0.9vw)',
                textAlign:'center'
              }}
            >
              Ready When You Are.
            </Typography>
          </Grid>

          {/* Right Column - Features Grid */}
          <Grid size={{xs:12, lg:8}} >
            <Grid container spacing={5}>
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Grid 
                    key={index}
                    size={{xs:12, md:6}}
                    sx={{ 
                      mb: { xs: 5, md: index >= 2 ? 0 : 5 },
                      height: '100%'
                    }}
                  >
                    {/* Feature Icon */}
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        background: 'linear-gradient(135deg, #1976d2, #42a5f5)',
                        color: 'white',
                        borderRadius: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3
                      }}
                    >
                      <IconComponent />
                    </Box>

                    {/* Feature Title */}
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 'bold',
                        mb: 2,
                        fontSize: '1.25rem'
                      }}
                    >
                      {feature.title}
                    </Typography>

                    {/* Feature Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 0,
                        lineHeight: 1.6
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default FeaturesSection;