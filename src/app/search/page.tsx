'use client';
import { Autocomplete, TextField, InputAdornment, Box, Typography, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import style from './search-page.module.scss';
import InfoMiniCard from '../info-mini-card/info-mini-card';
// import employeesData from '../../../employees.json';
import { useEffect, useState } from 'react';
export const dynamic = 'force-dynamic';
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
];

export default function SearchPage() {
  'use client';
  const [employees, setEmployees] = useState<any>([]);
  useEffect(() => {
    fetch('https://379s-momz-hgzd.gw-1a.dockhost.net/employees').then(value => {
      value.json().then(v => {
        console.log(v);
        setEmployees(v);
      });
    });
  }, []);
  const onChangeLocation = (event: any) => {
    const val = event.target.value;
    let tmp = null;
    if (val.startsWith('@')) {
      tmp = employees.filter((emp: any) => emp.nickname.includes(val.substring(1)));
      setEmployees(tmp);
    } else if (!val.startsWith('@') && tmp != null) {
      tmp = employees.filter((emp: any) => emp.name.includes(val));
      setEmployees(tmp);
      console.log(tmp);
    } else {
      fetch('https://379s-momz-hgzd.gw-1a.dockhost.net/employees').then(value => {
        value.json().then(v => {
          console.log(v);
          setEmployees(v);
        });
      });
    }
  };
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
              onChange={onChangeLocation}
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
            {employees.map((employee: any, index: any) => (
              <InfoMiniCard
                key={index}
                position={employee.role}
                fullname={employee.name}
                avatarSrc="test"
                nickname={employee.nickname}></InfoMiniCard>
            ))}
          </Box>
          {/* {employees.map((employee: any) => {
            <Box className={style.infoMiniCardContainer}>
              <InfoMiniCard
                avatarSrc="user.png"
                position={employee.role}
                fullname={employee.name}
                nickname={employee.nickname}
                breadCrumbs={[
                  { url: 'test', title: 'test' },
                  { url: 'test', title: 'test' },
                  { url: 'test', title: 'test' },
                ]}></InfoMiniCard>
            </Box>;
          })} */}
        </Box>
        <Box>
          <Typography variant="h5" className="cardHeading" sx={{ marginBottom: '30px' }}>
            Подразделения
          </Typography>
          {isResult ? (
            <Box className={style.infoMiniCardContainer}>
              <InfoMiniCard
                avatarSrc="user.jpg"
                position="Арт-директор"
                fullname="Иван иванов"
                nickname="@vanyavanya"
                breadCrumbs={[
                  { url: 'test', title: 'test' },
                  { url: 'test', title: 'test' },
                  { url: 'test', title: 'test' },
                ]}></InfoMiniCard>
              <InfoMiniCard
                avatarSrc="user.jpg"
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
function useValue(
  employeesData: {
    availability: string;
    city: string;
    department: string;
    email: string;
    id: number;
    name: string;
    nickname: string;
    photoUrl: null;
    project: string;
    role: string;
    skills: string[];
    team: string;
    timezone: string;
    workHours: string;
  }[]
): { get: any; set: any } {
  throw new Error('Function not implemented.');
}
