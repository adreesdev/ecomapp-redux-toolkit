import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDetails } from "../../features/products/detailSlice";
import { Button, Container, Grid, Typography, Paper, Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { addtoCart } from "../../features/cart/cartSlice";

const ProductDetails = () => {
	let { id } = useParams();
	const dispatch = useDispatch();
	dispatch(setDetails(id));

	const { details } = useSelector((state) => state.details);
	function ImageCarousel({ src }) {
		return (
			<Paper>
				<img src={src} alt="carousel" width="100%" />
			</Paper>
		);
	}
	const addtocart = () => {
		let cartItem = { ...details, quantity: 1 };
		dispatch(addtoCart({ cartItem }));
	};
	return (
		<>
			{details ? (
				<Container>
					<Box width="100%" py={3}>
						<Typography variant="h2">Product Details</Typography>
						<Grid container py={5} spacing={2}>
							<Grid item xs={12} sm={12} md={6}>
								<Box
									sx={{
										width: "100%",
										maxWidth: "500px",
									}}
								>
									<Carousel>
										{details.images.map((src, i) => (
											<ImageCarousel key={i} src={src} />
										))}
									</Carousel>
								</Box>
							</Grid>
							<Grid item xs={12} sm={12} md={6}>
								<Typography variant="h3">{details.name}</Typography>
								<Typography variant="h6">{details.category}</Typography>
								<Typography variant="h5" py={3}>
									Price: {details.price}
								</Typography>
								<Button
									size="lg"
									variant="contained"
									color="warning"
									onClick={addtocart}
								>
									Add to Cart
								</Button>
							</Grid>
						</Grid>
						<Typography variant="h3">Description</Typography>
						<Typography variant="p">{details.description}</Typography>
					</Box>
				</Container>
			) : (
				"Loading..."
			)}
		</>
	);
};

export default ProductDetails;
