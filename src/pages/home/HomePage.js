import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import menShoe from "../../assets/images/mens.png";
import womenShoe from "../../assets/images/women.png";
import kidShoe from "../../assets/images/kid.png";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<>
			<Container
				sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
			>
				<Typography variant="h2" py={4}>
					Welcome to the Shoes Store!
				</Typography>
				<Grid container spacing={2} py={4}>
					<Grid item xs={12} sm={12} md={4}>
						<Link to="/mens-shoes">
							<Box
								sx={{
									position: "relative",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<img src={menShoe} alt="mens" width="100%" />

								<Box
									sx={{
										position: "absolute",
										backgroundColor: "rgba(0,0,0,0.3)",
										width: "100%",
										height: "100%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<Typography variant="h3" color="#fff">
										Men
									</Typography>
								</Box>
							</Box>
						</Link>
					</Grid>
					<Grid item xs={12} sm={12} md={4}>
						<Link to="/womens-shoes">
							<Box
								sx={{
									position: "relative",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<img src={womenShoe} alt="womens" width="100%" />

								<Box
									sx={{
										position: "absolute",
										backgroundColor: "rgba(0,0,0,0.3)",
										width: "100%",
										height: "100%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<Typography variant="h3" color="#fff">
										Women
									</Typography>
								</Box>
							</Box>
						</Link>
					</Grid>
					<Grid item xs={12} sm={12} md={4}>
						<Link to="/kids-shoes">
							<Box
								sx={{
									position: "relative",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<img src={kidShoe} alt="kids" width="100%" />

								<Box
									sx={{
										position: "absolute",
										backgroundColor: "rgba(0,0,0,0.3)",
										width: "100%",
										height: "100%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<Typography variant="h2" color="#fff">
										Kids
									</Typography>
								</Box>
							</Box>
						</Link>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default HomePage;
