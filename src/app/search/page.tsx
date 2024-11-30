'use client';
import { Autocomplete, TextField, InputAdornment, Box, Typography, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import style from './search-page.module.scss';
import InfoMiniCard from '../info-mini-card/info-mini-card';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
];

export default function SearchPage() {
  'use client';

  const isResult = false;
  return (
    <Box className={style.searchPageFlexContainer}>
      <Box className={style.searchPageFlexContainer + ' ' + style.searchFields}>
        <Autocomplete
          freeSolo
          sx={{ minWidth: 300 }}
          disableClearable
          options={top100Films.map(option => option.title)}
          renderInput={params => (
            <TextField
              {...params}
              placeholder="ФИО, никнейм или должность"
              slotProps={{
                input: {
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
        <Autocomplete
          sx={{ minWidth: 300 }}
          disableClearable
          options={top100Films.map(option => option.title)}
          renderInput={params => (
            <TextField
              {...params}
              label="Город"
              slotProps={{
                input: {
                  type: 'search',
                  sx: { borderRadius: 16 },
                },
              }}
              size="small"
              variant="outlined"
            />
          )}
        />
        <Autocomplete
          sx={{ minWidth: 300 }}
          options={top100Films.map(option => option.title)}
          renderInput={params => (
            <TextField
              {...params}
              label="Департамент"
              slotProps={{
                input: {
                  type: 'search',
                  sx: { borderRadius: 16 },
                },
              }}
              size="small"
              variant="outlined"
            />
          )}
        />
        <Autocomplete
          freeSolo
          sx={{ minWidth: 300 }}
          disableClearable
          options={top100Films.map(option => option.title)}
          renderInput={params => (
            <TextField
              {...params}
              label="Должность"
              slotProps={{
                input: {
                  type: 'search',
                  sx: { borderRadius: 16 },
                },
              }}
              size="small"
              variant="outlined"
            />
          )}
        />
        <Autocomplete
          freeSolo
          sx={{ minWidth: 300 }}
          disableClearable
          options={top100Films.map(option => option.title)}
          renderInput={params => (
            <TextField
              {...params}
              label="Проект"
              slotProps={{
                input: {
                  type: 'search',
                  sx: { borderRadius: 16 },
                },
              }}
              size="small"
              variant="outlined"
            />
          )}
        />
      </Box>
      <Box className={style.searchPageFlexContainer + ' ' + style.searchResults}>
        <Box>
          <Typography variant="h5" className="cardHeading" sx={{ marginBottom: '30px' }}>
            Сотрудники
          </Typography>
          <Box className={style.infoMiniCardContainer}>
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
        </Box>
        <Box>
          <Typography variant="h5" className="cardHeading" sx={{ marginBottom: '30px' }}>
            Подразделения
          </Typography>
          {isResult ? (
            <Box className={style.infoMiniCardContainer}>
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
          ) : (
            <Box>
              <Typography className="textMd" sx={{ marginBottom: '15px' }}>
                Ничего не найдено :({' '}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                sx={{
                  borderRadius: 100,
                }}>
                Сбросить поиск и начать заново
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
