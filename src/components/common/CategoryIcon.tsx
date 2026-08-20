import React from 'react';
import {
  Paintbrush,
  Wrench,
  Zap,
  Hammer,
  Home,
  Bath,
  Utensils,
  Grid,
  DoorClosed,
  ThermometerSnowflake,
  Layers,
  ShieldCheck,
  Building,
  Trees,
  Sparkles,
  Search,
  CheckCircle2,
  Phone,
  Clock,
  MapPin,
  ChevronRight,
  ChevronLeft,
  X,
  HelpCircle,
  Upload,
  AlertCircle,
  LucideProps
} from 'lucide-react';

interface CategoryIconProps extends LucideProps {
  name: string;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({ name, ...props }) => {
  switch (name.toLowerCase()) {
    case 'paintbrush':
      return <Paintbrush {...props} />;
    case 'wrench':
      return <Wrench {...props} />;
    case 'zap':
      return <Zap {...props} />;
    case 'hammer':
      return <Hammer {...props} />;
    case 'home':
      return <Home {...props} />;
    case 'bath':
      return <Bath {...props} />;
    case 'utensils':
      return <Utensils {...props} />;
    case 'grid':
      return <Grid {...props} />;
    case 'doorclosed':
    case 'door':
      return <DoorClosed {...props} />;
    case 'thermometersnowflake':
    case 'climate':
      return <ThermometerSnowflake {...props} />;
    case 'layers':
      return <Layers {...props} />;
    case 'shieldcheck':
    case 'shield':
      return <ShieldCheck {...props} />;
    case 'building':
      return <Building {...props} />;
    case 'trees':
    case 'tree':
      return <Trees {...props} />;
    case 'sparkles':
      return <Sparkles {...props} />;
    case 'search':
      return <Search {...props} />;
    case 'check':
    case 'checkcircle':
      return <CheckCircle2 {...props} />;
    case 'phone':
      return <Phone {...props} />;
    case 'clock':
      return <Clock {...props} />;
    case 'map-pin':
    case 'mappin':
      return <MapPin {...props} />;
    case 'chevronright':
      return <ChevronRight {...props} />;
    case 'chevronleft':
      return <ChevronLeft {...props} />;
    case 'x':
      return <X {...props} />;
    case 'help':
    case 'helpcircle':
      return <HelpCircle {...props} />;
    case 'upload':
      return <Upload {...props} />;
    case 'alert':
    case 'alertcircle':
      return <AlertCircle {...props} />;
    default:
      return <Wrench {...props} />;
  }
};
