import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import Button from '@mui/material/Button';
//user600677811LOLYOUUU
import {
  CONTACTS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  appRoutes,
} from './Routes/routes';
import {
  logOutUser,
  refreshUser,
  selectUserAuthentication,
  selectUserData,
} from 'redux/authReducer';
import { Box, Container, Grid, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
const NotFoundPage = lazy(() => import('pages/NotFound'));
export const App = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectUserAuthentication);
  const userData = useSelector(selectUserData);
  const linkStyle =  {
  display:"flex",textDecoration: 'none', width:"150px", height: "20px",color:"white", justifyContent:"center", fontWeight: "700", fontSize:"20px"
}
  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box component="nav" sx={{
           display:"flex",  marginBottom: '20px',
            backgroundColor: "#1976d2", width:"100%", height:"35px", 
            justifyContent: "center",
            padding:"0px 10px"
            }}>
          <Grid>
            <NavLink
              style={linkStyle}
              to={HOME_ROUTE}
            >
              Home
            </NavLink>
          </Grid>
          {authenticated ? (
            <>
              <Grid>
                <NavLink
                  style={linkStyle}
                  to={CONTACTS_ROUTE}
                >
                  Phonebook
                </NavLink>
              </Grid>
              <Typography variant="p" gutterBottom sx={{width: "200px",  
              height:"30px", 
              color:"white", 
              display: "flex", 
              justifyContent:"center",
              alignItems:"center"
              }}>Hello, {userData.name}</Typography>
              <Button
                sx={{
                  backgroundColor: 'yellow',
                  color: 'black',
                  ':hover': { backgroundColor: '#ECEC38' },
                }}
                onClick={handleLogOut}
                endIcon={<LogoutIcon />}
              >
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Grid>
                <NavLink
                  style={linkStyle}
                  to={LOGIN_ROUTE}
                >
                  Login
                </NavLink>
              </Grid>
              <Grid>
                <NavLink
                  style={linkStyle}
                  to={REGISTER_ROUTE}
                >
                  Register
                </NavLink>
              </Grid>
            </>
          )}
        </Box>
      </Container>
      <main>
        <Suspense fallback={<p>Loading data, please, wait...</p>}>
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
