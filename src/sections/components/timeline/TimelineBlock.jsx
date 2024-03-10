import OpenArrow from "../../../assets/icons/OpenArrow.svg";
import PropTypes from "prop-types";

export default function TimelineBlock({ className = "", children, link }) {
	return (
		<a
			className={`block w-full h-fit min-h-8 px-2 py-0.5 relative rounded-md ${className}`}
			href={link}
		>
			<span>{children}</span>
			<span className="h-full pt-2 pl-1 pr-0.5 aspect-square absolute bottom-0 right-0">
			<img
				className="h-full"
				src={OpenArrow}
				alt="Open"
			/>
			</span>
		</a>
	);
}

TimelineBlock.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	link: PropTypes.string.isRequired,
};