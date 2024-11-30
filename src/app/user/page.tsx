import styles from './user.module.scss';
import { Avatar, Button, Card, CardActions, CardContent } from '@mui/material';

export default function User() {
  return (
    <div className={styles.userPageContainer}>
      <div className={styles.mainInfo}>
        <Avatar
          sx={{ width: 328, height: 328 }}
          src="user.png"
          variant="rounded"
          className={styles.avatar + ' defaultAvatar'}></Avatar>
        <Card sx={{ minWidth: 275 }} className={styles.mainCard + ' defaultCard'}>
          <CardContent>User</CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }} className={styles.contacts + ' defaultCard'}>
          <CardContent>User</CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
      <div className={styles.otherInfo}>
        <div className={styles.companyInfo}>
          <Card sx={{ minWidth: 275 }} className={styles.contacts + ' defaultCard'}>
            <CardContent>User</CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ minWidth: 275 }} className={styles.contacts + ' defaultCard'}>
            <CardContent>User</CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
        <div className={styles.workInfo}>
          <Card sx={{ minWidth: 275 }} className={styles.contacts + ' defaultCard'}>
            <CardContent>User</CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ minWidth: 275 }} className={styles.contacts + ' defaultCard'}>
            <CardContent>User</CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}
