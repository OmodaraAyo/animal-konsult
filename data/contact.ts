  import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

  export const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+234 803 714 4137"],
      action: "Call us now"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["drarosofemi56@gmail.com", "drarosofemi@yahoo.com"],
      action: "Send email"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Lagos, Nigeria"],
      action: "Visit us"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
      action: "Working hours"
    }
  ];

  export const serviceOptions = [
  { value: 'training', label: 'Aquaculture Training' },
  { value: 'consulting', label: 'Farm Consulting' },
  { value: 'support', label: 'Support Services' },
  { value: 'setup', label: 'Farm Setup' },
  { value: 'certification', label: 'Certification Programs' },
  { value: 'technology', label: 'Technology Solutions' },
];
