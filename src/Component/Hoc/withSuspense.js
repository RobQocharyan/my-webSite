import React, { Suspense } from "react";
import Preloader from "../Common/Preloader/Preloader";

// export const withSuspense = (Component) => {
//   return (props) => {
//     return (
//       <Suspense fallback={<Preloader />}>
//         <Component {...props} />
//       </Suspense>
//     );
//   };
// };

export const withSuspense = (WrappedComponent, FallbackComponent = null) => {
	return class extends React.Component {
		render() {
			return (
				<React.Suspense fallback={FallbackComponent}>
					<WrappedComponent {...this.props} />
				</React.Suspense>
			);
		}
	};
};