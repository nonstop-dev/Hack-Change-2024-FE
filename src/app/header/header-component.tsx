import Image from 'next/image';
import styles from './header.module.scss';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Image className={styles.logo} src="/logo.svg" alt="МТС logo" width={48} height={48} priority />
        <h1 className={styles.heading}>ПОРТАЛ</h1>
      </div>
      <div className={styles.headerRight}>
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
      </div>
    </header>
  );
}
