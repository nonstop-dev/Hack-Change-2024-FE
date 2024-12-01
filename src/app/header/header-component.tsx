import Image from 'next/image';
import styles from './header.module.scss';
import { Autocomplete, Avatar, Box, IconButton, InputAdornment, Link, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { usePathname } from 'next/navigation';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
];

export default function Header() {
  const path = usePathname();
  const isSearchPage = path === '/search';

  return (
    <header className={styles.header}>
      <div>
        <Link href="/search" className={styles.left} style={{ textDecoration: 'none' }}>
          <Image className={styles.logo} src="/logo.svg" alt="МТС logo" width={48} height={48} priority />
          <h1 className={styles.heading}>ПОРТАЛ</h1>
        </Link>
      </div>
      <div className={styles.headerRight}>
        {isSearchPage ? (
          ''
        ) : (
          <Autocomplete
            freeSolo
            sx={{ minWidth: 300 }}
            disableClearable
            options={top100Films.map(option => option.title)}
            renderInput={params => (
              <TextField
                {...params}
                placeholder="Поиск"
                slotProps={{
                  input: {
                    ...params.InputProps,
                    type: 'search',
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
          />
        )}
        <Box className={styles.userSettings}>
          <IconButton>
            <SettingsOutlinedIcon sx={{ width: 36, height: 36 }} />
          </IconButton>
          <Link href="/user" style={{ textDecoration: 'none' }}>
            <Avatar sx={{ width: 48, height: 48 }} src="user.png" variant="rounded" className="mdAvatar"></Avatar>
          </Link>
        </Box>
      </div>
    </header>
  );
}
