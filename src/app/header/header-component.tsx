import Image from 'next/image';
import styles from './header.module.scss';
import { Avatar, Box, IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { usePathname } from 'next/navigation';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function Header() {
  const path = usePathname();
  const isSearchPage = path === '/search';

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Image className={styles.logo} src="/logo.svg" alt="МТС logo" width={48} height={48} priority />
        <h1 className={styles.heading}>ПОРТАЛ</h1>
      </div>
      <div className={styles.headerRight}>
        {isSearchPage ? (
          ''
        ) : (
          <TextField
            placeholder="Поиск"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon></SearchIcon>
                  </InputAdornment>
                ),
                sx: { borderRadius: 16 },
              },
            }}
            size="small"
            variant="outlined"
          />
        )}
        <Box className={styles.userSettings}>
          <IconButton>
            <SettingsOutlinedIcon sx={{ width: 36, height: 36 }} />
          </IconButton>
          <Avatar sx={{ width: 48, height: 48 }} src="user.png" variant="rounded" className="mdAvatar"></Avatar>
        </Box>
      </div>
    </header>
  );
}
