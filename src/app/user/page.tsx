import styles from './user.module.scss';
import { Avatar, Box, Breadcrumbs, Button, Card, CardContent, CardHeader, Chip, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import InfoMiniCard from '../info-mini-card/info-mini-card';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/">
    MUI
  </Link>,
  <Link underline="hover" key="2" color="inherit" href="/material-ui/getting-started/installation/">
    Core
  </Link>,
  <Typography key="3" sx={{ color: 'text.primary' }}>
    Breadcrumb
  </Typography>,
];

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
            className={styles.mainInfoMdText}
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
            <Typography className={styles.mainInfoMdText + ' cardTextInfo'}>@asokol</Typography>
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
              <Chip
                label={'отпуск до 23 декабря'}
                sx={{
                  background: '#000',
                  color: '#fff',
                }}
                className="textSm"
              />
            </div>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275 }} className={styles.contacts + ' defaultCard'}>
          <CardContent sx={{ padding: '0 !important', height: '100%' }}>
            <Typography variant="h5" className="cardHeading" sx={{ marginBottom: '60px' }}>
              Контакты
            </Typography>
            <Box className={styles.cardInfoContentBox}>
              <div>
                <Typography className="cardSubHeading">Почта:</Typography>
                <Typography className="textMd">example@mail-mts.ru</Typography>
              </div>
              <div>
                <Typography className="cardSubHeading">Телефон:</Typography>
                <Typography className="textMd">+7 (999) 999 99 99</Typography>
              </div>
              <div>
                <Typography className="cardSubHeading">Телеграм:</Typography>
                <Typography className="textMd">@asokoltg</Typography>
              </div>
            </Box>
          </CardContent>
        </Card>
      </div>
      <div className={styles.otherInfo}>
        <div className={styles.companyInfo}>
          <Card sx={{ minWidth: 275 }} className={styles.contacts + ' defaultCard'}>
            <CardContent sx={{ padding: '0 !important', height: '100%' }}>
              <Typography variant="h5" className="cardHeading" sx={{ marginBottom: '60px' }}>
                Команда и роль
              </Typography>
              <Box className={styles.cardInfoContentBox}>
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                  {breadcrumbs}
                </Breadcrumbs>
                <Typography className="cardSubHeading" sx={{ textTransform: 'uppercase' }}>
                  Дизайнер
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275 }} className={styles.contacts + ' defaultCard'}>
            <CardContent sx={{ padding: '0 !important', height: '100%' }}>
              <Typography variant="h5" className="cardHeading" sx={{ marginBottom: '40px' }}>
                Руководители
              </Typography>
              <Box className={styles.cardInfoContentBox}>
                <InfoMiniCard
                  avatarSrc="user.png"
                  position="Арт-директор"
                  fullname="Иван иванов"
                  nickname="@vanyavanya"></InfoMiniCard>
                <InfoMiniCard
                  avatarSrc="user.png"
                  position="Арт-директор"
                  fullname="Иван иванов"
                  nickname="@vanyavanya"
                  breadCrumbs={[
                    { url: 'test', title: 'test' },
                    { url: 'test', title: 'test' },
                    { url: 'test', title: 'test' },
                  ]}></InfoMiniCard>
              </Box>
            </CardContent>
          </Card>
        </div>
        <div className={styles.workInfo}>
          <Card sx={{ minWidth: 275 }} className={styles.contacts + ' defaultCard'}>
            <CardContent sx={{ padding: '0 !important', height: '100%' }}>
              <Typography variant="h5" className="cardHeading" sx={{ marginBottom: '16px' }}>
                Формат работы
              </Typography>
              <Typography className="textMd">Гибридный</Typography>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275 }} className={styles.contacts + ' defaultCard'}>
            <CardContent sx={{ padding: '0 !important', height: '100%' }}>
              <Typography variant="h5" className="cardHeading" sx={{ marginBottom: '16px' }}>
                Офис
              </Typography>
              <Typography className="textMd" sx={{ maxWidth: '275px' }}>
                Москва, проспект Мира, 14, 2 этаж, место 2
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
