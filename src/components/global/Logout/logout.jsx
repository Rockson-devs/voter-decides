// import * as React from 'react';
// import Button from '@mui/material/Button';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
// import Grow from '@mui/material/Grow';
// import Paper from '@mui/material/Paper';
// import Popper from '@mui/material/Popper';
// import MenuItem from '@mui/material/MenuItem';
// import MenuList from '@mui/material/MenuList';
// import Stack from '@mui/material/Stack';

// export default function MenuListComposition() {
//   const [open, setOpen] = React.useState(false);
//   const anchorRef = React.useRef<HTMLButtonElement>(null);

//   const handleToggle = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   const handleClose = (event: Event | React.SyntheticEvent) => {
//     if (
//       anchorRef.current &&
//       anchorRef.current.contains(event.target as HTMLElement)
//     ) {
//       return;
//     }

//     setOpen(false);
//   };

//   function handleListKeyDown(event: React.KeyboardEvent) {
//     if (event.key === 'Tab') {
//       event.preventDefault();
//       setOpen(false);
//     } else if (event.key === 'Escape') {
//       setOpen(false);
//     }
//   }

//   // return focus to the button when we transitioned from !open -> open
//   const prevOpen = React.useRef(open);
//   React.useEffect(() => {
//     if (prevOpen.current === true && open === false) {
//       anchorRef.current!.focus();
//     }

//     prevOpen.current = open;
//   }, [open]);

//   return (
//     <Stack direction="row" spacing={2}>
//       <Paper>
//         <MenuList>
//           <MenuItem>Profile</MenuItem>
//           <MenuItem>My account</MenuItem>
//           <MenuItem>Logout</MenuItem>
//         </MenuList>
//       </Paper>
//       <div>
//         <Button
//           ref={anchorRef}
//           id="composition-button"
//           aria-controls={open ? 'composition-menu' : undefined}
//           aria-expanded={open ? 'true' : undefined}
//           aria-haspopup="true"
//           onClick={handleToggle}
//         >
//           Dashboard
//         </Button>
//         <Popper
//           open={open}
//           anchorEl={anchorRef.current}
//           role={undefined}
//           placement="bottom-start"
//           transition
//           disablePortal
//         >
//           {({ TransitionProps, placement }) => (
//             <Grow
//               {...TransitionProps}
//               style={{
//                 transformOrigin:
//                   placement === 'bottom-start' ? 'left top' : 'left bottom',
//               }}
//             >
//               <Paper>
//                 <ClickAwayListener onClickAway={handleClose}>
//                   <MenuList
//                     autoFocusItem={open}
//                     id="composition-menu"
//                     aria-labelledby="composition-button"
//                     onKeyDown={handleListKeyDown}
//                   >
//                     <MenuItem onClick={handleClose}>Profile</MenuItem>
//                     <MenuItem onClick={handleClose}>My account</MenuItem>
//                     <MenuItem onClick={handleClose}>Logout</MenuItem>
//                   </MenuList>
//                 </ClickAwayListener>
//               </Paper>
//             </Grow>
//           )}
//         </Popper>
//       </div>
//     </Stack>
//   );
// }

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Avatar from "@mui/material/Avatar";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Tooltip from "@mui/material/Tooltip";
// import PersonAdd from "@mui/icons-material/PersonAdd";
// import Settings from "@mui/icons-material/Settings";
// import Logout from "@mui/icons-material/Logout";

