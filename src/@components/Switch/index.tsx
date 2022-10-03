import React from "react";

interface ISwithProps {
	label?: string | JSX.Element;
	checkedTitle?: string;
	unCheckedTitle?: string;
	registerProperty?: any;
	defaultChecked?: boolean;
	disabled?: boolean;
	isChecked?: boolean;
	onChange?: Function;
}

function Switch({
	label,
	checkedTitle,
	unCheckedTitle,
	registerProperty,
	defaultChecked,
	disabled = false,
	isChecked,
	onChange,
}: ISwithProps) {
	return (
		<div className="switch_component d-flex justify-content-between align-items-center">
			{label &&
				(typeof label === "string" ? (
					<label className={`${disabled ? "disabled" : ""}`}>{label}</label>
				) : (
					<>{label}</>
				))}
			<div className="form-switch">
				<input
					disabled={disabled}
					className="form-check-input"
					type="checkbox"
					checked-value={checkedTitle}
					unchecked-value={unCheckedTitle}
					defaultChecked={defaultChecked}
					checked={isChecked}
					onChange={onChange}
					{...registerProperty}
				/>
			</div>
		</div>
	);
}

export default Switch;
