"use client";

import Link from "next/link";
import React from "react";
import "./Footer.scss";
import Icon from "../Icon/Icon";

const navLink = [
	{
		id: 1,
		label: "aaa",
		link: "sell",
	},
	{
		id: 2,
		label: "aaa",
		link: "buy",
	},
	{
		id: 3,
		label: "aaa",
		link: "aaa",
	},
	{
		id: 4,
		label: "More",
		link: "more",
	},
];

function Footer() {
	return (
		<section className="footer-section">
			<div className="container footer">
				<div className="row">
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-4">
								<ul>
									<li>
										<Link href="">aaa</Link>
									</li>
									<li>
										<Link href="">aaa</Link>
									</li>
									<li>
										<Link href="">aaa</Link>
									</li>
									<li>
										<Link href="">aaa</Link>
									</li>
									<li>
										<Link href="">aaa</Link>
									</li>
									<li>
										<Link href="">aaa</Link>
									</li>
								</ul>
							</div>
							<div className="col-md-4">
								<ul>
									<li>
										<Link href="">bbb</Link>
									</li>
									<li>
										<Link href="">bbb</Link>
									</li>
									<li>
										<Link href="">bbb</Link>
									</li>
									<li>
										<Link href="">bbb</Link>
									</li>
									<li>
										<Link href="">bbb</Link>
									</li>
									<li>
										<Link href="">bbb</Link>
									</li>
								</ul>
							</div>
							<div className="col-md-4">
								<ul>
									<li>
										<Link href="">aaa</Link>
									</li>
									<li>
										<Link href="">aaa bbb ccc ddd</Link>
									</li>
									<li>
										<Link href="">bbb</Link>
									</li>
									<li>
										<Link href="">ddd</Link>
									</li>
									<li>
										<Link href="">rrr</Link>
									</li>
									<li>
										<Link href="">fff</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-4">
								<ul>
									<li>
										<Link href="">bbb</Link>
									</li>
									<li>
										<Link href="">bbb</Link>
									</li>
									<li>
										<Link href="">bbb</Link>
									</li>
									<li>
										<Link href="">bbb</Link>
									</li>
									<li>
										<Link href="">bbb</Link>
									</li>
									<li>
										<Link href="">bbb</Link>
									</li>
								</ul>
							</div>
							<div className="col-md-8">
								<ul>
									<li>
										<Link href="">Contact us</Link>
									</li>
									<li>
										<Link href="">bbb</Link>
									</li>
									<li>
										<Link href="">bbb</Link>
									</li>
									<li>
										<Link href="">bbb</Link>
									</li>
									<li>
										<Link href="">bbb</Link>
									</li>
									<li>
										<Link href="">bbb</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container copy-right">
				<p>Copyright © 2022 HR Limited. All rights reserved </p>
			</div>
		</section>
	);
}

export default Footer;
