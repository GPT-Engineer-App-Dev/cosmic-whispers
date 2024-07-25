import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const zodiacSigns = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

const Astrology = () => {
  const [selectedSign, setSelectedSign] = useState("");
  const [name, setName] = useState("");
  const [horoscope, setHoroscope] = useState("");

  const generateHoroscope = () => {
    if (!name || !selectedSign) {
      setHoroscope("Please enter your name and select a zodiac sign.");
      return;
    }
    
    const horoscopes = [
      "Today is your lucky day! Expect unexpected opportunities.",
      "Take some time for self-reflection. Your inner wisdom has the answers you seek.",
      "Your creativity is at its peak. Start that project you've been putting off.",
      "Communication is key today. Express yourself clearly to avoid misunderstandings.",
      "Financial matters are in focus. It's a good time to review your budget.",
    ];

    const randomHoroscope = horoscopes[Math.floor(Math.random() * horoscopes.length)];
    setHoroscope(`${name}, here's your horoscope for ${selectedSign}: ${randomHoroscope}`);
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
          <div className="mt-6 p-4 bg-secondary rounded-lg">
            <p className="text-lg">{horoscope}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Astrology;
