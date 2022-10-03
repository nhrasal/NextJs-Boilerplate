export default function makeSlug (str: string): string  {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  if (str.charAt(str.length - 1) === '-')
    str = str.slice(0, -1);

  return str;
}