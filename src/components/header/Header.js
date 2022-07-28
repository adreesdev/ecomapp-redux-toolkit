import * as React from "react";
import {
	AppBar,
	Box,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const navItems = [
	{
		title: "Home",
		link: "/",
	},
	{
		title: "Mens",
		link: "/mens-shoes",
	},
	{
		title: "Womens",
		link: "/womens-shoes",
	},
	{
		title: "Kids",
		link: "/kids-shoes",
	},
	{
		title: "Cart",
		link: "/cart",
	},
];

function DrawerAppBar(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				Shoe Store
			</Typography>
			<Divider />
			<List>
				{navItems.map((item, index) => (
					<ListItem key={index} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText>
								<Link
									to={item.link}
									style={{
										color: "inherit",
										textDecoration: "none",
									}}
								>
									{item.title}
								</Link>
							</ListItemText>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<>
			<Box sx={{ display: "flex" }}>
				<AppBar component="nav">
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: "none" } }}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
						>
							Shoe Store
						</Typography>
						<Box
							sx={{
								display: { xs: "none", sm: "block" },
							}}
						>
							{navItems.map((item, index) => (
								<Link
									key={index}
									to={item.link}
									style={{
										color: "#fff",
										textDecoration: "none",
										padding: "1.2rem",
										fontSize: "1.2rem",
									}}
								>
									{item.title}
								</Link>
							))}
						</Box>
					</Toolbar>
				</AppBar>
				<Box component="nav">
					<Drawer
						container={container}
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true,
						}}
						sx={{
							display: { xs: "block", sm: "none" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
							},
						}}
					>
						{drawer}
					</Drawer>
				</Box>
			</Box>
			<Toolbar />
		</>
	);
}

export default DrawerAppBar;
