import { parseISO, format } from 'date-fns';

export const formatISOStringToDate = (isoString: string): string => {
  // Parse the ISO date string to a Date object
  const parsedDate = parseISO(isoString);

  // Format the parsed Date object to the desired format
  return format(parsedDate, 'dd-MM-yyyy HH:mm');
};

export const formatNumberToCurrency = (number?: number) => {
  if(number == undefined){
    return 0;
  }
  return new Intl.NumberFormat('de-DE').format(number) + ' đ';
}