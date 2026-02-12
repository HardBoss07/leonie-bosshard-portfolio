import dynamic from 'next/dynamic';
import { LucideProps } from 'lucide-react';

interface TestIconProps extends LucideProps {
  // No name prop needed for this direct test
}

const DynamicFigma = dynamic(() => import('lucide-react').then(mod => mod.Figma), {
  ssr: false,
  loading: () => <div>Loading Figma...</div>,
});

const TestIcon: React.FC<TestIconProps> = (props) => {
  return <DynamicFigma {...props} />;
};

export default TestIcon;
