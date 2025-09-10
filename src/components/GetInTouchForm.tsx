import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import MailIcon from '@mui/icons-material/Mail';
import PlaceIcon from '@mui/icons-material/Place';

function GetInTouchForm() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    honey: '', // honeypot field
  });

  const [showSuccess, setShowSuccess] = React.useState(false);

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (formData.honey) return; // honeypot check

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Form submitted:", formData);
    setShowSuccess(true);

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      honey: ''
    });
  };

  const handleCloseSuccess = () => setShowSuccess(false);

  const contactInfo = [
    { icon: MailIcon, title: 'Email Us', details: 'hello@atomicrocketdigital.com', subtitle: "We'll respond within a few days" },
    { icon: PlaceIcon, title: 'Visit Us', details: 'Liverpool, United Kingdom', subtitle: 'Virtual meetings available' },
  ];

  return (
    <Box component="section" id="contact" sx={{ py: 6, backgroundColor: '#f8f9fa', color: '#000B1E', overflowX: 'hidden' }}>
  <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 5 }, pb: 8, maxWidth: '100%' }}>
    {/* Header */}
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '2rem', md: '2.5rem' }, wordBreak: 'break-word' }}>
        Get In Touch
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 'normal', color: 'text.secondary', fontSize: { xs: '1.1rem', md: '1.25rem' }, maxWidth: '100%', mx: 'auto', wordBreak: 'break-word' }}>
        Ready to transform your business? Let's discuss your project and find the perfect solution for your needs.
      </Typography>
    </Box>

    <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '100%' }}>
      {/* Contact Form */}
      <Grid size={{ xs: 12, lg: 8 }} sx={{ maxWidth: '100%' }}>
        <Card sx={{ boxShadow: 3, maxWidth: '100%', overflowX: 'hidden' }}>
          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, textAlign: 'center', wordBreak: 'break-word' }}>
              Send Us a Message
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required fullWidth name="firstName" label="First Name"
                    value={formData.firstName} onChange={handleChange} variant="outlined"
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required fullWidth name="lastName" label="Last Name"
                    value={formData.lastName} onChange={handleChange} variant="outlined"
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required fullWidth name="email" label="Email Address" type="email"
                    value={formData.email} onChange={handleChange} variant="outlined"
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth name="phone" label="Phone Number" type="tel"
                    value={formData.phone} onChange={handleChange} variant="outlined"
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <FormControl fullWidth>
                    <InputLabel>Service Interested In</InputLabel>
                    <Select name="service" value={formData.service} label="Service Interested In" onChange={handleChange}>
                      <MenuItem value="basic">Basic Plan</MenuItem>
                      <MenuItem value="standard">Standard Plan</MenuItem>
                      <MenuItem value="ultimate">Ultimate Plan</MenuItem>
                      <MenuItem value="consultation">Free Consultation</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    required fullWidth name="message" label="Tell us about your project"
                    multiline rows={4} value={formData.message} onChange={handleChange} variant="outlined"
                    placeholder="Describe your business needs, timeline, and any specific requirements..."
                  />
                </Grid>

                {/* Honeypot */}
                <input type="text" name="honey" value={formData.honey} onChange={handleChange} style={{ display: 'none' }} />

                <Grid size={{ xs: 12 }}>
                  <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <Button
                      type="submit" variant="contained" size="large"
                      sx={{ width: { xs: '100%', sm: 'auto' }, px: { xs: 0, sm: 6 }, py: 1.5, fontSize: '1.1rem', fontWeight: 600, borderRadius: 2 }}
                    >
                      Send - we usually reply within a few days
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Contact Information */}
      <Grid size={{ xs: 12, lg: 4 }} sx={{ maxWidth: '100%' }}>
        <Box sx={{ pl: { lg: 2 }, maxWidth: '100%' }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 4, textAlign: { xs: 'center', lg: 'left' }, wordBreak: 'break-word' }}>
            Other Ways to Reach Us
          </Typography>

          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card key={index} sx={{ mb: 3, boxShadow: 1, maxWidth: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', maxWidth: '100%' }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: 2, backgroundColor: 'primary.main', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2, flexShrink: 0 }}>
                      <IconComponent />
                    </Box>
                    <Box sx={{ maxWidth: '100%' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, wordBreak: 'break-word' }}>{info.title}</Typography>
                      <Typography variant="body1" sx={{ color: 'text.primary', mb: 0.5, wordBreak: 'break-word' }}>{info.details}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', wordBreak: 'break-word' }}>{info.subtitle}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Grid>
    </Grid>

    {/* Success Snackbar */}
    <Snackbar open={showSuccess} autoHideDuration={6000} onClose={handleCloseSuccess} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
      <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
        Thank you! Your message has been sent successfully. We'll get back to you soon.
      </Alert>
    </Snackbar>
  </Container>
</Box>

  );
}

export default GetInTouchForm;
