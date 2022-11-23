import { STATUS_CONSTANT } from "../@config/constants";

export const statusColorMapping = (
	status: string,
	color_type: "code" | "class" = "class"
) => {
	const isCode = color_type === "code";
	if (
		status === STATUS_CONSTANT.published ||
		status === STATUS_CONSTANT.completed ||
		status === STATUS_CONSTANT.paid ||
		status === STATUS_CONSTANT.standard
	)
		return isCode ? "#B7EB8F" : "success";
	if (
		status === STATUS_CONSTANT.delivered ||
		status === STATUS_CONSTANT.archived ||
		status === STATUS_CONSTANT.inactive ||
		status === STATUS_CONSTANT.starter
	)
		return isCode ? "#C5E0FF" : "primary";
	if (
		status === STATUS_CONSTANT.cancel ||
		status === STATUS_CONSTANT.failed ||
		status === STATUS_CONSTANT.unfulfilled
	)
		return isCode ? "#FFCCC7" : "danger";
	if (status === STATUS_CONSTANT.draft) return isCode ? "#F0F1F2" : "default";
	if (
		status === STATUS_CONSTANT.hold ||
		status === STATUS_CONSTANT.pending ||
		status === STATUS_CONSTANT.unpaid ||
		status === STATUS_CONSTANT.free ||
		status === STATUS_CONSTANT.basic
	)
		return isCode ? "#FFEC3D" : "warning";
	if (
		status === STATUS_CONSTANT.processing ||
		status === STATUS_CONSTANT.refunded ||
		status === STATUS_CONSTANT.return
	)
		return isCode ? "#F0F1F2" : "default";
	if (
		status === STATUS_CONSTANT.active ||
		status === STATUS_CONSTANT.shipping ||
		status === STATUS_CONSTANT.business ||
		status === STATUS_CONSTANT.premium
	)
		return isCode ? "#B5F5EC" : "info";

	return isCode ? "#F0F1F2" : "default";
};
