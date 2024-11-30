import { Avatar, Box, Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import styles from './user-mini-card.module.scss';

interface UserMiniCardProps {
  position: string;
  fullname: string;
  nickname: string;
  avatarSrc: string;
  breadCrumbs?: {
    url: string;
    title: string;
  }[];
}

export default function UserMiniCard({ position, fullname, nickname, avatarSrc, breadCrumbs }: UserMiniCardProps) {
  const breadcrumbs = breadCrumbs?.map((crumb, index) => {
    return (
      <Link underline="hover" key={index} color="inherit" href={crumb.url}>
        {crumb.title}
      </Link>
    );
  });
  return (
    <Box className={styles.userMiniCardWrapper}>
      <Avatar
        sx={{ width: 64, height: 64 }}
        src={avatarSrc}
        variant="rounded"
        className={styles.leftPart + ' mdAvatar'}></Avatar>
      <Box className={styles.rightPart}>
        <Typography className="textSm">{position}</Typography>
        <Typography className={styles.fullname}>{fullname}</Typography>
        <Typography className="textSm">{nickname}</Typography>
        {breadCrumbs?.length ? (
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        ) : (
          ''
        )}
      </Box>
    </Box>
  );
}
