import { mockEvents } from '../data/mockData';

export const getFeaturedEvents = async () => mockEvents;
export const getEventBySlug = async (slug: string) => mockEvents.find((event) => event.slug === slug);
