import { Home, Star } from "lucide-react";
import Index from "./pages/Index.jsx";
import Astrology from "./pages/Astrology.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Astrology",
    to: "/astrology",
    icon: <Star className="h-4 w-4" />,
    page: <Astrology />,
  },
];
