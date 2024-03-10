import CheckIcon from "../../assets/icons/Check.svg";
import PropTypes from "prop-types";
import "./CheckBox.css";

export default function CheckBox({ children }) {
	return (
		<label className="w-full flex flex-row items-center gap-3 cursor-pointer">
			<div className="inline-block my-0.5">
				<input
					className="w-6 h-6 p-1 rounded hidden li-check-box"
					type="checkbox"
				/>
				<span
					className="inline-block w-8 h-8 bg-white border-2 rounded cursor-pointer"
				>
					<span className="flex w-full h-full items-center justify-center">
						<img
							className="inline-block check-icon"
							alt="✓"
							src={CheckIcon}
						/>
					</span>
				</span>
			</div>
			<span className="text-xl">
				{children}
			</span>
		</label>
	);
}

CheckBox.propTypes = {
	children: PropTypes.node.isRequired,
};