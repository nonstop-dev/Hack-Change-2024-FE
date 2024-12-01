'use client';
import styles from './subdivisions.module.scss';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Card, CardContent, Tab, Tabs } from '@mui/material';
import InfoMiniCard from '../info-mini-card/info-mini-card';

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [expandedChild, setChildExpanded] = React.useState<string | false>(false);
  const [parentTabValue, setParentTabValue] = React.useState(0);
  const [childTabValue, setChildTabValue] = React.useState(0);

  const handleAccordeonChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChildAccordeonChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setChildExpanded(isExpanded ? panel : false);
  };

  const handleParentTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setParentTabValue(newValue);
  };

  const handleChildTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setChildTabValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ marginBottom: '40px' }}>
        <Typography className={styles.pageHeader}>Подразделения</Typography>
        <Card sx={{ minWidth: 275 }} className={styles.contacts + ' defaultCard'}>
          <CardContent sx={{ padding: '0 !important', height: '100%' }}>
            <Box className={styles.subdivisionsHeading}>
              <Typography variant="h5" className="cardHeading" sx={{ marginBottom: '40px' }}>
                Руководитель
              </Typography>
              <InfoMiniCard
                avatarSrc="user.png"
                position="Председатель банка"
                fullname="Иван иванов"
                nickname="@vanyavanya"></InfoMiniCard>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={parentTabValue}
          onChange={handleParentTabChange}
          aria-label="basic tabs example"
          textColor="secondary"
          indicatorColor="secondary"
          variant="fullWidth">
          <Tab
            value={0}
            label={
              <React.Fragment>
                <Typography>Центральный офис</Typography>
              </React.Fragment>
            }></Tab>
          <Tab
            value={1}
            label={
              <React.Fragment>
                <Typography>Филиал в Оренбургской области</Typography>
              </React.Fragment>
            }
          />
          <Tab
            value={2}
            label={
              <React.Fragment>
                <Typography>Филиал в Волгоградской области</Typography>
              </React.Fragment>
            }
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={parentTabValue} index={0}>
        <div>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleAccordeonChange('panel1')}
            square={true}
            className="subdivisionsAccordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={expanded === 'panel1' ? styles.activeSelection : ''} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{ borderRadius: '16px' }}
              className={expanded === 'panel1' ? styles.activeSelection : ''}>
              <Typography>General settings</Typography>
              <Typography>Корпоративный блок</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Tabs
                value={childTabValue}
                onChange={handleChildTabChange}
                aria-label="basic tabs example"
                textColor="secondary"
                indicatorColor="secondary"
                variant="fullWidth">
                <Tab
                  value={0}
                  className={childTabValue === 0 ? styles.activeSelection : ''}
                  label={
                    <React.Fragment>
                      <Typography>Альберт кузнецов</Typography>
                    </React.Fragment>
                  }></Tab>
                <Tab
                  value={1}
                  className={childTabValue === 1 ? styles.activeSelection : ''}
                  label={
                    <React.Fragment>
                      <Typography>Александр семёнов</Typography>
                    </React.Fragment>
                  }
                />
                <Tab
                  value={2}
                  className={childTabValue === 2 ? styles.activeSelection : ''}
                  label={
                    <React.Fragment>
                      <Typography>Алина гусева</Typography>
                    </React.Fragment>
                  }
                />
              </Tabs>
              <CustomTabPanel value={childTabValue} index={0}>
                <Accordion
                  expanded={expandedChild === 'panelChild1'}
                  onChange={handleChildAccordeonChange('panelChild1')}
                  square={true}
                  className="subdivisionsAccordion">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>Розничный блок</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros
                      in elit. Pellentesque convallis laoreet laoreet.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CustomTabPanel>
              <CustomTabPanel value={childTabValue} index={1}>
                Item Two
              </CustomTabPanel>
              <CustomTabPanel value={childTabValue} index={2}>
                Item Three
              </CustomTabPanel>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            square={true}
            onChange={handleAccordeonChange('panel2')}
            className="subdivisionsAccordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
              className="subdivisionsAccordion">
              <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
              <Typography sx={{ color: 'text.secondary' }}>Users</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in
                elit. Pellentesque convallis laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={parentTabValue} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={parentTabValue} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
