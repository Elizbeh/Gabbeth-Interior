import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'; 
import { Link } from 'react-router-dom';
import categories from '../categories';
import './Home.css';

function Home() {
	return (
	  	<div>
	  		  <img src="https://cdn5.f-cdn.com/contestentries/924602/15553768/5874e4228a31f_thumb900.jpg" className="home-banner"/>
			    <div className="featured-products-container container mt-4">
				      <h2>Last Products</h2>
			        {/*last products here */}
				      <div>
					   	    <Link to="/category/all" style={{textAlign: "right", display: "block", textDecoration: "none"}}>
						          See more {">>"}
			  		      </Link>
				       </div>
		  	  </div>
			    {/* sale banner */}
      	  <div className="sale__banner--container mt-4">
				      <img src ="https://img.freepik.com/premium-vector/african-american-woman-choosing-goods-laptop-online-shopping-black-friday-big-sale-holiday-discounts-concept-living-room-interior-copy-space_48369-34012.jpg?size=626&ext=jpg&ga=GA1.2.372041899.1675040848&semt=ais" alt="Sale Banner"/>
			    </div>
			    <div className="recent-products-container container mt-4">
				      <h2>Categories</h2>
				      <Row>
					        {categories.map((category) => (
						          <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
								          <Col md={4}>
						  	              <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: "10px",}} className="category-tile">
							  	              {category.name}
						  	              </div>
					  		          </Col>
				  	          </LinkContainer>
	        				))}
				      </Row>
		     	</div>
	    </div>
  );
}



export default Home;