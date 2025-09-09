import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';

function PricingSection() {
  const plans = [
    {
      name: 'Basic',
      price: '£40',
      period: '/ mo.',
      description: 'A simple online presence with essential features to get your business started.',
      setup:'£200 setup fee',
      badge: null,
      features: [
        { type: 'header', text: 'Domain & Hosting' },
        { type: 'feature', text: 'Domain Setup' },
        { type: 'feature', text: 'Hosting Maintenance & Security' },
        { type: 'header', text: 'Design & Content' },
        { type: 'feature', text: 'Custom Design - Up to 5 Pages' },
        { type: 'feature', text: 'Mobile Responsive' },
        { type: 'header', text: 'Engagement' },
        { type: 'feature', text: 'Social Media Links' },
        { type: 'feature', text: 'Contact Forms' }
      ]
    },
    {
      name: 'Standard',
      price: '£65',
      period: '/ mo.',
      description: 'A solid base plan to grow your customer base with enhanced features.',
      setup:'£400 setup fee',
      badge: 'popular',
      features: [
        { type: 'header', text: 'Everything in Basic, plus:' },
        { type: 'header', text: 'Design & Content' },
        { type: 'feature', text: 'Custom Design - Up to 20 Pages' },
        { type: 'header', text: 'Engagement & SEO' },
        { type: 'feature', text: 'Customer Reviews' },
        { type: 'feature', text: 'SEO Optimised' },
        { type: 'feature', text: 'Website Performance Reports' },
        { type: 'header', text: 'Automations' },
        { type: 'feature', text: 'Basic workflow automations' },
        
      ]
    },
    {
      name: 'Ultimate',
      price: '£120',
      period: '/ mo.',
      description: 'Our premium plan for businesses ready to skyrocket with advanced features.',
      setup:'£800 setup fee',
      badge: null,
      features: [
        { type: 'header', text: 'Everything in Standard, plus:' },
        { type: 'header', text: 'Design & Content' },
        { type: 'feature', text: 'Website Refresh (1 per 12 Months)' },
        { type: 'header', text: 'E-Commerce & Integration' },
        { type: 'feature', text: 'Online Store (Unlimited Products)' },
        { type: 'feature', text: 'Online Booking System' },
        { type: 'feature', text: 'Messaging Integration' },
        { type: 'feature', text: 'Payment Gateway setup' },
        { type: 'header', text: 'Automations' },
        { type: 'feature', text: 'Advanced workflow automations to streamline your business' },
      ]
    }
  ];

  return (
    <Box 
      component="section" 
      id="pricing"
      sx={{ 
        backgroundColor: 'grey.100', 
        py: 5,
        color:'black'
      }}
    >
      <Container maxWidth="xl" sx={{ px: 5, my: 5 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3rem' }
            }}
          >
            Our Plans
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'normal',
              color: 'text.secondary',
              mb: 0,
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}
          >
            Each project is unique, contact us for a free consultation and a personalised quote.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'normal',
              color: 'text.secondary',
              mb: 0,
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}
          >
            Below is a guideline of our prices.
          </Typography>
        </Box>

        {/* Pricing Cards */}
        <Grid container spacing={5} justifyContent="center">
          {plans.map((plan, index) => (
            <Grid key={plan.name} size={{xs:12, sm:12, md:4, lg:4, xl:4}}>
              <Card
                sx={{
                  mb: { xs: 5, xl: 0 },
                  height: '100%',
                  position: 'relative',
                  ...(plan.badge === 'popular' && {
                    border: '2px solid',
                    borderColor: 'primary.main'
                  })
                }}
              >
                <CardContent sx={{ p: 5 }}>
                  {/* Plan Badge */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    {plan.badge === 'popular' && (
                      <StarIcon style={{ marginRight: 8, color:'#d4af37' }} />
                    )}
                    <Typography
                      variant="overline"
                      sx={{
                        fontWeight: 'bold',
                        color: plan.badge ? 'primary.main' : 'text.secondary',
                        textTransform: 'uppercase'
                      }}
                    >
                      {plan.name}
                    </Typography>
                  </Box>

                  {/* Price */}
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                      <Typography
                        variant="h2"
                        component="span"
                        sx={{
                          fontWeight: 'bold',
                          fontSize: '3.5rem'
                        }}
                      >
                        {plan.price}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="span"
                        sx={{
                          color: 'text.secondary',
                          ml: 1
                        }}
                      >
                        {plan.period}
                      </Typography>
                    </Box>
                    <ListItemText
                              primary={plan.setup}
                            />
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        mt: 1
                      }}
                    >
                      {plan.description}
                    </Typography>
                  </Box>

                  {/* Features List */}
                  <List sx={{ p: 0 }}>
                    {plan.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} sx={{ px: 0, py: 0.5 }}>
                        {feature.type === 'header' ? (
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 600,
                              color: 'text.primary',
                              mb: 0.5
                            }}
                          >
                            {feature.text}
                          </Typography>
                        ) : (
                          <>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary={feature.text}
                            />
                          </>
                        )}
                      </ListItem>
                    ))}
                  </List>

                  {/* Popular Badge */}
                  {plan.badge === 'popular' && (
                    <Chip
                      label="Most Popular"
                      color="primary"
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16
                      }}
                    />
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default PricingSection;