"use client";

import Link from "next/link";
import React from "react";
import "./Navbar.scss";
import Icon from "../Icon/Icon";
import {
	ABOUT_US,
	CONTACT,
	HOME,
	MORE,
	SERVICES,
} from "@constants/internal-routes.contants";

const navLink = [
	{
		id: 1,
		label: "Contact",
		link: CONTACT,
	},
	{
		id: 2,
		label: "About us",
		link: ABOUT_US,
	},
	{
		id: 3,
		label: "Services",
		link: SERVICES,
	},
	{
		id: 4,
		label: "More",
		link: MORE,
	},
];

function Navbar() {
	return (
		<section className="header-section">
			<div className="container main-nav">
				<div className="navbar d-flex justify-content-between">
					<div className="left-nav d-flex">
						<div className="logo">
							<Link href={HOME}>Logo</Link>
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
							<input
								type="search"
								className="form-control form-control-sm w-100 rounded"
								placeholder="Search..."
							/>
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
