import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled components for enhanced visual effects
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: theme.shadows[2],
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
}));

const StyledCardMedia = styled(CardMedia)(() => ({
  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

export default function FeaturedWorkSection() {
  const featuredWork = [
    {
      id: 1,
      image: 'https://dummyimage.com/600x350',
      alt: 'Featured Project 1',
      title: 'Project Alpha',
      description: 'Modern web application with responsive design',
    },
    {
      id: 2,
      image: 'https://dummyimage.com/600x350/adb5bd/495057',
      alt: 'Featured Project 2',
      title: 'Project Beta',
      description: 'Mobile-first e-commerce platform',
    },
    {
      id: 3,
      image: 'https://dummyimage.com/600x350/6c757d/343a40',
      alt: 'Featured Project 3',
      title: 'Project Gamma',
      description: 'Enterprise dashboard solution',
    },
  ];

  return (
    <Box component="section" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 'bold',
            mb: 6,
            textAlign: { xs: 'center', md: 'left' },
            color: 'text.primary',
          }}
        >
          Featured Work
        </Typography>

        <Grid container spacing={4}>
          {featuredWork.map((work) => (
            <Grid size={{xs:12, md:4}} key={work.id}>
              <StyledCard>
                <CardActionArea>
                  <Box>
                    <StyledCardMedia
                      style={{ height: "350px", paddingTop: "2%" }}
                      image={work.image}
                    />
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ 
                        fontWeight: 600,
                        mb: 1,
                        color: 'text.primary'
                      }}
                    >
                      {work.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.6 }}
                    >
                      {work.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}