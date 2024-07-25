import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BirthChartDiagram from '@/components/BirthChartDiagram';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const zodiacSigns = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

const generateRealisticHoroscope = (sign) => {
  const horoscopes = {
    Aries: "Your energy is at its peak today, Aries. It's an excellent time to start new projects or take on challenges. Trust your instincts and be bold in your actions.",
    Taurus: "Focus on stability and comfort today, Taurus. It's a good day for financial planning and enjoying the simple pleasures of life. Your patience will be rewarded.",
    Gemini: "Your communication skills are heightened, Gemini. Use this to your advantage in both personal and professional relationships. Expect interesting conversations and new ideas.",
    Cancer: "Emotional connections are strong today, Cancer. It's a perfect time to nurture relationships and create a cozy atmosphere at home. Trust your intuition in personal matters.",
    Leo: "Your charisma is shining bright, Leo. Take the lead in group activities and don't be afraid to showcase your talents. Creative pursuits are especially favored.",
    Virgo: "Pay attention to details today, Virgo. Your analytical skills are sharp, making it an ideal time for problem-solving and organizing. Don't overlook your health and well-being.",
    Libra: "Harmony and balance are key themes for you today, Libra. Focus on diplomacy in your relationships and seek beauty in your surroundings. It's a good day for making important decisions.",
    Scorpio: "Your intuition is particularly strong, Scorpio. Delve deep into matters that interest you and don't be afraid of transformation. It's a powerful day for personal growth.",
    Sagittarius: "Adventure calls to you, Sagittarius. Expand your horizons through learning or travel, even if it's just in your mind. Your optimism will inspire those around you.",
    Capricorn: "Focus on your long-term goals today, Capricorn. Your discipline and practicality will serve you well. It's a good time for career planning and setting ambitious targets.",
    Aquarius: "Your innovative ideas are flowing freely, Aquarius. Embrace your uniqueness and think outside the box. Collaborative projects and humanitarian efforts are favored.",
    Pisces: "Your imagination and intuition are heightened, Pisces. It's an excellent day for creative pursuits and spiritual reflection. Pay attention to your dreams and inner voice."
  };

  return horoscopes[sign] || "Please select a valid zodiac sign.";
};

const Astrology = () => {
  const [selectedSign, setSelectedSign] = useState("");
  const [name, setName] = useState("");
  const [horoscope, setHoroscope] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [showChart, setShowChart] = useState(false);

  const generateHoroscope = () => {
    if (!name || !selectedSign || !birthDate || !birthTime || !birthPlace) {
      setHoroscope("Please fill in all the required fields.");
      return;
    }
    
    const personalizedHoroscope = generateRealisticHoroscope(selectedSign);
    setHoroscope(`${name}, here's your horoscope for ${selectedSign}: ${personalizedHoroscope}`);
    setShowChart(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Daily Horoscope and Birth Chart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="pt-6">
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="zodiac">Your Zodiac Sign</Label>
                <Select onValueChange={setSelectedSign} value={selectedSign}>
                  <SelectTrigger id="zodiac">
                    <SelectValue placeholder="Select your zodiac sign" />
                  </SelectTrigger>
                  <SelectContent>
                    {zodiacSigns.map((sign) => (
                      <SelectItem key={sign} value={sign}>{sign}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="birthDate">Date of Birth</Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="birthTime">Time of Birth</Label>
                <Input
                  id="birthTime"
                  type="time"
                  value={birthTime}
                  onChange={(e) => setBirthTime(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="birthPlace">Place of Birth</Label>
                <Input
                  id="birthPlace"
                  placeholder="Enter your place of birth"
                  value={birthPlace}
                  onChange={(e) => setBirthPlace(e.target.value)}
                />
              </div>
              <Button onClick={generateHoroscope} type="button">Get Your Horoscope and Chart</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            {horoscope && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Your Daily Horoscope</h2>
                <p className="text-lg leading-relaxed">{horoscope}</p>
              </div>
            )}
            {showChart && (
              <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-4">Your Birth Chart</h2>
                <div className="rounded-lg overflow-hidden">
                  <BirthChartDiagram />
                </div>
                <p className="mt-2 text-sm text-muted-foreground text-center">
                  This is a simplified representation of a birth chart. In a real application, this would be more detailed and based on your input.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Astrology;
