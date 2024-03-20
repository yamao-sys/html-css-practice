import { createBrowserRouter } from 'react-router-dom';
import { Responsive } from '../pages/lesson1/Responsive';
import { FluidImage } from '../pages/lesson1/FluidImage';
import { Flex } from '../pages/lesson1/Flex';
import { FlexWithParentPadding } from '../pages/lesson1/FlexWithParentPadding';
import { MediaQuery } from '../pages/lesson2/MediaQuery';
import { GradualMediaQuery } from '../pages/lesson2/GradualMediaQuery';
import { AdaptiveLayout } from '../pages/lesson2/AdaptiveLayout';

export const router = createBrowserRouter([
	{
		path: '/responsive',
		element: <Responsive />,
	},
	{
		path: '/fluid_image',
		element: <FluidImage />,
	},
	{
		path: '/flex',
		element: <Flex />,
	},
	{
		path: '/flex_with_parent_padding',
		element: <FlexWithParentPadding />,
	},
	{
		path: '/media_query',
		element: <MediaQuery />,
	},
	{
		path: '/gradual_media_query',
		element: <GradualMediaQuery />,
	},
	{
		path: 'adaptive_layout',
		element: <AdaptiveLayout />,
	},
]);
