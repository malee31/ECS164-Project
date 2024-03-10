import PropTypes from "prop-types";

export default function TickMarker({ label, labelEnd }) {
	return (
		<div className="w-full h-16 relative bg-white">
			<div className="w-2 h-6 bg-black absolute bottom-0 left-0">
				<span className="relative inline-block bottom-full">
					{label}
				</span>
			</div>
			{labelEnd && (
				<div className="w-2 h-6 bg-black absolute bottom-0 right-0">
					<span className="relative inline-block bottom-full">
						{labelEnd}
					</span>
				</div>
			)}

			{/* Black Line */}
			<div className="w-full h-2 bg-black absolute bottom-2">
				<div className="w-2 h-full absolute right-0"/>
			</div>
		</div>
	)
}

TickMarker.propTypes = {
	label: PropTypes.string.isRequired,
	labelEnd: PropTypes.string,
};