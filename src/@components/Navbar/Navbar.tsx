"use client";

import Link from "next/link";
import React from "react";
import "./Navbar.scss";
import logo from "../../assets/images/logo.png";
import Icon from "../Icon/Icon";

const navLink = [
	{
		id: 1,
		label: "Contact",
		link: "/contact",
	},
	{
		id: 2,
		label: "About us",
		link: "/about-us",
	},
	{
		id: 3,
		label: "Services",
		link: "/services",
	},
	{
		id: 4,
		label: "More",
		link: "more",
	},
];

function Navbar() {
	return (
		<section className="header-section">
			<div className="container main-nav">
				<div className="navbar d-flex justify-content-between">
					<div className="left-nav d-flex">
						<div className="logo">
							<Link href="/">
								{/* <img src={logo} alt="logo" /> */}
								logo
							</Link>
						</div>
						<ul className="menu">
							{navLink.map((item, index) => {
								return (
									<li key={index}>
										<Link href={item.link}>{item.label}</Link>
									</li>
								);
							})}
						</ul>
						<div className="search-section">
							<Icon icon="search" /> Search
						</div>
					</div>
					<div className="right-nav d-flex">
						<ul>
							<li className="location">
								<Link href="">
									<Icon icon="location_on" /> Dhaka
								</Link>
							</li>
							<li>
								<Link href="">
									<Icon icon="person" />
								</Link>
							</li>
							<li>
								<Link href="">
									<Icon icon="shopping_cart" />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Navbar;
