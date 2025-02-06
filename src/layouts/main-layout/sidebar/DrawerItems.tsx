import { useState, useEffect } from 'react';
import { fontFamily } from 'theme/typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import ListItem from './list-items/ListItem';
import CollapseListItem from './list-items/CollapseListItem';
import Image from 'components/base/Image';
import LogoImg from 'assets/images/uep-logo.png';
import getSitemap from 'routes/sitemap';

type UserRole = 'MainAdmin' | 'Admin';

const DrawerItems = () => {
  const [role, setRole] = useState<UserRole>('Admin'); // Default role

  useEffect(() => {
    const storedRole = localStorage.getItem('role') as UserRole | null; // Type assertion
    setRole(storedRole ?? 'Admin'); // Fallback to 'user' if no role is found

    console.log(storedRole); 
  }, []);

  const sitemap = getSitemap(role); // Get sitemap based on role

  return (
    <>
      <Stack
        pt={5}
        pb={3.5}
        px={4.5}
        position="sticky"
        top={0}
        bgcolor="info.light"
        alignItems="center"
        justifyContent="flex-start"
        borderBottom={1}
        borderColor="info.main"
        zIndex={1000}
      >
        <ButtonBase component={Link} href="/" disableRipple>
          <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginLeft: 4.5, marginTop: -2}}>
          <Image src={LogoImg} alt="logo" height={70} width={70} sx={{ mr: 1 }} />
            <Typography
              mt={2}
              variant="h3"
              color="uepBlue.main"
              textTransform="uppercase"
              letterSpacing={1}
              fontFamily={fontFamily.poppins}
            >
              EventHub
            </Typography>
            <Typography
              mt={-0.35}
              variant="body2"
              color="uepBlue.main"
              textTransform="uppercase"
              fontWeight={500}
              fontFamily={fontFamily.poppins}
            >
              Administrator
            </Typography>
          </Box>
        </ButtonBase>
      </Stack>

      <List component="nav" sx={{ mt: 1, mb: 10, px: 4.5 }}>
        {sitemap.map((route) =>
          route.items ? (
            <CollapseListItem key={route.id} {...route} />
          ) : (
            <ListItem key={route.id} {...route} />
          ),
        )}
      </List>
    </>
  );
};

export default DrawerItems;
