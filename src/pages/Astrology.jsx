import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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

  const generateHoroscope = () => {
    if (!name || !selectedSign) {
      setHoroscope("Please enter your name and select a zodiac sign.");
      return;
    }
    
    const personalizedHoroscope = generateRealisticHoroscope(selectedSign);
    setHoroscope(`${name}, here's your horoscope for ${selectedSign}: ${personalizedHoroscope}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Daily Horoscope</h1>
      <div className="space-y-4 max-w-md">
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
        <Button onClick={generateHoroscope}>Get Your Horoscope</Button>
        {horoscope && (
          <div className="mt-6 p-6 bg-secondary rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Your Daily Horoscope</h2>
            <p className="text-lg leading-relaxed">{horoscope}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Astrology;
