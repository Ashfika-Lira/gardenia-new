import React from 'react';

const Navigation = () => {
    return (
        <div>
           setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Navbar
      className="px-4 navigation-bar-main"
      collapseOnSelect
      expand="lg"
      // bg="light"
      variant="light"
    >
      <Navbar.Brand as={HashLink} to="/Home">
        Groceries Shop
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Dropdown>
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              Grocery
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={HashLink} to="/home">
                Grocery
              </Dropdown.Item>
              <Dropdown.Item as={HashLink} to="/bags">
                Bags
              </Dropdown.Item>
              <Dropdown.Item as={HashLink} to="/furniture">
                Furniture
              </Dropdown.Item>
              <Dropdown.Item as={HashLink} to="/bakery">
                Bakery
              </Dropdown.Item>
              <Dropdown.Item as={HashLink} to="/mackUp">
                Mack up
              </Dropdown.Item>
              <Dropdown.Item as={HashLink} to="/cloths">
                Cloths
              </Dropdown.Item>
              <Dropdown.Item as={HashLink} to="/dailyNeeds">
                Daily Needs
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <Nav>
          <Nav.Link as={HashLink} to="/shops">
            Shops
          </Nav.Link>
          <Nav.Link as={HashLink} to="/offers">
            Offers
          </Nav.Link>
          <Nav.Link as={HashLink} to="/FQA">
            FQA
          </Nav.Link>
          <Nav.Link as={HashLink} to="/Contact">
            Contact
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>
            <Box>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu}>
                  <Avatar alt="Tofazzal" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "50px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting}>
                    <Typography as={HashLink} to={setting} textAlign="center">
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
                <MenuItem>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
        </div>
    );
};

export default Navigation;