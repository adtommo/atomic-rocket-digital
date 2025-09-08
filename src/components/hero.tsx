import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Hero() {
  return (
    <Box
      component="header"
      sx={{
        // Rocket background styling - using gradient to simulate rocket-bg class
        background: '#000B1E', paddingRight:'3rem !important', paddingLeft:'3rem !important'
      }}
    >
      <Container maxWidth="xl" >
        <Grid 
          container 
          spacing={5}
          sx={{ alignItems: 'center', justifyContent: 'center' }}
        >
          {/* Text Content Column - Left side */}
          <Grid size ={{ xl:6, lg:7, md:8 }}>
            <Box
              sx={{
                my: 5,
                textAlign: { xs: 'center', md: 'left' },
                pr: { md: 4 }
              }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                  fontWeight: 'bold',
                  color: 'white',
                  mb: 2,
                  lineHeight: 1.2
                }}
              >
                Premium, Bespoke, websites for modern businesses
              </Typography>
              
              <Typography
                variant="h5"
                component="p"
                sx={{
                  fontWeight: 'normal',
                  color: 'rgba(255, 255, 255, 0.6)',
                  mb: 4,
                  lineHeight: 1.6,
                  fontSize: { xs: '1.1rem', md: '1.25rem' }
                }}
              >
                We design and develop responsive mobile-first sites that work for you and your business - fast, reliable, and built to grow!
              </Typography>
              
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={3}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                sx={{
                  '& .MuiButton-root': {
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem'
                  }
                }}
              >
                <Button
                  variant='contained'
                  size="large"
                  href="#process"
                  sx={{backgroundColor:'#0d6efd', fontWeight:'bold', '&:hover':{backgroundColor:'#0d6dfdd4', color:'#f8f9fa'} }}
                >
                  Get Started
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  href="/about"
                  sx={{color:'#f8f9fa', borderColor:'#f8f9fa', fontWeight:'bold', '&:hover':{backgroundColor:'#f8f9fa', color:'#000B1E'} }}
                >
                  Learn More
                </Button>
              </Stack>
            </Box>
          </Grid>
          
          {/* Image Column - Right side */}
          <Grid size ={{ xl:6, lg:5}}
            sx={{ 
              display: { md: 'none', sm: 'none', xs: 'none', lg: 'flex' },
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/vector-1738312919533-2bdd58425783?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hero illustration"
              sx={{
                width: '100%',
                height: '100%',
                borderRadius: 3,
                maxWidth: '100%'
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;