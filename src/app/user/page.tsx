import { Button, Card, CardActions, CardContent } from '@mui/material';

export default function User() {
  return (
    <div className="container">
      <Card sx={{ minWidth: 275 }} className="defaultCard">
        <CardContent>User</CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
