import { Divider, Grid, Stack, Typography, Card } from '@mui/joy';
import { videoLinks } from '../components/data.ts';

export default function PageOne() {
  return (
    <>
      <Stack
        direction="column"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{
          mx: 'auto',
          my: 0,
          py: 10,
          px: 10,
        }}
      >
        {/* Title */}
        <Typography level="body-sm">4.3.2</Typography>
        <Typography level="h1">Video resources</Typography>
        <Typography level="body-md">
          Here are some videos to provide a deeper understanding of arguments against and for trade protection.
        </Typography>
        <Divider />

        <Grid container spacing={2} sx={{ mt: 2 }}>
          {videoLinks.map((item, idx) => (
            <Grid key={idx} xs={12} sm={6} md={4}>
              <Card sx={{ p: 2 }}>
                <iframe
                  width="100%"
                  height="250"
                  src={item.link}
                  title={`YouTube video ${idx + 1}`}
                  style={{ borderRadius: '8px' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </>
  );
}
