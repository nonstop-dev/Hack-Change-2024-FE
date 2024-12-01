import { Avatar, Box, Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import styles from './info-mini-card.module.scss';

interface UserMiniCardProps {
  position: string;
  fullname: string;
  nickname: string;
  avatarSrc?: string;
  breadCrumbs?: {
    url: string;
    title: string;
  }[];
  classNameOverride?: string;
}

export default function InfoMiniCard({
  position,
  fullname,
  nickname,
  avatarSrc,
  breadCrumbs,
  classNameOverride,
}: UserMiniCardProps) {
  const breadcrumbs = breadCrumbs?.map((crumb, index) => {
    return (
      <Link underline="hover" key={index} color="inherit" href={crumb.url}>
        {crumb.title}
      </Link>
    );
  });

  const whiteClassOverride = classNameOverride ? classNameOverride : '';

  return (
    <Box className={styles.userMiniCardWrapper + whiteClassOverride}>
      {avatarSrc ? (
        <Avatar
          sx={{ width: 64, height: 64 }}
          src={avatarSrc}
          variant="rounded"
          className={styles.leftPart + ' mdAvatar'}></Avatar>
      ) : (
        ''
      )}
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
