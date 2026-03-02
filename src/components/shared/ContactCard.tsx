import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactCardProps {
  name?: string;
  role?: string;
  address?: string;
  phone?: string;
  mobile?: string;
  fax?: string;
  email?: string;
  hours?: string;
}

const ContactCard = ({ name, role, address, phone, mobile, fax, email, hours }: ContactCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card">
      {name && (
        <div className="mb-4">
          <h3 className="font-display text-lg font-semibold text-berlin-charcoal">{name}</h3>
          {role && <p className="font-body text-sm text-dragon-green">{role}</p>}
        </div>
      )}
      <div className="space-y-3">
        {address && (
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-dragon-green flex-shrink-0 mt-0.5" />
            <span className="font-body text-sm text-berlin-light">{address}</span>
          </div>
        )}
        {phone && (
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-dragon-green flex-shrink-0" />
            <a href={`tel:${phone.replace(/[^+\d]/g, '')}`} className="font-body text-sm text-berlin-light hover:text-dragon-green transition-colors">
              {phone}
            </a>
          </div>
        )}
        {mobile && (
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-sage flex-shrink-0" />
            <a href={`tel:${mobile.replace(/[^+\d]/g, '')}`} className="font-body text-sm text-berlin-light hover:text-dragon-green transition-colors">
              {mobile}
            </a>
          </div>
        )}
        {fax && (
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-berlin-light/50 flex-shrink-0" />
            <span className="font-body text-sm text-berlin-light">Fax: {fax}</span>
          </div>
        )}
        {email && (
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-dragon-green flex-shrink-0" />
            <a href={`mailto:${email}`} className="font-body text-sm text-berlin-light hover:text-dragon-green transition-colors">
              {email}
            </a>
          </div>
        )}
        {hours && (
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-golden flex-shrink-0" />
            <span className="font-body text-sm text-berlin-light">{hours}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
