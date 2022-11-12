import { heroes } from '../data/heroes';

export const getHeroByPublisher = ( publisher ) => {

  const validPublishers = ['DC Comics', 'Marvel Comics']
  if( !validPublishers.includes( publisher)) {
    throw new Error( 'Invalid publisher')
  }

  return heroes.filter( heroe => heroe.publisher === publisher)
}