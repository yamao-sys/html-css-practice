import { createBrowserRouter } from 'react-router-dom';
import { Responsive } from '../pages/lesson1/Responsive';
import { FluidImage } from '../pages/lesson1/FluidImage';
import { Flex } from '../pages/lesson1/Flex';
import { FlexWithParentPadding } from '../pages/lesson1/FlexWithParentPadding';
import { MediaQuery } from '../pages/lesson2/MediaQuery';
import { GradualMediaQuery } from '../pages/lesson2/GradualMediaQuery';
import { AdaptiveLayout } from '../pages/lesson2/AdaptiveLayout';
import { Block1 } from '../pages/lesson2/Block1';
import { Flex1 } from '../pages/lesson2/Flex1';
import { Flex2 } from '../pages/lesson2/Flex2';
import { Flex3 } from '../pages/lesson2/Flex3';
import { Gap } from '../pages/lesson2/Gap';
import { PaddingTopHackAspect } from '../pages/lesson6/PaddingTopHackAspect';

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
	{
		path: '/block1',
		element: <Block1 />,
	},
	{
		path: '/flex1',
		element: <Flex1 />,
	},
	{
		path: '/flex2',
		element: <Flex2 />,
	},
	{
		path: '/flex3',
		element: <Flex3 />,
	},
	{
		path: '/gap',
		element: <Gap />,
	},
	{
		path: '/padding_top_hack_aspect',
		element: <PaddingTopHackAspect />,
	},
]);
