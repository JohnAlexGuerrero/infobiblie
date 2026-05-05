export const capitalizeFirst = (word: string): string => {
  if (isNaN(parseInt(word))) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  return word.charAt(0) + ' ' + word.charAt(1).toUpperCase() + word.slice(2)
}

export const capitalizeFirstShort = (word: string): string => {
  const books = ['1corintios', '1cronicas', '1juan', '1pedro', '1reyes', '1samuel', '1tesalonicenses', '1timoteo', '2corintios', '2cronicas', '2juan', '2pedro', '2reyes', '2samuel', '2tesalonicenses', '2timoteo', '3juan', 'abdias', 'amos', 'apocalipsis', 'cantares', 'colosenses', 'daniel', 'deuteronomio', 'eclesiastes', 'efesios', 'esdras', 'ester', 'exodo', 'ezequiel', 'filemon', 'filipenses', 'galatas', 'genesis', 'habacuc', 'hageo', 'hebreos', 'hechos', 'isaias', 'jeremias', 'job', 'joel', 'jonas', 'josue', 'juan', 'judas', 'jueces', 'lamentaciones', 'levitico', 'lucas', 'malaquias', 'marcos', 'mateo', 'miqueas', 'nahum', 'nehemias', 'numeros', 'oseas', 'proverbios', 'romanos'];
  const bookShorts = ['1co', '1cr', '1jn', '1p', '1r', '1s', '1ts', '1ti', '2co', '2cr', '2jn', '2p', '2r', '2s', '2ts', '2ti', '3jn', 'abd', 'am', 'ap', 'cnt', 'col', 'dn', 'dt', 'ec', 'ef', 'esd', 'est', 'ex', 'ez', 'flm', 'fil', 'ga', 'gn', 'hab', 'hag', 'he', 'hch', 'is', 'jer', 'job', 'jl', 'jon', 'jos', 'jn', 'jud', 'jue', 'lm', 'lv', 'lc', 'mal', 'mr', 'mt', 'mi', 'nah', 'neh', 'nm', 'os', 'pr', 'ro'];

  const indexWord = books.findIndex(el => el === word);;
  return capitalizeFirst(bookShorts[indexWord]);
}