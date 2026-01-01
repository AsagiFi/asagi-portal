import { deLocalizeUrl } from '$lib/shared/paraglide/runtime';

export const reroute = (request) => deLocalizeUrl(request.url).pathname;
