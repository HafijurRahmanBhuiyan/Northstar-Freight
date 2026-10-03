import { ServiceItem, OceanFeatureCallout, TestimonialItem, MilestoneItem } from '../types';

export const BRAND = {
  name: 'Northstar Freight',
  shortName: 'Northstar',
  tagline: 'We move freight. We own the outcome.',
  subtagline: 'Dependable freight solutions, coordinated from first mile to final delivery.',
  description: 'Northstar Freight orchestrates global air, ocean, overland, and customs operations with single-thread accountability and real-time operational visibility.',
  phone: '+1 (800) 582-7490',
  email: 'dispatch@northstarfreight.com',
  address: '100 Pierhead Plaza, Suite 400, Seattle, WA 98104',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'air-freight',
    mode: 'air',
    title: 'AIR FREIGHT',
    tagline: 'Move time-sensitive shipments with speed and visibility.',
    description: 'Direct block-space agreements across primary global air lanes. Temperature-sensitive, oversized cargo, and high-value shipments handled with tarmac-level oversight.',
    features: [
      'Charter & scheduled commercial linehaul',
      'Door-to-airport & door-to-door transit',
      'Real-time GPS & temperature telemetry',
      'Priority customs clearance pre-arrival',
    ],
    metrics: { label: 'Average Expedited Transit', value: '24-48 hrs' },
    transitTime: '1 to 3 days',
    coverage: '140+ countries & 380 airports',
  },
  {
    id: 'ocean-freight',
    mode: 'ocean',
    title: 'OCEAN FREIGHT',
    tagline: 'Plan reliable, cost-conscious international shipping.',
    description: 'Contracted vessel capacity across transpacific, transatlantic, and intra-Asia routes. Guaranteed allocations for FCL, consolidated LCL, and specialized breakbulk.',
    features: [
      'Full Container Load (FCL) & Less than Container Load (LCL)',
      'Port-to-port and inland intermodal routing',
      'Bunker adjustment & demurrage mitigation',
      'Roll-on/roll-off and heavy equipment transport',
    ],
    metrics: { label: 'Schedule Adherence', value: '99.4%' },
    transitTime: '12 to 28 days',
    coverage: '120 major global deep-water ports',
  },
  {
    id: 'customs-clearance',
    mode: 'customs',
    title: 'CUSTOMS CLEARANCE',
    tagline: 'Keep shipments moving with expert documentation and support.',
    description: 'Licensed customs brokers ensuring total regulatory compliance. Seamless tariff classification, duty optimization, and rapid electronic release filings.',
    features: [
      'Automated Commercial Environment (ACE) integration',
      'Harmonized System (HS) code auditing',
      'Free Trade Agreement eligibility optimization',
      'Bonded warehouse storage & transshipment',
    ],
    metrics: { label: 'Pre-arrival Release Rate', value: '98.8%' },
    transitTime: 'Same-day filing',
    coverage: 'Global border & customs authorities',
  },
];

export const APPROACH_MILESTONES: MilestoneItem[] = [
  {
    number: '01',
    title: 'Cargo Intake & Route Simulation',
    subtitle: 'First Mile Precision',
    detail: 'Digital cargo manifest verification, packaging integrity check, and lane optimization considering seasonal weather and port congestion.',
    status: 'completed',
  },
  {
    number: '02',
    title: 'Intermodal Transfer & Documentation',
    subtitle: 'Harmonized Handshake',
    detail: 'Bonded transit seals applied, customs clearance pre-filed, and cargo loaded seamlessly onto maritime chassis or air cargo pallets.',
    status: 'completed',
  },
  {
    number: '03',
    title: 'Global Linehaul Monitoring',
    subtitle: 'Continuous Telemetry',
    detail: 'Real-time geofence tracking, engine telemetry, and direct captain/pilot coordination through dedicated Northstar controllers.',
    status: 'active',
  },
  {
    number: '04',
    title: 'Port Entry & White-Glove Handoff',
    subtitle: 'Final Mile Delivery',
    detail: 'Priority container discharge, inland rail or dedicated flatbed drayage, and authenticated delivery receipt confirmation.',
    status: 'upcoming',
  },
];

export const OCEAN_CALLOUTS: OceanFeatureCallout[] = [
  {
    id: 'callout-1',
    title: 'ONE POINT OF CONTACT',
    description: 'A dedicated logistics coordinator who oversees your shipment from port departure to final inland receiving dock.',
    progressThreshold: [0.15, 0.40],
    badge: '01 · Accountability',
  },
  {
    id: 'callout-2',
    title: 'FULL SUPPLY CHAIN MANAGEMENT',
    description: 'Coordinated intermodal rail, maritime vessel booking, and drayage warehousing connected under a single dashboard.',
    progressThreshold: [0.35, 0.60],
    badge: '02 · Integration',
  },
  {
    id: 'callout-3',
    title: 'COMPLIANCE YOU CAN TRUST',
    description: 'Zero-delay regulatory documentation, ISF 10+2 electronic filings, and international maritime security auditing.',
    progressThreshold: [0.55, 0.80],
    badge: '03 · Governance',
  },
  {
    id: 'callout-4',
    title: 'TRANSPARENT, COMPETITIVE PRICING',
    description: 'All-inclusive locked rate contracts without surprise accessorial surcharges or unannounced demurrage penalties.',
    progressThreshold: [0.75, 0.98],
    badge: '04 · Predictability',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'Northstar Freight completely removed the ambiguity from our transpacific shipments. When a typhoon rerouted vessels last winter, our dedicated coordinator diverted our containers to rail within two hours.',
    author: 'Elena Vance',
    role: 'VP of Global Logistics',
    company: 'Meridian Precision Mfg.',
    initials: 'EV',
    verifiedMetric: '2,400+ TEUs Moved Annually',
  },
  {
    id: 'test-2',
    quote: 'Their customs clearance desk is the most proactive we have worked with in fifteen years. We experienced zero port-hold demurrage across our entire European medical device rollout.',
    author: 'Marcus Chen',
    role: 'Supply Chain Director',
    company: 'Solstice Energy Systems',
    initials: 'MC',
    verifiedMetric: '99.8% On-Time Customs Release',
  },
  {
    id: 'test-3',
    quote: 'The level of coordination between ocean vessel discharge and domestic flatbed transport is extraordinary. They don’t just book space; they take complete ownership of the outcome.',
    author: 'Claire Moreau',
    role: 'Head of Global Operations',
    company: 'Veloce Luxury Retail',
    initials: 'CM',
    verifiedMetric: '14-Day Consistent Transatlantic Transit',
  },
];
