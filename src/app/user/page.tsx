import styles from './user.module.scss';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Chip, Typography } from '@mui/material';

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
          <CardHeader
            action={
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  borderRadius: 100,
                  textTransform: 'capitalize',
                }}>
                Написать
              </Button>
            }
            title="UX/UI Дизайнер"
            className={styles.mainInfoMdText + ' textMd'}
            sx={{
              marginBottom: '20px',
              padding: 0,
              '& .MuiCardHeader-title': {
                fontFamily: 'MTSText, sans-serif',
                fontSize: 20,
                fontWeight: 400,
              },
            }}
          />
          <CardContent sx={{ padding: '0 !important' }}>
            <Typography variant="h4" className={styles.mainInfoFocusedText}>
              Александр Соколов
            </Typography>
            <Typography className={styles.mainInfoMdText + ' textMd'}>@asokol</Typography>
            <div className={styles.scheduleInfo}>
              <Chip
                label={'на встрече с 12:30 до 13:15'}
                sx={{
                  background: '#7E7E8E',
                  color: '#fff',
                }}
                className="textSm"
              />
              <Chip
                label="следующая встреча в 16:20"
                variant="outlined"
                sx={{
                  color: '#00000080',
                }}
                className="textSm"
              />
            </div>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275 }} className={styles.contacts + ' defaultCard'}>
          <CardContent></CardContent>
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
