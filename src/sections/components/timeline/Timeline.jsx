import TickMarker from "./TickMarker.jsx";
import TimelineBlock from "./TimelineBlock.jsx";
import PropTypes from "prop-types";

export default function Timeline({ setShowCards }) {
	return (
		<div className="w-full px-8">
			<div className="w-full bg-slate-200 pb-2 scrollbar-hidden overflow-x-auto">
				<section className="grid gap-y-1 grid-cols-[repeat(30,minmax(120px,1fr))]">
					<TickMarker label="Start"/>
					{Array(28).fill(0).map((_, i) => (
						<TickMarker
							label={5 * (i + 1)}
							key={i}
						/>
					))}
					<TickMarker label="145" labelEnd="End"/>

					<TimelineBlock
						className="row-start-2 col-start-1 col-span-3	 bg-pink-300"
						link="#"
						onClick={() => setShowCards(true)}
					>
						Boil Potatoes
					</TimelineBlock>
					<TimelineBlock
						className="ml-1 row-start-2 col-start-4 col-span-1 bg-pink-300"
						link="#"
					>
						Strain
					</TimelineBlock>
					<TimelineBlock
						className="ml-2 row-start-2 col-start-5 col-span-2 bg-pink-300"
						link="#"
					>
						Mash Potatoes
					</TimelineBlock>

					<TimelineBlock
						className="row-start-3 col-start-2 col-span-2 bg-green-400"
						link="#"
					>
						Season Steak
					</TimelineBlock>
					<TimelineBlock
						className="ml-1 row-start-3 col-start-4 col-span-3 bg-green-400"
						link="#"
					>
						Sear Steak
					</TimelineBlock>
				</section>
			</div>
		</div>
	)
}

Timeline.propTypes = {
	setShowCards: PropTypes.func
};