// export default function AccountMenu() {
//   const [anchorEl, setAnchorEl] =
//     (React.useState < null) | (HTMLElement > null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   return (
//     <React.Fragment>
//       <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
//         <Typography sx={{ minWidth: 100 }}>Contact</Typography>
//         <Typography sx={{ minWidth: 100 }}>Profile</Typography>
//         <Tooltip title="Account settings">
//           <IconButton
//             onClick={handleClick}
//             size="small"
//             sx={{ ml: 2 }}
//             aria-controls={open ? "account-menu" : undefined}
//             aria-haspopup="true"
//             aria-expanded={open ? "true" : undefined}
//           >
//             <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
//           </IconButton>
//         </Tooltip>
//       </Box>
//       <Menu
//         anchorEl={anchorEl}
//         id="account-menu"
//         open={open}
//         onClose={handleClose}
//         onClick={handleClose}
//         PaperProps={{
//           elevation: 0,
//           sx: {
//             overflow: "visible",
//             filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
//             mt: 1.5,
//             "& .MuiAvatar-root": {
//               width: 32,
//               height: 32,
//               ml: -0.5,
//               mr: 1,
//             },
//             "&:before": {
//               content: '""',
//               display: "block",
//               position: "absolute",
//               top: 0,
//               right: 14,
//               width: 10,
//               height: 10,
//               bgcolor: "background.paper",
//               transform: "translateY(-50%) rotate(45deg)",
//               zIndex: 0,
//             },
//           },
//         }}
//         transformOrigin={{ horizontal: "right", vertical: "top" }}
//         anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
//       >
//         <MenuItem onClick={handleClose}>
//           <Avatar /> Profile
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <Avatar /> My account
//         </MenuItem>
//         <Divider />
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <PersonAdd fontSize="small" />
//           </ListItemIcon>
//           Add another account
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <Settings fontSize="small" />
//           </ListItemIcon>
//           Settings
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <Logout fontSize="small" />
//           </ListItemIcon>
//           Logout
//         </MenuItem>
//       </Menu>
//     </React.Fragment>
//   );
// }

// import * as React from "react";
// import { useState } from "react";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { links } from "../../../data/constituencies";

// const options = [
//   "None",
//   "Atria",
//   "Callisto",
//   "Dione",
//   "Ganymede",
//   "Hangouts Call",
//   "Luna",
//   "Oberon",
//   "Phobos",
//   "Pyxis",
//   "Sedna",
//   "Titania",
//   "Triton",
//   "Umbriel",
// ];

// const ITEM_HEIGHT = 48;

// const Logout = () => {
//   //   const [anchorEl, setAnchorEl] = useState(null)
//   //   const open = Boolean(anchorEl);
//   const handleClick = (e) => {
//     e.preventDefault;
//   };
//   //   const handleClose = () => {
//   //     setAnchorEl(null);
//   //   };

//   return (
//     <div>
//       <IconButton
//         aria-label="more"
//         id="long-button"
//         // aria-controls={open ? "long-menu" : undefined}
//         // aria-expanded={open ? "true" : undefined}
//         aria-haspopup="true"
//         onClick={handleClick}
//         color="primary"
//       >
//         <MoreVertIcon />
//       </IconButton>
//       <Menu
//         id="long-menu"
//         MenuListProps={{
//           "aria-labelledby": "long-button",
//         }}
//         // anchorEl={anchorEl}
//         // open={open}
//         // onClose={handleClose}
//         PaperProps={{
//           style: {
//             maxHeight: ITEM_HEIGHT * 4.5,
//             width: "20ch",
//           },
//         }}
//       >
//         {options.map((option) => (
//           <MenuItem
//             key={option}
//             selected={option === "Pyxis"}
//             // onClick={handleClose}
//           >
//             {option}
//           </MenuItem>
//         ))}
//       </Menu>
//     </div>
//   );
// };

// export default Logout;

// const Logout = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const handleMenu = () => setToggleMenu(!toggleMenu);

//   return (
//     <div id="navbar">
//       {/* <IconButton /> */}

//       <button type="button" className="navbar-toggler-btn" onClick={handleMenu}>
//         <MoreVertIcon />
//       </button>
//       <div
//         className={
//           toggleMenu
//             ? "navbar-collapse show-navbar-collapse"
//             : "navbar-collapse"
//         }
//       >
//         <ul className="navbar-nav">
//           {links.map((link) => {
//             const { id, url, text } = link;
//             return (
//               <li key={id} className="nav-item">
//                 <a href={url} className="nav-link">
//                   {text}
//                 </a>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Logout;
