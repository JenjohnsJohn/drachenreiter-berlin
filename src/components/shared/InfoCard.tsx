import { type LucideIcon } from 'lucide-react';

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
}

const InfoCard = ({ icon: Icon, title, description, iconColor = 'text-dragon-green' }: InfoCardProps) => {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1">
      <div className="w-12 h-12 rounded-xl bg-sky-mist flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <h3 className="font-display text-lg font-semibold text-berlin-charcoal mb-2">
        {title}
      </h3>
      <p className="font-body text-sm text-berlin-light leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default InfoCard;
