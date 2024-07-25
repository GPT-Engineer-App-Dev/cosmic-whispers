import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Welcome to AstroInsights</h1>
        <p className="text-xl text-muted-foreground">Discover what the stars have in store for you</p>
        <Button asChild>
          <Link to="/astrology">Get Your Daily Horoscope</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
