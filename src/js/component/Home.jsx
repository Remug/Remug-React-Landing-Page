import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const App = () => {
	return (
		<Fragment>
			<Navbar />
			<Jumbotron />
			<div className="d-flex m-auto ms-5 me-5 mb-5 row m-5 justify-content-center align-items-center">
				<Card 
					img="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/one-piece-wanted-poster-shanks-niklas-andersen.jpg"
					title='"Akagami" Shanks' 
					description="This is a description of the first card"
					button="Find out More!"
				/>
				<Card
					img="https://ih1.redbubble.net/image.4576716561.8266/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg"
					title='"Mugiwara" Luffy'
					description="This is a description of the second card"
					button="Find out More!"
				/>
				<Card
					img="https://kokohai.com/wp-content/uploads/2023/06/recompensa-buggy-one-piece_clipdrop-enhance.jpg"
					title='The Star Clown" Buggy'
					description="This is a description of the third card"
					button="Find out More!"
				/>
				<Card
					img="https://i.pinimg.com/736x/52/f1/4c/52f14cb0cb55844c42ed678b2c9c7799.jpg"
					title='"Kurohige" Teach'
					description="This is a description of the fourth card"
					button="Find out More!"
				/>
			</div>
			<Footer className="mt-auto" />
		</Fragment>
	)
};

export default App;