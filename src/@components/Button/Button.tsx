"use client";
import React, { useEffect, useState } from "react";

type Sizes = "sm" | "lg" | "default";
type Colors = "primary" | "secondary" | "danger";
type Variants = "fill" | "outline" | "none";
type Types = "button" | "reset" | "submit";
type W = 25 | 50 | 75 | 100;
type Radius = "none" | "default" | "rounded";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	color?: Colors;
	size?: Sizes;
	variant?: Variants;
	className?: string;
	children: any;
	style?: object;
	w?: W;
	type?: Types;
	radius?: Radius;
}

const Button = ({
	color = "primary",
	size = "default",
	variant = "none",
	radius = "default",
	className,
	style,
	children,
	w,
	type = "button",
	...rest
}: IButtonProps) => {
	const [classNames, setClassNames] = useState<string>("");
	useEffect(() => {
		let tempClass = "btn_" + variant + " btn_" + color + " btn_" + radius;
		tempClass += w ? " w-" + w : "";
		tempClass += size === "default" ? " btn" : " btn_" + size;
		tempClass += " " + className;
		setClassNames(tempClass);
	}, []);

	return (
		<button style={style} type={type} {...rest} className={classNames}>
			{children}
		</button>
	);
};

export default Button;
